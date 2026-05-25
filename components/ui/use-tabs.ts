import { useCallback, useState, type KeyboardEvent } from "react";

type TabItem = {
  key: string;
};

type UseTabsOptions = {
  initialKey?: string;
  tabId: (key: string) => string;
  panelId: (key: string) => string;
};

export function useTabs<T extends TabItem>(items: readonly T[], options: UseTabsOptions) {
  const [activeKey, setActiveKey] = useState(options.initialKey ?? items[0]?.key ?? "");

  const selectAt = useCallback(
    (index: number) => {
      const item = items[index];
      if (item) setActiveKey(item.key);
    },
    [items],
  );

  const getTabProps = (item: T, index: number) => {
    const active = activeKey === item.key;

    return {
      id: options.tabId(item.key),
      role: "tab" as const,
      "aria-selected": active,
      "aria-controls": options.panelId(item.key),
      tabIndex: active ? 0 : -1,
      onClick: () => setActiveKey(item.key),
      onKeyDown: (event: KeyboardEvent<HTMLButtonElement>) => {
        if (event.key === "ArrowRight") {
          event.preventDefault();
          selectAt((index + 1) % items.length);
        } else if (event.key === "ArrowLeft") {
          event.preventDefault();
          selectAt((index - 1 + items.length) % items.length);
        } else if (event.key === "Home") {
          event.preventDefault();
          selectAt(0);
        } else if (event.key === "End") {
          event.preventDefault();
          selectAt(items.length - 1);
        }
      },
    };
  };

  const getPanelProps = (item: T) => {
    const active = activeKey === item.key;

    return {
      id: options.panelId(item.key),
      role: "tabpanel" as const,
      "aria-labelledby": options.tabId(item.key),
      hidden: !active,
    };
  };

  return {
    activeKey,
    getPanelProps,
    getTabProps,
    isActive: (key: string) => activeKey === key,
    setActiveKey,
  };
}
