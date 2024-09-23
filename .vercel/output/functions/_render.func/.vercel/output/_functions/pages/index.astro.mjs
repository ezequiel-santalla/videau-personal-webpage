/* empty css                                   */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, a as addAttribute } from '../chunks/astro/server_Bfy2NWiQ.mjs';
import 'kleur/colors';
import { $ as $$MainImgRelative } from '../chunks/MainImgRelative_BNcBtgoN.mjs';
import { $ as $$Layout } from '../chunks/Layout_DA3M2vfV.mjs';
import { g as getCollection, r as renderEntry } from '../chunks/_astro_content_BsxeM-cF.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const mainArticles = await getCollection("main-sections");
  mainArticles.sort((a, b) => {
    const orderA = a.data.order || 0;
    const orderB = b.data.order || 0;
    return orderA - orderB;
  });
  let isLeftAligned = true;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Nutricionista" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "MainImgRelative", $$MainImgRelative, { "imageSrc": "/img/main-section/banner.jpg", "alt": "Banner Principal" })} <section class="flex flex-col items-center mt-20"> ${mainArticles.map(async (article) => {
    const { data } = article;
    const { title, img } = data;
    const { Content } = await renderEntry(article);
    const articleClass = `flex max-w-[70%] mx-auto mb-16 items-start gap-16 ${isLeftAligned ? "flex-row-reverse" : ""}`;
    isLeftAligned = !isLeftAligned;
    return renderTemplate`<article${addAttribute(articleClass, "class")}> <div class="flex flex-col w-full prose p-0"> <h2 class="text-3xl mb-4">${title}</h2> ${renderComponent($$result2, "Content", Content, {})} </div> <img${addAttribute(`/img/main-section/${img}`, "src")}${addAttribute(title, "alt")} class="w-80"> </article>`;
  })} </section> </main> ` })}`;
}, "C:/Users/Ezequiel/Desktop/Projects/videau-webpage/src/pages/index.astro", void 0);

const $$file = "C:/Users/Ezequiel/Desktop/Projects/videau-webpage/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
