# My WASM Markdown Editor

This Repository is a sample project to demonstrate how to build a Markdown Editor using Rust and WebAssembly without any frontend framework.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Node.js, npm, and Rust (+ Cargo) installed on your machine.

Add the wasm32-unknown-unknown target to your Rust installation:

```bash
rustup target add wasm32-unknown-unknown
```
if you are using a Non-Rustup installation, you can need to follow the instructions [here](https://rustwasm.github.io/wasm-pack/book/prerequisites/non-rustup-setups.html#manually-add-wasm32-unknown-unknown)


### Development

1. install the npm dependencies:

```bash
npm install
```

2. Build the Rust code to WebAssembly:

```bash
npm run wasm-pack
```

3. Bundle the JavaScript code:

```bash
npm run bundle
```

4. Start the development server:

```bash
npm run serve
```

5. Open your browser and navigate to `http://localhost:8080/` to see the editor in action.