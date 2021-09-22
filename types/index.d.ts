import type { App } from "vue";

type Component = import("vue").DefineComponent<{
  startVal: number;
  endVal: number;
  duration: number;
  autoplay: boolean;
  decimals: number;
  decimal: number;
  separator: number;
  prefix: number;
  suffix: number;
  useEasing: boolean;

  easingFn: (progress: number, localStartVal: number, intervalVal: number, localDuration: number) => number;

  start(): void;
  pause(): void;
  reset(): void;
}>;

declare type install = {
  install(app: App): void;
};

declare const default_: {
  version: string
} & install;

export declare const CountTo: Component & install

export default default_
