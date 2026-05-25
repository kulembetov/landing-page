"use client";

import { useEffect, useRef, useState } from "react";
import type { HeroCounter } from "@/lib/landing-content";

type HeroPromptProps = {
  prompts: readonly string[];
  statuses: readonly string[];
};

type HeroCountersProps = {
  counters: readonly HeroCounter[];
};

function useTypingAnimation(
  textRef: React.RefObject<HTMLSpanElement | null>,
  caretRef: React.RefObject<HTMLSpanElement | null>,
  statusRef: React.RefObject<HTMLDivElement | null>,
  statusTextRef: React.RefObject<HTMLSpanElement | null>,
  prompts: readonly string[],
  statuses: readonly string[],
) {
  useEffect(() => {
    const text = textRef.current;
    const caret = caretRef.current;
    const status = statusRef.current;
    const statusText = statusTextRef.current;
    if (!text || !status || !statusText || prompts.length === 0 || statuses.length === 0) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      text.textContent = prompts[0];
      if (caret) caret.style.display = "none";
      return;
    }

    const timers = new Set<number>();
    let active = true;
    let promptIndex = 0;

    const wait = (ms: number, next: () => void) => {
      const timer = window.setTimeout(() => {
        timers.delete(timer);
        if (active) next();
      }, ms);
      timers.add(timer);
    };

    const typePrompt = (value: string, done: () => void) => {
      let i = 0;
      text.textContent = "";
      const step = () => {
        text.textContent = value.slice(0, i);
        i += 1;
        if (i <= value.length) wait(22 + Math.random() * 48, step);
        else done();
      };
      step();
    };

    const erasePrompt = (done: () => void) => {
      const value = text.textContent || "";
      let i = value.length;
      const step = () => {
        text.textContent = value.slice(0, i);
        i -= 1;
        if (i >= 0) wait(8 + Math.random() * 12, step);
        else done();
      };
      step();
    };

    const runStatuses = (done: () => void) => {
      let statusIndex = 0;
      statusText.textContent = statuses[0];
      status.classList.add("is-on");
      const step = () => {
        statusIndex += 1;
        if (statusIndex < statuses.length) {
          statusText.textContent = statuses[statusIndex];
          wait(880, step);
        } else {
          wait(760, () => {
            status.classList.remove("is-on");
            wait(380, done);
          });
        }
      };
      wait(880, step);
    };

    const cycle = () => {
      typePrompt(prompts[promptIndex], () => {
        wait(560, () => {
          runStatuses(() => {
            erasePrompt(() => {
              promptIndex = (promptIndex + 1) % prompts.length;
              wait(360, cycle);
            });
          });
        });
      });
    };

    cycle();

    return () => {
      active = false;
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [textRef, caretRef, statusRef, statusTextRef, prompts, statuses]);
}

function useCounters(counters: readonly HeroCounter[]) {
  const [values, setValues] = useState(() => counters.map((counter) => counter.value));

  useEffect(() => {
    const timers = counters.map((counter, i) => {
      const interval = counter.id === "slides" ? 1700 : 2400;
      return window.setInterval(() => {
        if (counter.id !== "slides" && Math.random() <= 0.55) return;
        const delta = counter.id === "slides" ? 1 + Math.floor(Math.random() * 3) : 1;
        setValues((prev) => {
          const next = [...prev];
          next[i] = prev[i] + delta;
          return next;
        });
      }, interval);
    });

    return () => timers.forEach((timer) => window.clearInterval(timer));
  }, [counters]);

  return values;
}

function formatCounter(value: number) {
  return new Intl.NumberFormat("ru-RU").format(value);
}

export function HeroPrompt({ prompts, statuses }: HeroPromptProps) {
  const textRef = useRef<HTMLSpanElement>(null);
  const caretRef = useRef<HTMLSpanElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const statusTextRef = useRef<HTMLSpanElement>(null);

  useTypingAnimation(textRef, caretRef, statusRef, statusTextRef, prompts, statuses);

  return (
    <div className="hero-prompt" aria-hidden="true">
      <div className="hero-prompt-row">
        <span className="hero-prompt-spark" />
        <span className="hero-prompt-text-cell">
          <span className="hero-prompt-text" ref={textRef}>
            {prompts[0]}
          </span>
          <span className="hero-prompt-caret" ref={caretRef} />
        </span>
      </div>
      <div className="hero-prompt-status" ref={statusRef}>
        <span className="hero-prompt-spinner" aria-hidden="true" />
        <span className="min-w-0" ref={statusTextRef}>
          {statuses[0]}
        </span>
      </div>
    </div>
  );
}

export function HeroCounters({ counters }: HeroCountersProps) {
  const counterValues = useCounters(counters);

  return (
    <div className="hero-counter" aria-live="polite">
      {counters.map((counter, index) => (
        <div className="hero-counter-item" key={counter.id}>
          {index > 0 ? <span className="hero-counter-divider" aria-hidden="true" /> : null}
          <div className="hero-counter-value">{formatCounter(counterValues[index])}</div>
          <div className="hero-counter-label">{counter.label}</div>
        </div>
      ))}
    </div>
  );
}
