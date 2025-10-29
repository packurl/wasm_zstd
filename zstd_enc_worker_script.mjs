import {zstd} from "./zstd_enc.mjs";
onmessage=async({data:{bytes,level}})=>postMessage(zstd(bytes,level));
postMessage('ready');
