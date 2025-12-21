import {zstd,unzstd} from "./zstd.mjs";
onmessage=async({data})=>{
  if(data.level===undefined){
    const compressed=data;
    const uncompressed=unzstd(compressed);
    postMessage({compressed,uncompressed},[compressed.buffer,uncompressed.buffer]);
  }else{
    const {uncompressed,level}=data;
    const compressed=zstd(uncompressed,level);
    postMessage({compressed,uncompressed},[compressed.buffer,uncompressed.buffer]);
  }
}
postMessage('ready');
