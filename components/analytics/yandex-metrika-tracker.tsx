"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { hitMetrikaPage, reachMetrikaGoal } from "@/lib/yandex-metrika";

const CLICK_GOAL_SELECTOR = "[data-metrika-goal]";
const SCROLL_GOALS_SELECTOR = "[data-metrika-scroll-goals]";

function parseGoals(value: string | null) {
  return (value ?? "")
    .split(",")
    .map((goal) => goal.trim())
    .filter(Boolean);
}

export function YandexMetrikaTracker() {
  const pathname = usePathname();

  useEffect(() => {
    hitMetrikaPage(`${window.location.pathname}${window.location.search}${window.location.hash}`);
  }, [pathname]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const goalElement = target.closest<HTMLElement>(CLICK_GOAL_SELECTOR);
      const goal = goalElement?.dataset.metrikaGoal;
      if (goal) reachMetrikaGoal(goal);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    const firedGoals = new Set<string>();
    const sections = Array.from(document.querySelectorAll<HTMLElement>(SCROLL_GOALS_SELECTOR));
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          parseGoals(entry.target.getAttribute("data-metrika-scroll-goals")).forEach((goal) => {
            if (firedGoals.has(goal)) return;
            firedGoals.add(goal);
            reachMetrikaGoal(goal);
          });

          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "-35% 0px -35% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return null;
}
