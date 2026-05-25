"use client";

import { useEffect, useState } from "react";
import { CloseIcon } from "@/components/ui/icons";
import { FadeUp } from "@/components/ui/fade-up";
import { LosslessPicture } from "@/components/ui/lossless-picture";
import { BENEFIT_CARDS } from "@/lib/landing-content";

function Lightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-label="Просмотр слайда"
      aria-modal
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <button className="lightbox-close" type="button" aria-label="Закрыть" onClick={onClose}>
        <CloseIcon />
      </button>
      <img className="lightbox-image" src={src} alt={alt} />
    </div>
  );
}

export function BenefitsGallery() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  return (
    <>
      <FadeUp delay={0.08}>
        <div className="benefits-grid">
          {BENEFIT_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <article key={card.id} className="benefit-card">
                <span className="benefit-card-icon" aria-hidden="true">
                  <Icon size={18} strokeWidth={1.8} />
                </span>
                <span className="benefit-card-title">{card.title}</span>
                <p className="benefit-card-copy">{card.description}</p>
                <div className="benefit-card-media">
                  <LosslessPicture
                    pictureClassName="block"
                    src={`/${card.image}`}
                    alt={card.alt}
                    width={1280}
                    height={720}
                    pictureStyle={{ cursor: "zoom-in" }}
                    onClick={() => setLightbox({ src: `/${card.image}`, alt: card.alt })}
                  />
                </div>
              </article>
            );
          })}
        </div>
      </FadeUp>

      {lightbox && (
        <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />
      )}
    </>
  );
}
