const url=new URL('zstd.wasm',import.meta.url);
let wasm;
const wbg={
  __wbindgen_init_externref_table: function(){
    const table=wasm.__wbindgen_export_0;
    const offset=table.grow(4);
    table.set(0);
    table.set(offset);
    table.set(offset+1,null);
    table.set(offset+2,true);
    table.set(offset+3,false);
  }
};
const {instance}=await WebAssembly.instantiateStreaming(await fetch(url,{cache:'force-cache'}),{wbg});
wasm=instance.exports;
const malloc=wasm.__wbindgen_malloc;
const free=wasm.__wbindgen_free;
/**
 * Decompresses an array of bytes compressed with Zstd compression.
 * @param {Uint8Array} bytes
 * @return {Uint8Array}
 */
const unzstd=bytes=>{
  const n1=bytes.length;
  const p1=malloc(n1,1);
  new Uint8Array(wasm.memory.buffer).set(bytes,p1);
  const [p2,n2]=wasm.unzstd(p1,n1);
  const res=new Uint8Array(wasm.memory.buffer).subarray(p2,p2+n2).slice();
  free(p2,n2);
  return res;
};
/**
 * Compresses an array of bytes with Zstd compression.
 * @param {Uint8Array} bytes
 * @param {1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22} [level=11]
 * @return {Uint8Array}
 */
const zstd=(bytes,level=22)=>{
  const n1=bytes.length;
  const p1=malloc(n1,1);
  new Uint8Array(wasm.memory.buffer).set(bytes,p1);
  const [p2,n2]=wasm.zstd(p1,n1,level);
  const res=new Uint8Array(wasm.memory.buffer).subarray(p2,p2+n2).slice();
  free(p2,n2);
  return res;
};
export {unzstd,zstd};
