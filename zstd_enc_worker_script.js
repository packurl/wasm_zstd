importScripts('./zstd_enc_for_importScripts.js');
(async()=>{
  const fn=await zstd;
  onmessage=async msg=>{
    postMessage(fn(msg.data.bytes,msg.data.level));
  }
  postMessage('ready');
})();