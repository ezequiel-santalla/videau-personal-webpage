import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_B9ajrtch.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Guía inicial para quienes deseen iniciar a identificar sus síntomas gastrointestinales y el origen de ellos.\r\nExplico los malestares más comunes y ejemplos de alimentos que los provocan como así también los que pueden ayudarte a mejorar tu salud.\r\nEs importante acompañar el tratamiento de un diagnóstico acertado y de un profesional que pueda guiarte individualmente en tu caso.</p>";

				const frontmatter = {"category":"Guía","title":"Salud digestiva","price":3000,"img":"transforma-tu-salud-digestiva.png"};
				const file = "C:/Users/Ezequiel/Desktop/Projects/videau-webpage/src/content/recipes/transforma-salud-digestiva.md";
				const url = undefined;
				function rawContent() {
					return "\r\nGuía inicial para quienes deseen iniciar a identificar sus síntomas gastrointestinales y el origen de ellos.\r\nExplico los malestares más comunes y ejemplos de alimentos que los provocan como así también los que pueden ayudarte a mejorar tu salud.\r\nEs importante acompañar el tratamiento de un diagnóstico acertado y de un profesional que pueda guiarte individualmente en tu caso.\r\n\r\n";
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
