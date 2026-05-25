"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";

type SegmentedItem = {
  key: string;
  label: ReactNode;
};

type TabButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  "aria-selected"?: boolean | "true" | "false";
};

type SegmentedControlProps<T extends SegmentedItem> = {
  ariaLabel: string;
  getTabProps: (item: T, index: number) => TabButtonProps;
  items: readonly T[];
  tone?: "light" | "dark";
};

export function SegmentedControl<T extends SegmentedItem>({
  ariaLabel,
  getTabProps,
  items,
  tone = "light",
}: SegmentedControlProps<T>) {
  return (
    <div className="segmented-control" data-tone={tone}>
      <div className="segmented-list" role="tablist" aria-label={ariaLabel}>
        {items.map((item, index) => {
          const tabProps = getTabProps(item, index);

          return (
            <button key={item.key} {...tabProps} className="segmented-tab" type="button">
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
