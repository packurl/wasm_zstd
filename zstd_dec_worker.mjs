const url=new URL('zstd_dec.wasm',import.meta.url);
await (await fetch(url)).arrayBuffer();
const worker=await new Promise(r=>{
  // For browsers that don't support type: module on workers (firefox < 114, safari < 15)
  // const worker=new Worker(new URL('./zstd_dec_worker_script.js',import.meta.url));
  const worker=new Worker(new URL('./zstd_dec_worker_script.mjs',import.meta.url),{type:'module'});
  worker.onmessage=msg=>{
    if(msg.data==='ready'){
      worker.onmessage=null;
      r(worker);
    }
  };
});
/**
 * Decompresses an array of bytes compressed with Zstd compression.
 * The compressed version is transferred to the worker and transferred back on completion.
 * @param {Uint8Array} bytes
 * @return {Promise<{compressed:Uint8Array,uncompressed:Uint8Array}>}
 */
const unzstd=(bytes)=>new Promise(r=>{
  worker.onmessage=({data:{compressed,uncompressed}})=>{
    worker.onmessage=null;
    r({compressed,uncompressed});
  }
  worker.postMessage(bytes,[bytes.buffer]);
});

export {unzstd};
export default unzstd;
