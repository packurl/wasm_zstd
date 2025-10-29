const url=new URL('zstd.wasm',import.meta.url);
await (await fetch(url)).arrayBuffer();
const worker=await new Promise(r=>{
  // For browsers that don't support type: module on workers (firefox < 114, safari < 15)
  // const worker=new Worker(new URL('./zstd_worker_script.js',import.meta.url));
  const worker=new Worker(new URL('./zstd_worker_script.mjs',import.meta.url),{type:'module'});
  worker.onmessage=msg=>{
    if(msg.data==='ready'){
      worker.onmessage=null;
      r(worker);
    }
  };
});
/**
 * Decompresses an array of bytes compressed with Zstd compression.
 * @param {Uint8Array} bytes
 * @return {Promise<Uint8Array>}
 */
const unzstd=(bytes)=>new Promise(r=>{
  worker.onmessage=msg=>{
    worker.onmessage=null;
    r(msg.data);
  }
  worker.postMessage(bytes);
});
/**
 * Compresses an array of bytes with Zstd compression.
 * @param {Uint8Array} bytes
 * @param {1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22} [level=22]
 * @return {Promise<Uint8Array>}
 */
const zstd=(bytes,level=22)=>new Promise(r=>{
  worker.onmessage=msg=>{
    worker.onmessage=null;
    r(msg.data);
  }
  worker.postMessage({bytes,level});
});

export {unzstd,zstd};
