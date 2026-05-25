"use client";

import { useRef } from "react";
import { ChevronIcon } from "@/components/ui/icons";
import { LosslessPicture } from "@/components/ui/lossless-picture";

type SpotlightCarouselProps = {
  slides: readonly string[];
};

export function SpotlightCarousel({ slides }: SpotlightCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    const el = scrollRef.current;
    if (!el) return;

    const slide = el.querySelector<HTMLElement>("[data-spotlight-slide]");
    const step = slide ? slide.getBoundingClientRect().width + 28 : 800;
    el.scrollBy({ left: step * dir, behavior: "smooth" });
  };

  return (
    <div className="spotlight-carousel">
      <button
        className="spotlight-arrow spotlight-arrow-prev"
        type="button"
        aria-label="Предыдущий слайд"
        onClick={() => scroll(-1)}
      >
        <ChevronIcon direction="left" />
      </button>
      <div className="spotlight-scroll" ref={scrollRef}>
        {slides.map((src, i) => (
          <article key={i} className="spotlight-slide" data-spotlight-slide>
            <LosslessPicture
              pictureClassName="media-fill"
              className="block w-full h-full object-cover"
              src={`/${src}`}
              alt={`Пример презентации ${i + 1}`}
              width={1600}
              height={900}
              loading={i === 0 ? "eager" : "lazy"}
              fetchPriority={i === 0 ? "high" : undefined}
            />
          </article>
        ))}
      </div>
      <button
        className="spotlight-arrow spotlight-arrow-next"
        type="button"
        aria-label="Следующий слайд"
        onClick={() => scroll(1)}
      >
        <ChevronIcon direction="right" />
      </button>
    </div>
  );
}
