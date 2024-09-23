/* empty css                                          */
import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead, a as addAttribute } from '../../../chunks/astro/server_B9ajrtch.mjs';
import 'kleur/colors';
import { r as renderEntry, g as getCollection } from '../../../chunks/_astro_content_DfaIPxeU.mjs';
import { $ as $$Layout } from '../../../chunks/Layout_yicNQnqb.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const recipes = await getCollection("recipes");
  return recipes.map((recipe) => ({
    params: { id: recipe.slug },
    props: { recipe }
  }));
}
const prerender = true;
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { recipe } = Astro2.props;
  const { data, slug } = recipe;
  const { category, title, price, img } = data;
  const { Content } = await renderEntry(recipe);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${title}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-[70%] flex my-12 justify-center mx-auto gap-24"> <div class="flex-1 w-[340px] h-[480px] overflow-hidden flex justify-end items-center"> <img${addAttribute(`/img/store/${img}`, "src")}${addAttribute(title, "alt")} class="w-auto h-full object-cover"> </div> <div class="flex-1 prose"> <h2 class="text-3xl mb-2">${category} - ${title}</h2> <p class="text-2xl mb-2"><strong>$</strong>${price.toFixed(2)}</p> ${renderComponent($$result2, "Content", Content, {})} <button class="mt-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300 hover:scale-105">Agregar al carrito</button> </div> </main> ` })}`;
}, "C:/Users/Ezequiel/Desktop/Projects/videau-webpage/src/pages/tienda/receta/[id].astro", void 0);

const $$file = "C:/Users/Ezequiel/Desktop/Projects/videau-webpage/src/pages/tienda/receta/[id].astro";
const $$url = "/tienda/receta/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  getStaticPaths,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
