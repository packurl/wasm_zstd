/* tslint:disable */
/* eslint-disable */
import {zstd} from "zstd_worker";

declare module 'zstd_worker' {
  export type CompressionLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22;
  /**
   * Compresses an array of bytes with Zstd compression.
   * @param {Uint8Array} bytes
   * @param {1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22} [level=22]
   * @return {Promise<Uint8Array>}
   */
  export function zstd(bytes: Uint8Array, level: CompressionLevel): Promise<Uint8Array>;
  /**
   * Decompresses an array of bytes compressed with Zstd compression.
   * @param {Uint8Array} bytes
   * @return {Promise<Uint8Array>}
   */
  export function unzstd(bytes: Uint8Array): Promise<Uint8Array>;
}