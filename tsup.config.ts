import { defineConfig } from 'tsup';

export default defineConfig({
  splitting: false,
  platform: 'browser',
  entry: ['index.ts'],
  outDir: 'dist',
  format: 'esm',
  loader: {
    '.wasm': 'file',
  },
  tsconfig: 'tsconfig.json',
  minify: false,
  sourcemap: true,
  noExternal: [/.*/], // Bundle all dependencies
  dts: {
    resolve: true,
  },
});
