use wasm_bindgen::prelude::*;
use zstd::stream::copy_decode;
use zstd::stream::copy_encode;

#[wasm_bindgen]
pub fn unzstd(data: &[u8]) -> Vec<u8> {
    let mut out = Vec::with_capacity(data.len() + 64);
    copy_decode(data, &mut out).unwrap();
    out
}

#[wasm_bindgen]
pub fn zstd(data: &[u8], quality: u8) -> Vec<u8> {
    let mut out = Vec::with_capacity(data.len() + 64);
    copy_encode(data, &mut out, quality as i32).unwrap();
    out
}
