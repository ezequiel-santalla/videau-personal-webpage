import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_B9ajrtch.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Recetario con más de 15 formas fáciles, prácticas y ricas de incorporar tu proteína en polvo en tu alimentación diaria.\r\nIdeas sencillas donde podrás encontrar una nueva forma de incorporar a tu alimentación de una forma distinta al batido tradicional.</p>";

				const frontmatter = {"category":"Recetario","title":"Whey","price":3000,"img":"recetario-whey.png"};
				const file = "C:/Users/Ezequiel/Desktop/Projects/videau-webpage/src/content/recipes/recetario-whey.md";
				const url = undefined;
				function rawContent() {
					return "\r\nRecetario con más de 15 formas fáciles, prácticas y ricas de incorporar tu proteína en polvo en tu alimentación diaria.\r\nIdeas sencillas donde podrás encontrar una nueva forma de incorporar a tu alimentación de una forma distinta al batido tradicional.";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
