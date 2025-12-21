const url=new URL('zstd_enc.wasm',import.meta.url);
await (await fetch(url)).arrayBuffer();
const worker=await new Promise(r=>{
  // For browsers that don't support type: module on workers (firefox < 114, safari < 15)
  // const worker=new Worker(new URL('./zstd_enc_worker_script.js',import.meta.url));
  const worker=new Worker(new URL('./zstd_enc_worker_script.mjs',import.meta.url),{type:'module'});
  worker.onmessage=msg=>{
    if(msg.data==='ready'){
      worker.onmessage=null;
      r(worker);
    }
  };
});
/**
 * Compresses an array of bytes with Zstd compression.
 * The uncompressed version is transferred to the worker and transferred back on completion.
 * @param {Uint8Array} bytes
 * @param {1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22} [level=22]
 * @return {Promise<{compressed:Uint8Array,uncompressed:Uint8Array}>}
 */
const zstd=(bytes,level=22)=>new Promise(r=>{
  worker.onmessage=({data:{compressed,uncompressed}})=>{
    worker.onmessage=null;
    r({compressed,uncompressed});
  }
  worker.postMessage({uncompressed:bytes,level},[bytes.buffer]);
});

export {zstd};
export default zstd;
