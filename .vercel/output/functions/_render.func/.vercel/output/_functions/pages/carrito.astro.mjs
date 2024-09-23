/* empty css                                   */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_Bfy2NWiQ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DA3M2vfV.mjs';
export { renderers } from '../renderers.mjs';

const $$Carrito = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Carrito" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main></main> ` })}`;
}, "C:/Users/Ezequiel/Desktop/Projects/videau-webpage/src/pages/carrito.astro", void 0);

const $$file = "C:/Users/Ezequiel/Desktop/Projects/videau-webpage/src/pages/carrito.astro";
const $$url = "/carrito";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Carrito,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
