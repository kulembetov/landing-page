import { TabsShowcaseTabs } from "@/components/sections/tabs-showcase-tabs";
import { FadeUp } from "@/components/ui/fade-up";
import { SectionHeader } from "@/components/ui/section-header";
import { TABS_SHOWCASE_COPY } from "@/lib/landing-content";

export function TabsShowcase() {
  return (
    <section
      className="landing-section landing-section-padded"
      id="tabs-showcase"
      aria-labelledby="tabs-title"
      data-metrika-scroll-goals="reach_templates"
    >
      <div className="tabs-container">
        <FadeUp>
          <SectionHeader
            section="tabs-showcase"
            titleId="tabs-title"
            title={TABS_SHOWCASE_COPY.title}
            subtitle={TABS_SHOWCASE_COPY.subtitle}
          />
        </FadeUp>
        <FadeUp delay={0.08}>
          <TabsShowcaseTabs />
        </FadeUp>
      </div>
    </section>
  );
}
