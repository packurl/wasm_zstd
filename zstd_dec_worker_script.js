importScripts('./zstd_dec_for_importScripts.js');
(async()=>{
  const fn=await unzstd;
  onmessage=async msg=>postMessage(fn(msg.data));
  postMessage('ready');
})();