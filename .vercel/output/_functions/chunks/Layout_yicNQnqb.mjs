import { c as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, a as addAttribute, d as renderComponent, b as createAstro, u as unescapeHTML, F as Fragment, i as renderHead, j as renderSlot } from './astro/server_B9ajrtch.mjs';
import 'kleur/colors';
import { getIconData, iconToSVG } from '@iconify/utils';
import 'clsx';

const icons = {};

const cache = /* @__PURE__ */ new WeakMap();

const $$Astro$1 = createAstro();
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Icon;
  class AstroIconError extends Error {
    constructor(message) {
      super(message);
      this.hint = "";
    }
  }
  const req = Astro2.request;
  const { name = "", title, "is:inline": inline = false, ...props } = Astro2.props;
  const map = cache.get(req) ?? /* @__PURE__ */ new Map();
  const i = map.get(name) ?? 0;
  map.set(name, i + 1);
  cache.set(req, map);
  const includeSymbol = !inline && i === 0;
  let [setName, iconName] = name.split(":");
  if (!setName && iconName) {
    const err = new AstroIconError(`Invalid "name" provided!`);
    throw err;
  }
  if (!iconName) {
    iconName = setName;
    setName = "local";
    if (!icons[setName]) {
      const err = new AstroIconError('Unable to load the "local" icon set!');
      throw err;
    }
    if (!(iconName in icons[setName].icons)) {
      const err = new AstroIconError(`Unable to locate "${name}" icon!`);
      throw err;
    }
  }
  const collection = icons[setName];
  if (!collection) {
    const err = new AstroIconError(`Unable to locate the "${setName}" icon set!`);
    throw err;
  }
  const iconData = getIconData(collection, iconName ?? setName);
  if (!iconData) {
    const err = new AstroIconError(`Unable to locate "${name}" icon!`);
    throw err;
  }
  const id = `ai:${collection.prefix}:${iconName ?? setName}`;
  if (props.size) {
    props.width = props.size;
    props.height = props.size;
    delete props.size;
  }
  const renderData = iconToSVG(iconData);
  const normalizedProps = { ...renderData.attributes, ...props };
  const normalizedBody = renderData.body;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(normalizedProps)}${addAttribute(name, "data-icon")}> ${title && renderTemplate`<title>${title}</title>`} ${inline ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "id": id }, { "default": ($$result2) => renderTemplate`${unescapeHTML(normalizedBody)}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${includeSymbol && renderTemplate`<symbol${addAttribute(id, "id")}>${unescapeHTML(normalizedBody)}</symbol>`}<use${addAttribute(`#${id}`, "xlink:href")}></use> ` })}`} </svg>`;
}, "C:/Users/Ezequiel/Desktop/Projects/videau-webpage/node_modules/astro-icon/components/Icon.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="p-4 shadow-md"> <div class="container mx-auto flex justify-between items-center"> <!-- Logo o nombre de la nutricionista --> <a href="/" class="text-green-600 text-2xl font-bold">
Nutricionista
</a> <!-- Menú de navegación --> <nav> <ul class="flex space-x-6 font-medium"> <li class="transition duration-300 hover:scale-110"> <a href="/" class="text-green-600">Inicio</a> </li> <li class="transition duration-300 hover:scale-110"> <a href="/sobre-mi" class="text-green-600">Sobre Mí</a> </li> <li class="transition duration-300 hover:scale-110"> <a href="/tienda" class="text-green-600">Tienda</a> </li> <li class="transition duration-300 hover:scale-110"> <a href="/consulta" class="text-green-600">Consultorio</a> </li> <li class="transition duration-300 hover:scale-110"> <a href="/contacto" class="text-green-600">Contacto</a> </li> <!-- Carrito de compras --> <li class="transition duration-300 hover:scale-110 relative"> <a href="/carrito" class="text-green-600"> ${renderComponent($$result, "Icon", $$Icon, { "name": "cart" })} </a> <!-- Este span es opcional si quieres mostrar un número de artículos en el carrito --> <span class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full">3</span> </li> </ul> </nav> </div> </header>`;
}, "C:/Users/Ezequiel/Desktop/Projects/videau-webpage/src/components/Header.astro", void 0);

const $$Turno = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<a href="https://wa.me/542236210282" class="fixed bottom-0 right-0 mb-4 mr-4 max-w-52 bg-green-600 text-white text-center p-3 shadow-md z-50 rounded-2xl hover:scale-105 transition duration-300" target="_blank" rel="noopener noreferrer"> <p class="text-lg font-semibold">Agenda tu turno!</p> </a>`;
}, "C:/Users/Ezequiel/Desktop/Projects/videau-webpage/src/components/Turno.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const name = "Josefina Videau";
  return renderTemplate`${maybeRenderHead()}<footer class="bg-black text-white py-4"> <div class="container mx-auto text-center"> <p class="">© 2024 ${name}. Todos los derechos reservados.</p> </div> </footer>`;
}, "C:/Users/Ezequiel/Desktop/Projects/videau-webpage/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  const name = "Josefina Videau";
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/ico" href="img/foto-principal.ico"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${name} - ${title}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} ${renderComponent($$result, "Turno", $$Turno, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/Ezequiel/Desktop/Projects/videau-webpage/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
