/* empty css                                   */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, a as addAttribute, e as renderTransition } from '../chunks/astro/server_Bfy2NWiQ.mjs';
import 'kleur/colors';
import { $ as $$MainImgRelative } from '../chunks/MainImgRelative_BNcBtgoN.mjs';
import { $ as $$Layout } from '../chunks/Layout_DA3M2vfV.mjs';
import { g as getCollection } from '../chunks/_astro_content_C6g1usRo.mjs';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const $$Tienda = createComponent(async ($$result, $$props, $$slots) => {
  const recipes = await getCollection("recipes");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Tienda" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "MainImgRelative", $$MainImgRelative, { "imageSrc": "/img/main-section/banner.jpg", "alt": "Banner Principal" })} <section class="max-w-[70%] my-12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"> ${recipes.map(async (recipe) => {
    const { slug, data } = recipe;
    const { img, category, title, price } = data;
    return renderTemplate`<a${addAttribute(`tienda/receta/${slug}`, "href")}> <article class="p-8 bg-white rounded-lg shadow-lg transition-transform transform duration-300 hover:scale-105"> <div class="w-[187px] h-[259px] mx-auto overflow-hidden rounded-md"> <img${addAttribute(`/img/store/${img}`, "src")}${addAttribute(title, "alt")} class="w-full h-full object-cover"${addAttribute(renderTransition($$result2, "xxinez2n", "", `img-store-${slug}`), "data-astro-transition-scope")}> </div> <h2 class="mt-4 text-xl font-semibold text-gray-800"> ${category} - ${title} </h2> <h4 class="mt-2 text-lg text-gray-600"> <strong>$</strong> ${price.toFixed(2)} </h4> <button type="button" class="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
Ver Info
</button> </article> </a>`;
  })} </section> </main> ` })}`;
}, "C:/Users/Ezequiel/Desktop/Projects/videau-webpage/src/pages/tienda.astro", "self");

const $$file = "C:/Users/Ezequiel/Desktop/Projects/videau-webpage/src/pages/tienda.astro";
const $$url = "/tienda";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Tienda,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
