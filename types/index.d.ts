import Vue, { PluginFunction } from "vue";

export declare class CountTo extends Vue {
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
}

export default class {
  static install (app: PluginFunction<never>): void;

  version: string;
}
