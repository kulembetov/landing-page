import { LosslessPicture } from "@/components/ui/lossless-picture";
import { CtaButton } from "@/components/ui/cta-button";
import { FadeUp } from "@/components/ui/fade-up";
import { SectionHeader } from "@/components/ui/section-header";
import { APP_CTA_HREF, CTA_LABELS, SHOWCASE_COPY, SHOWCASE_ROWS } from "@/lib/landing-content";

export function Showcase() {
  return (
    <section
      className="landing-section landing-section-padded"
      id="showcase"
      aria-labelledby="showcase-title"
    >
      <FadeUp>
        <SectionHeader
          section="showcase"
          titleId="showcase-title"
          title={
            <>
              {SHOWCASE_COPY.title[0]}
              <br />
              {SHOWCASE_COPY.title[1]}
            </>
          }
          subtitle={SHOWCASE_COPY.subtitle}
        />
      </FadeUp>
      <FadeUp delay={0.08}>
        <div className="showcase-rows">
          {SHOWCASE_ROWS.map((row, rowIndex) => (
            <div
              key={row.duration}
              className={`overflow-hidden${row.reverse ? " marquee--reverse" : ""}`}
              style={{ "--marquee-duration": row.duration } as React.CSSProperties}
              aria-hidden="true"
            >
              <div className="marquee-track">
                {[...row.slideNumbers, ...row.slideNumbers].map((number, slideIndex) => (
                  <article key={`${rowIndex}-${slideIndex}`} className="showcase-frame">
                    <LosslessPicture
                      pictureClassName="media-fill"
                      className="block w-full h-full object-cover"
                      src={`/slides/slide-${number}.webp`}
                      alt=""
                      width={1600}
                      height={900}
                    />
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </FadeUp>
      <div className="flex justify-center mt-32">
        <CtaButton href={APP_CTA_HREF}>{CTA_LABELS.start}</CtaButton>
      </div>
    </section>
  );
}
