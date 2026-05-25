"use client";

import { useCallback, useRef, useState } from "react";
import { CompareKnobIcon } from "@/components/ui/icons";
import { LosslessPicture } from "@/components/ui/lossless-picture";
import { SegmentedControl } from "@/components/ui/segmented-control";
import { useTabs } from "@/components/ui/use-tabs";
import { TRANSFORM_PANELS } from "@/lib/landing-content";

function CompareSlider({
  beforeSrc,
  beforeAlt,
  afterSrc,
  afterAlt,
}: {
  beforeSrc: string;
  beforeAlt: string;
  afterSrc: string;
  afterAlt: string;
}) {
  const [percent, setPercent] = useState(50);
  const rootRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const clamp = (value: number) => Math.max(0, Math.min(100, value));

  const percentFromPointer = useCallback((event: React.PointerEvent) => {
    const rect = rootRef.current!.getBoundingClientRect();
    return clamp(((event.clientX - rect.left) / rect.width) * 100);
  }, []);

  const onPointerDown = (event: React.PointerEvent) => {
    dragging.current = true;
    rootRef.current?.classList.add("is-dragging");
    rootRef.current?.setPointerCapture(event.pointerId);
    setPercent(percentFromPointer(event));
  };

  const onPointerMove = (event: React.PointerEvent) => {
    if (!dragging.current) return;
    event.preventDefault();
    setPercent(percentFromPointer(event));
  };

  const onPointerUp = (event: React.PointerEvent) => {
    dragging.current = false;
    rootRef.current?.classList.remove("is-dragging");
    try {
      rootRef.current?.releasePointerCapture(event.pointerId);
    } catch {}
  };

  const onKeyDown = (event: React.KeyboardEvent) => {
    const step = event.shiftKey ? 10 : 2;
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      setPercent((value) => clamp(value - step));
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      setPercent((value) => clamp(value + step));
    } else if (event.key === "Home") {
      event.preventDefault();
      setPercent(0);
    } else if (event.key === "End") {
      event.preventDefault();
      setPercent(100);
    }
  };

  return (
    <div
      ref={rootRef}
      className="compare"
      role="slider"
      tabIndex={0}
      aria-label="Сравнение до и после"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(percent)}
      aria-valuetext={`${Math.round(percent)}% после`}
      style={{ "--compare-pct": `${percent}%` } as React.CSSProperties}
      onKeyDown={onKeyDown}
      onPointerCancel={onPointerUp}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
    >
      <LosslessPicture
        pictureClassName="media-fill"
        className="compare-image"
        src={beforeSrc}
        alt={beforeAlt}
        width={1600}
        height={900}
      />
      <LosslessPicture
        pictureClassName="media-fill"
        className="compare-image compare-image-after"
        src={afterSrc}
        alt={afterAlt}
        width={1600}
        height={900}
      />
      <div className="compare-divider" aria-hidden="true" style={{ left: `${percent}%` }} />
      <div className="compare-knob" aria-hidden="true" style={{ left: `${percent}%` }}>
        <CompareKnobIcon />
      </div>
    </div>
  );
}

export function TransformTabs() {
  const tabs = useTabs(TRANSFORM_PANELS, {
    initialKey: TRANSFORM_PANELS[0].key,
    panelId: (key) => `transform-panel-${key}`,
    tabId: (key) => `transform-tab-${key}`,
  });

  return (
    <>
      <SegmentedControl
        ariaLabel="Сравнение форматов"
        getTabProps={tabs.getTabProps}
        items={TRANSFORM_PANELS}
        tone="dark"
      />
      <div className="tabs-panel-container">
        {TRANSFORM_PANELS.map((panel) => (
          <div key={panel.key} {...tabs.getPanelProps(panel)}>
            <CompareSlider
              beforeSrc={`/${panel.before}`}
              beforeAlt={panel.beforeAlt}
              afterSrc={`/${panel.after}`}
              afterAlt={panel.afterAlt}
            />
          </div>
        ))}
      </div>
    </>
  );
}
