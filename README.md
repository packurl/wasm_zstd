[WASM](https://developer.mozilla.org/en-US/docs/WebAssembly) libs
for Zstd compression and decompression.

This is a simple wrapper on top of
the [zstd-rs](https://github.com/gyscos/zstd-rs) [rust](https://www.rust-lang.org/) [crate](https://crates.io/crates/zstd).

<br>

Compilation:

`wasm-pack build --target web`

<br>

Dependencies:

- [zstd-rs](https://github.com/gyscos/zstd-rs) ([MIT License](https://github.com/gyscos/zstd-rs/blob/main/LICENSE))
- [wasm-bindgen](https://github.com/rustwasm/wasm-bindgen) ([MIT License](https://github.com/rustwasm/wasm-bindgen/blob/main/LICENSE-MIT))

