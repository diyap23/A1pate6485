
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/A1pate6485/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/A1pate6485"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 33387, hash: '9b648de7d7deef3fd5c591e331c742ffda897373f4fb275ec05659d7b4227279', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17126, hash: '88bfb926aa05febab3a605845f724ea4ed3d06245e79298495f4567623a2efe3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 52711, hash: '1ad5cb85ad5667692a38a66fc96412c632869fd2e63c2d6704a46a8a44c97431', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-WV74VZRB.css': {size: 17001, hash: 'QjM0ABQYcco', text: () => import('./assets-chunks/styles-WV74VZRB_css.mjs').then(m => m.default)}
  },
};
