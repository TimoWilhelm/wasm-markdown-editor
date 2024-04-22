import init, { render } from '@wasm_sample/markdown';
import module from '@wasm_sample/markdown/markdown_bg.wasm?url';
import { marked } from 'marked';

const url = new URL(module, import.meta.url);

await init(url);

const parseMarkdown = (markdown: string) => {
  const useWasm = (document.getElementById('wasm-toggle') as HTMLInputElement).checked;

  const start = performance.now();

  try {
    if (useWasm) {
      return render(markdown);
    } else {
      return marked.parse(markdown, { async: false }).toString();
    }
  } finally {
    const end = performance.now();
    console.log(`Rendered using ${useWasm ? 'WASM' : 'JS'} in ${end - start}ms`);
  }
};

const inputElement = document.getElementById('input') as HTMLTextAreaElement;
const outputElement = document.getElementById('output') as HTMLDivElement;

inputElement.addEventListener('input', () => {
  outputElement.innerHTML = parseMarkdown(inputElement.value);
});
