import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_B9ajrtch.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Recetario donde podrás encontrar más de 40 recetas de incorporar verduras en las estaciones más frías del año, siendo plato principal, acompañante o incluso una reunión social.\r\nPodrás encontrar verduras rellenas, masas rellenas, con rebozado, huevo y muchas más!</p>";

				const frontmatter = {"category":"Recetario","title":"Invierno","price":15000,"img":"recetario-invierno.png"};
				const file = "C:/Users/Ezequiel/Desktop/Projects/videau-webpage/src/content/recipes/recetario-invierno.md";
				const url = undefined;
				function rawContent() {
					return "\r\nRecetario donde podrás encontrar más de 40 recetas de incorporar verduras en las estaciones más frías del año, siendo plato principal, acompañante o incluso una reunión social.\r\nPodrás encontrar verduras rellenas, masas rellenas, con rebozado, huevo y muchas más!\r\n";
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
