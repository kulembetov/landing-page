type IconProps = {
  size?: number;
  strokeWidth?: number;
  className?: string;
};

type Direction = "left" | "right";

export function PlayCircleIcon({ size = 16, strokeWidth = 1.4, className }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="8" cy="8" r="6.25" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M6.7 5.6L10.1 8l-3.4 2.4V5.6Z" fill="currentColor" />
    </svg>
  );
}

export function ChevronIcon({
  direction,
  size = 22,
  strokeWidth = 2,
  className,
}: IconProps & { direction: Direction }) {
  const path = direction === "left" ? "M14 5l-6 6 6 6" : "M8 5l6 6-6 6";

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 22 22"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={path}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

export function CompareKnobIcon({ strokeWidth = 2, className }: IconProps) {
  return (
    <>
      <svg className={className} width="8" height="14" viewBox="0 0 8 14" fill="none">
        <path
          d="M6 1L1 7l5 6"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
        />
      </svg>
      <svg className={className} width="8" height="14" viewBox="0 0 8 14" fill="none">
        <path
          d="M2 1l5 6-5 6"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
        />
      </svg>
    </>
  );
}

export function StarIcon({ size = 14, className }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M7 .8L8.9 4.7l4.3.6-3.1 3 .7 4.3L7 10.5l-3.8 2.1.7-4.3L.8 5.3l4.3-.6z" />
    </svg>
  );
}

export function PlusIcon({ size = 14, strokeWidth = 2, className }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7 1v12M1 7h12"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

export function CloseIcon({ size = 20, strokeWidth = 2, className }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 5l10 10M15 5L5 15"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}
