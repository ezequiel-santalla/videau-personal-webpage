import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_B9ajrtch.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Me enfoco en incorporar nuevos hábitos, pudiendo de esta forma cambiar, mejorar o incluir nuevas estrategias que permitan mejorar tu estado de salud.</p>\n<p>Se trata de un un enfoque en donde disfrutes del camino y en donde los cambios sean de forma paulatina y siempre trabajando un desafío a la vez, para que los cambios que realices se sostengan en el tiempo.</p>\n<p>En el caso de objetivos deportivos, se trabajara de la misma y además se añadirá estrategias y rutinas para los momentos de tus entrenamientos y competencias.</p>";

				const frontmatter = {"title":"¿Cómo trabajo?","img":"foto-principal.jpg","order":2};
				const file = "C:/Users/Ezequiel/Desktop/Projects/videau-webpage/src/content/main-sections/aprende-nuevos-habitos.md";
				const url = undefined;
				function rawContent() {
					return "\r\nMe enfoco en incorporar nuevos hábitos, pudiendo de esta forma cambiar, mejorar o incluir nuevas estrategias que permitan mejorar tu estado de salud.\r\n\r\nSe trata de un un enfoque en donde disfrutes del camino y en donde los cambios sean de forma paulatina y siempre trabajando un desafío a la vez, para que los cambios que realices se sostengan en el tiempo.\r\n\r\nEn el caso de objetivos deportivos, se trabajara de la misma y además se añadirá estrategias y rutinas para los momentos de tus entrenamientos y competencias.\r\n";
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
