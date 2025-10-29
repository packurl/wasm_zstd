import {unzstd} from "./zstd_dec.mjs";
onmessage=async({data})=>postMessage(unzstd(data));
postMessage('ready');
