import legacy from '@vitejs/plugin-legacy'
import ViteRestart from 'vite-plugin-restart';

// https://vitejs.dev/config/
export default ({ command }) => ({
  base: command === 'serve' ? '' : '/dist/',
  build: {
    manifest: true,
    outDir: './web/dist/',
    rollupOptions: {
      input: {
        app: '/src/js/app.js',
      }
    },
  },
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11']
    }),
    ViteRestart({
      reload: [
          './templates/**/*',
      ],
    }),
  ],
  server: {
    host: '0.0.0.0',
  },
});
