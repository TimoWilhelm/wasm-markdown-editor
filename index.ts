import init, { render } from '@wasm_sample/markdown';
import module from '@wasm_sample/markdown/markdown_bg.wasm';

const url = new URL(module, import.meta.url);

await init(url);

const inputElement = document.getElementById('input') as HTMLTextAreaElement;
const outputElement = document.getElementById('output') as HTMLDivElement;

inputElement.addEventListener('input', () => {
  outputElement.innerHTML = render(inputElement.value);
});
