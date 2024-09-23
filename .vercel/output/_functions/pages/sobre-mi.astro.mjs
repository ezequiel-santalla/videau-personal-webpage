/* empty css                                    */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_B9ajrtch.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_yicNQnqb.mjs';
export { renderers } from '../renderers.mjs';

const $$SobreMi = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Sobre M\xED" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-[80%] flex my-12 justify-center mx-auto gap-16"> <div class="flex-1 flex justify-center"> <img src="/img/main-section/foto-principal.jpg" alt="Foto principal" class="w-[424px]"> </div> <div class="flex-1 prose"> <h2 class="text-xl mb-4 font-semibold">Hola! Me llamo Josefina, Licenciada en Nutrición.</h2> <p>Desde pequeña, me ha interesado la nutrición y siempre he buscado informarme sobre el tema. Ante la diversidad de opiniones sobre cómo alimentarse y qué alimentos son saludables, decidí estudiar la carrera y me enamoré de esta hermosa profesión. Creo en un enfoque integral, donde la alimentación se complementa con el descanso, el manejo del estrés, el ejercicio y el entorno social.</p> <p>Vivimos en una sociedad que todavía asocia el número en la balanza como el único indicador de salud, a pesar de que existen otros índices importantes. Por eso, durante las consultas trabajamos en tus hábitos y rutinas, buscando estrategias que mejoren tu calidad de vida a través de la alimentación. Además, si presentas síntomas gastrointestinales o tienes objetivos de rendimiento deportivo, también abordamos esas necesidades.</p> <p>Es fundamental entender que la comida es nuestra gran aliada y el combustible que nuestro cuerpo necesita. No existen alimentos "malos"; todo se trata de cómo está compuesta tu vida. Aprendí que la nutrición es clave para el bienestar, pero no es el único aspecto. Por ello, insisto en evaluar a cada paciente de manera integral y en trabajar interdisciplinariamente cuando sea necesario.</p> </div> </main> ` })}`;
}, "C:/Users/Ezequiel/Desktop/Projects/videau-webpage/src/pages/sobre-mi.astro", void 0);

const $$file = "C:/Users/Ezequiel/Desktop/Projects/videau-webpage/src/pages/sobre-mi.astro";
const $$url = "/sobre-mi";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$SobreMi,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
