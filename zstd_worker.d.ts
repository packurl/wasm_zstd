/* tslint:disable */
/* eslint-disable */
declare module 'zstd_worker' {
  export type CompressionLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22;
  /**
   * Compresses an array of bytes with Zstd compression.
   * The uncompressed version is transferred to the worker and transferred back on completion.
   * @param {Uint8Array} bytes
   * @param {1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22} [level=22]
   * @return {Promise<{compressed:Uint8Array,uncompressed:Uint8Array}>}
   */
  export function zstd(bytes: Uint8Array, level: CompressionLevel): Promise<{compressed:Uint8Array,uncompressed:Uint8Array}>;
  /**
   * Decompresses an array of bytes compressed with Zstd compression.
   * The compressed version is transferred to the worker and transferred back on completion.
   * @param {Uint8Array} bytes
   * @return {Promise<{compressed:Uint8Array,uncompressed:Uint8Array}>}
   */
  export function unzstd(bytes: Uint8Array): Promise<{compressed:Uint8Array,uncompressed:Uint8Array}>;
}