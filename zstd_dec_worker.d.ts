/* tslint:disable */
/* eslint-disable */
declare module 'zstd_dec_worker' {
  /**
   * Decompresses an array of bytes compressed with Zstd compression.
   * The compressed version is transferred to the worker and transferred back on completion.
   * @param {Uint8Array} bytes
   * @return {Promise<{compressed:Uint8Array,uncompressed:Uint8Array}>}
   */
  export function unzstd(bytes: Uint8Array): Promise<{compressed:Uint8Array,uncompressed:Uint8Array}>;
  export default unzstd;
}