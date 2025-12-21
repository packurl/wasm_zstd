import {zstd} from "./zstd_enc.mjs";
onmessage=async({data:{uncompressed,level}})=>{
  const compressed=zstd(uncompressed,level);
  postMessage({compressed,uncompressed},[compressed.buffer,uncompressed.buffer]);
}
postMessage('ready');
