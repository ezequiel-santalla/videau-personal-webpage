import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_B9ajrtch.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Recetario con más de 20 variedades para incorporar a tu alimentación basada en plantas, veggie o vegana, fuente de proteína vegetal, nutritiva y fáciles de hacer.\r\nRecetas donde podrás añadir tu toque personal y podrás crear mayor variedad de platos e incluso organizar tus comidas para asegurar el valor nutricional a tus comidas.</p>";

				const frontmatter = {"category":"Recetario","title":"Veggie","price":12000,"img":"recetario-veggie.png"};
				const file = "C:/Users/Ezequiel/Desktop/Projects/videau-webpage/src/content/recipes/recetario-veggie.md";
				const url = undefined;
				function rawContent() {
					return "\r\nRecetario con más de 20 variedades para incorporar a tu alimentación basada en plantas, veggie o vegana, fuente de proteína vegetal, nutritiva y fáciles de hacer.\r\nRecetas donde podrás añadir tu toque personal y podrás crear mayor variedad de platos e incluso organizar tus comidas para asegurar el valor nutricional a tus comidas.\r\n";
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
