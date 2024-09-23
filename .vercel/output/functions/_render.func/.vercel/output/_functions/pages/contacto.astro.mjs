/* empty css                                   */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_Bfy2NWiQ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DA3M2vfV.mjs';
export { renderers } from '../renderers.mjs';

const $$Contacto = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contacto" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-6 bg-gray-200 max-w-[35%] mx-auto my-12 rounded-md"> <div class="container mx-auto px-8"> <h2 class="text-3xl font-bold text-center text-green-600 mb-6">
Contacto
</h2> <form class="bg-white shadow-md rounded-lg p-8"> <div class="mb-4"> <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Nombre</label> <input type="text" id="name" placeholder="Tu nombre" required class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"> </div> <div class="mb-4"> <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Correo Electrónico</label> <input type="email" id="email" placeholder="Tu correo electrónico" required class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"> </div> <div class="mb-4"> <label for="subject" class="block text-gray-700 text-sm font-bold mb-2">Asunto</label> <input type="text" id="subject" placeholder="Asunto" required class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"> </div> <div class="mb-4"> <label for="message" class="block text-gray-700 text-sm font-bold mb-2">Mensaje</label> <textarea id="message" rows="4" placeholder="Tu mensaje" required class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea> </div> <div class="flex items-center justify-between"> <button type="submit" class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
Enviar
</button> </div> </form> </div> </section> ` })}`;
}, "C:/Users/Ezequiel/Desktop/Projects/videau-webpage/src/pages/contacto.astro", void 0);

const $$file = "C:/Users/Ezequiel/Desktop/Projects/videau-webpage/src/pages/contacto.astro";
const $$url = "/contacto";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contacto,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
