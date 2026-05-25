import { FadeUp } from "@/components/ui/fade-up";
import { SectionHeader } from "@/components/ui/section-header";
import { LosslessPicture } from "@/components/ui/lossless-picture";
import { HOWIT_COPY } from "@/lib/landing-content";
import type { CSSProperties } from "react";

export function Howto() {
  return (
    <section
      id="howit"
      className="landing-section"
      aria-labelledby="howit-title"
      data-nav-theme="dark"
      data-metrika-scroll-goals="reach_how"
      style={{ "--section-nav-bg": "var(--dark-blue-card)" } as CSSProperties}
    >
      <div className="section-panel section-panel-dark-blue">
        <FadeUp>
          <SectionHeader
            section="howit"
            titleId="howit-title"
            title={
              <>
                {HOWIT_COPY.title[0]}
                <br />
                <em className="section-title-accent">{HOWIT_COPY.title[1]}</em>
              </>
            }
            subtitle={HOWIT_COPY.subtitle}
          />
        </FadeUp>

        <div className="howto-layout">
          <FadeUp className="min-w-0">
            <div className="howto-device">
              <div className="howto-screen">
                <LosslessPicture
                  pictureClassName="media-fill"
                  className="block w-full h-full object-contain"
                  src="/slides-6/processes-after.webp"
                  alt="Готовый слайд с процессом, созданный Present Simple"
                  width={1600}
                  height={900}
                />
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
