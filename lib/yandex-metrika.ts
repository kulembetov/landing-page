export const YANDEX_METRIKA_COUNTER_ID = 95556485;

export type YandexMetrikaGoal =
  | "how_it_works"
  | "pattern"
  | "about_us"
  | "start_header"
  | "login"
  | "start_main_block"
  | "start_third_block"
  | "start_eighth_block"
  | "start_tenth_block"
  | "bue3_ninth_block"
  | "bue5_ninth_block"
  | "bue17_ninth_block"
  | `reach_${string}`;

type YandexMetrikaFunction = ((...args: unknown[]) => void) & {
  a?: unknown[][];
  l?: number;
};

declare global {
  interface Window {
    ym?: YandexMetrikaFunction;
  }
}

function getMetrika() {
  if (typeof window === "undefined") return null;

  if (!window.ym) {
    const ym = ((...args: unknown[]) => {
      ym.a = ym.a || [];
      ym.a.push(args);
    }) as YandexMetrikaFunction;

    ym.l = Date.now();
    window.ym = ym;
  }

  return window.ym;
}

export function reachMetrikaGoal(goal: YandexMetrikaGoal | string) {
  getMetrika()?.(YANDEX_METRIKA_COUNTER_ID, "reachGoal", goal);
}

export function hitMetrikaPage(url: string) {
  getMetrika()?.(YANDEX_METRIKA_COUNTER_ID, "hit", url);
}
