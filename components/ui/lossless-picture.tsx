import type { CSSProperties } from "react";

type LosslessPictureProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  pictureClassName?: string;
  pictureStyle?: CSSProperties;
  loading?: "lazy" | "eager";
  fetchPriority?: "high" | "low" | "auto";
  onClick?: () => void;
};

function toWebpPath(src: string): string {
  return src.replace(/\.(png|jpe?g)$/i, ".webp");
}

export function LosslessPicture({
  src,
  alt,
  width,
  height,
  className,
  pictureClassName,
  pictureStyle,
  loading = "lazy",
  fetchPriority,
  onClick,
}: LosslessPictureProps) {
  const normalizedSrc = src.startsWith("/") ? src : `/${src}`;
  const webpSrc = toWebpPath(normalizedSrc);

  return (
    <picture className={pictureClassName} style={pictureStyle} onClick={onClick}>
      <source srcSet={webpSrc} type="image/webp" />
      <img
        src={normalizedSrc}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding={fetchPriority === "high" ? "sync" : "async"}
      />
    </picture>
  );
}
