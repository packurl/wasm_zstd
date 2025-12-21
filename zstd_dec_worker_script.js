importScripts('./zstd_dec_for_importScripts.js');
(async()=>{
  const fn=await unzstd;
  onmessage=async({data:compressed})=>{
    const decompressed=fn(compressed);
    postMessage({compressed,decompressed},[compressed.buffer,decompressed.buffer]);
  }
  postMessage('ready');
})();