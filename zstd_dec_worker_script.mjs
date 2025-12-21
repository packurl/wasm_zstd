import {unzstd} from "./zstd_dec.mjs";
onmessage=async({data:compressed})=>{
  const uncompressed=unzstd(compressed);
  postMessage({compressed,uncompressed},[compressed.buffer,uncompressed.buffer]);
}
postMessage('ready');
