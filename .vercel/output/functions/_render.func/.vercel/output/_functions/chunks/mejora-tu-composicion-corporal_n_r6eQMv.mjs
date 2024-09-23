import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_Bfy2NWiQ.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>¿Cuántas veces te has frustrado por lo que marca la balanza y has terminado por rendirte? Recuerda que las balanzas convencionales no diferencian entre los distintos tipos de tejidos. Al cuidarte, es posible que estés mejorando tu composición corporal: aumentando músculo y reduciendo grasa, pero eso puede no reflejarse en el peso, e incluso podrías seguir pesando lo mismo o más.</p>\n<p>Entonces, ¿Cómo saber si realmente estás progresando? A través de un estudio antropométrico, donde realizo una serie de medidas que me permitirán diferir tus distintos tipos de tejidos y de esta forma evaluar tu composición corporal. Además, podrás notar los cambios mediante tu rendimiento físico o el calce de tu ropa. Esas son señales claras de que estás en el camino correcto hacia tus objetivos.</p>";

				const frontmatter = {"title":"Mejora tu composición corporal","img":"foto-principal.jpg","order":3};
				const file = "C:/Users/Ezequiel/Desktop/Projects/videau-webpage/src/content/main-sections/mejora-tu-composicion-corporal.md";
				const url = undefined;
				function rawContent() {
					return "\r\n¿Cuántas veces te has frustrado por lo que marca la balanza y has terminado por rendirte? Recuerda que las balanzas convencionales no diferencian entre los distintos tipos de tejidos. Al cuidarte, es posible que estés mejorando tu composición corporal: aumentando músculo y reduciendo grasa, pero eso puede no reflejarse en el peso, e incluso podrías seguir pesando lo mismo o más.\r\n\r\nEntonces, ¿Cómo saber si realmente estás progresando? A través de un estudio antropométrico, donde realizo una serie de medidas que me permitirán diferir tus distintos tipos de tejidos y de esta forma evaluar tu composición corporal. Además, podrás notar los cambios mediante tu rendimiento físico o el calce de tu ropa. Esas son señales claras de que estás en el camino correcto hacia tus objetivos.\r\n";
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
