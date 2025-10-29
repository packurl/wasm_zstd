/* tslint:disable */
/* eslint-disable */
declare module 'zstd_dec_worker' {
  /**
   * Decompresses an array of bytes compressed with Zstd compression.
   * @param {Uint8Array} bytes
   * @return {Promise<Uint8Array>}
   */
  export function unzstd(bytes: Uint8Array): Promise<Uint8Array>;
  export default unzstd;
}