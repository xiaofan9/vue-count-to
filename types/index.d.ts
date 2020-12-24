// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { App, PluginFunction } from "vue";

export declare class CountTo {
  static install (app: App): void;
  static install (app: PluginFunction<never>): void;

  version: string
}

export default CountTo;
