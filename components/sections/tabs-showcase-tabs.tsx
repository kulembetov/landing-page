"use client";

import { LosslessPicture } from "@/components/ui/lossless-picture";
import { SegmentedControl } from "@/components/ui/segmented-control";
import { useTabs } from "@/components/ui/use-tabs";
import { TABS_SHOWCASE_ITEMS } from "@/lib/landing-content";

export function TabsShowcaseTabs() {
  const tabs = useTabs(TABS_SHOWCASE_ITEMS, {
    initialKey: TABS_SHOWCASE_ITEMS[0].key,
    panelId: (key) => `tabs-showcase-panel-${key}`,
    tabId: (key) => `tabs-showcase-tab-${key}`,
  });

  return (
    <>
      <SegmentedControl
        ariaLabel="Типы слайдов"
        getTabProps={tabs.getTabProps}
        items={TABS_SHOWCASE_ITEMS}
      />
      <div className="tabs-panel-container">
        {TABS_SHOWCASE_ITEMS.map((tab) => (
          <div key={tab.key} {...tabs.getPanelProps(tab)} className="tabs-showcase-panel">
            <div className="tabs-media-frame">
              <LosslessPicture
                pictureClassName="media-fill"
                className="block w-full h-full object-cover"
                src={`/${tab.src}`}
                alt={tab.alt}
                width={1600}
                height={900}
              />
            </div>
            <div className="tabs-point-list">
              {tab.items.map((item, itemIndex) => (
                <div key={itemIndex} className="tabs-point">
                  <span className="tabs-point-number">0{itemIndex + 1}</span>
                  <div>
                    <h3 className="tabs-point-title">{item.title}</h3>
                    <p className="tabs-point-copy">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
