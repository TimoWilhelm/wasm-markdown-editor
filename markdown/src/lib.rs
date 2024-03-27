extern crate console_error_panic_hook;
use pulldown_cmark::{html, Parser};
use wasm_bindgen::prelude::*;
use web_sys::console;
use std::panic;

// This function will be executed on wasm module instantiation
#[wasm_bindgen(start)]
pub fn start() -> Result<(), JsValue> {
    // setup better panic logging
    panic::set_hook(Box::new(console_error_panic_hook::hook));

    console::log_1(&"Hello from Rust!".into());
    Ok(())
}

#[wasm_bindgen]
pub fn render(input: &str) -> String {
    let parser = Parser::new(input);
    let mut html_output = String::new();
    html::push_html(&mut html_output, parser);
    return html_output;
}

#[wasm_bindgen]
pub fn panic() {
    panic!("panic!");
}