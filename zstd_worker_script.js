importScripts('./zstd_for_importScripts.js');
(async()=>{
  const {zstd,unzstd}=await fns;
  onmessage=async msg=>{
    postMessage(msg.data.level===undefined?unzstd(msg.data):zstd(msg.data.bytes,msg.data.level));
  }
  postMessage('ready');
})();