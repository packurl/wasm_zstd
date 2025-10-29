/* tslint:disable */
/* eslint-disable */
declare module 'zstd_enc' {
  export type CompressionLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22;

  /**
   * Compresses an array of bytes with Brotli.
   * @param {Uint8Array} bytes
   * @param {1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22} [level=22]
   * @return {Uint8Array}
   */
  export function zstd(bytes: Uint8Array, level: CompressionLevel): Uint8Array;
  export default zstd;
}