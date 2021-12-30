import type { App, DefineComponent } from "vue";

type Component = DefineComponent<{
  startVal?: number;
  endVal?: number;
  duration?: number;
  autoplay?: boolean;
  decimals?: number;
  decimal?: string;
  separator?: string;
  prefix?: string;
  suffix?: string;
  useEasing?: boolean;

  easingFn?: (progress: number, localStartVal: number, intervalVal: number, localDuration: number) => number;
  start?: () => void;
  pause?: () => void;
  reset?: () => void;
}>;

declare type install = {
  install(app: App): void;
};

declare const default_: {
  version: string
} & install;

export declare const CountTo: Component & install

export default default_
