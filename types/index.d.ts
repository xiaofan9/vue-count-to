// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { App, PluginFunction } from "vue";

export declare class CountTo {
  static install (app: App): void;
  static install (app: PluginFunction<never>): void;

  version: string;
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

  easingFn: () => void;

  start(): void;
  pause(): void;
  reset(): void;
}

export default CountTo;
