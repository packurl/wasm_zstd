/* tslint:disable */
/* eslint-disable */
declare module 'zstd_enc' {
  /**
   * Decompresses an array of bytes compressed with Zstd compression.
   * @param {Uint8Array} bytes
   * @return {Uint8Array}
   */
  export function unzstd(bytes: Uint8Array): Uint8Array;
  export default unzstd;
}