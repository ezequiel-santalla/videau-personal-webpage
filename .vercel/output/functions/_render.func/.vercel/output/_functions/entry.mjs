import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_COfo_Atl.mjs';
import { manifest } from './manifest_CDm7612i.mjs';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/carrito.astro.mjs');
const _page2 = () => import('./pages/consulta.astro.mjs');
const _page3 = () => import('./pages/contacto.astro.mjs');
const _page4 = () => import('./pages/sobre-mi.astro.mjs');
const _page5 = () => import('./pages/tienda/receta/_id_.astro.mjs');
const _page6 = () => import('./pages/tienda.astro.mjs');
const _page7 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/carrito.astro", _page1],
    ["src/pages/consulta.astro", _page2],
    ["src/pages/contacto.astro", _page3],
    ["src/pages/sobre-mi.astro", _page4],
    ["src/pages/tienda/receta/[id].astro", _page5],
    ["src/pages/tienda.astro", _page6],
    ["src/pages/index.astro", _page7]
]);
const serverIslandMap = new Map();

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "a3ebc1b3-a795-4f20-8b68-5bafc62bbce6",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
