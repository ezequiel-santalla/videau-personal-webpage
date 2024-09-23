import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as createAstro } from './astro/server_B9ajrtch.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$MainImgRelative = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainImgRelative;
  const { imageSrc, altText } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section> <img${addAttribute(imageSrc, "src")}${addAttribute(altText, "alt")}> </section>`;
}, "C:/Users/Ezequiel/Desktop/Projects/videau-webpage/src/components/MainImgRelative.astro", void 0);

export { $$MainImgRelative as $ };
