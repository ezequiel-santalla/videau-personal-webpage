/* empty css                                   */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_Bfy2NWiQ.mjs';
import 'kleur/colors';
import { $ as $$MainImgRelative } from '../chunks/MainImgRelative_BNcBtgoN.mjs';
import { $ as $$Layout } from '../chunks/Layout_DA3M2vfV.mjs';
export { renderers } from '../renderers.mjs';

const $$Consulta = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Consultame" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "MainImgRelative", $$MainImgRelative, { "imageSrc": "/img/main-section/banner.jpg", "alt": "Banner Principal" })} <article class="flex max-w-[60%] mx-auto my-12 prose gap-24"> <div class="flex-1 flex justify-start"> <img src="/img/main-section/foto-principal.jpg" alt="Foto principal" class="w-80 pt-4"> </div> <div class="flex-1"> <h2>Mi lugar de trabajo...</h2> <p>Brindo consultas presenciales en mi consultorio de Palermo y consultas online a través de videollamada.</p> <p>Lo que promovemos es el cambio de hábitos, que tiene como objetivo mejorar tanto nuestra salud y nuestra composición corporal, como nuestro vínculo con la comida y con nuestro cuerpo. No se trata de hacer dieta ni de pasar hambre, se trata de aprender a comer teniendo en cuenta tanto nuestras necesidades y objetivos, como nuestras ganas del momento.</p> <p>Armamos planes alimentarios para personas que llevan una alimentación omnívora, vegetariana o vegana.</p> </div> </article> <article class="flex flex-row-reverse max-w-[60%] mx-auto my-12 prose gap-24"> <div class="flex-1 flex justify-end"> <img src="/img/main-section/foto-principal.jpg" alt="Foto principal" class="w-80 pt-4"> </div> <div class="flex-1"> <h2>Mi lugar de trabajo...</h2> <p>Brindo consultas presenciales en mi consultorio de Palermo y consultas online a través de videollamada.</p> <p>Lo que promovemos es el cambio de hábitos, que tiene como objetivo mejorar tanto nuestra salud y nuestra composición corporal, como nuestro vínculo con la comida y con nuestro cuerpo. No se trata de hacer dieta ni de pasar hambre, se trata de aprender a comer teniendo en cuenta tanto nuestras necesidades y objetivos, como nuestras ganas del momento.</p> <p>Armamos planes alimentarios para personas que llevan una alimentación omnívora, vegetariana o vegana.</p> </div> </article> </main> ` })}`;
}, "C:/Users/Ezequiel/Desktop/Projects/videau-webpage/src/pages/consulta.astro", void 0);

const $$file = "C:/Users/Ezequiel/Desktop/Projects/videau-webpage/src/pages/consulta.astro";
const $$url = "/consulta";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Consulta,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
