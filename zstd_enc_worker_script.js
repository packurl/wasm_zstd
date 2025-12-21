importScripts('./zstd_enc_for_importScripts.js');
(async()=>{
  const fn=await zstd;
  onmessage=async({data:{uncompressed,level}})=>{
    const compressed=fn(uncompressed,level);
    postMessage({compressed,uncompressed},[compressed.buffer,uncompressed.buffer]);
  }
  postMessage('ready');
})();