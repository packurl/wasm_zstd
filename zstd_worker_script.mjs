import {zstd,unzstd} from "./zstd.mjs";
onmessage=async({data})=>postMessage(data.level===undefined?unzstd(data):zstd(data.bytes,data.level));
postMessage('ready');
