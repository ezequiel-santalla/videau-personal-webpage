import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_Bfy2NWiQ.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Mi nombre es Josefina Videau, soy licenciada en nutrición, graduada de la Universidad FASTA, Mar del Plata. Además, me especialicé en nutrición deportiva y soy antropometrista I.S.A.K II, lo que me permite realizar un perfil completo de la composición corporal de mis pacientes.</p>\n<p>Por otro lado, me gusta estar en constante aprendizaje, por lo que he incursionado en temas como la salud hormonal femenina, alimentación vegetariana y actualmente estoy realizando el Curso anual de Experto en Calidad de Alimentos, con el objetivo de integrar estos conocimientos en mis prácticas y de este modo ofrecer un enfoque integral.</p>\n<p>Para solicitar un turno conmigo podes comunicarte vía WhatsApp al +5492236210282. Estaré respondiendo a la brevedad todas tus consultas!</p>";

				const frontmatter = {"title":"¿Quién soy?","img":"foto-principal.jpg","order":1};
				const file = "C:/Users/Ezequiel/Desktop/Projects/videau-webpage/src/content/main-sections/quien-soy.md";
				const url = undefined;
				function rawContent() {
					return "\r\nMi nombre es Josefina Videau, soy licenciada en nutrición, graduada de la Universidad FASTA, Mar del Plata. Además, me especialicé en nutrición deportiva y soy antropometrista I.S.A.K II, lo que me permite realizar un perfil completo de la composición corporal de mis pacientes.\r\n\r\nPor otro lado, me gusta estar en constante aprendizaje, por lo que he incursionado en temas como la salud hormonal femenina, alimentación vegetariana y actualmente estoy realizando el Curso anual de Experto en Calidad de Alimentos, con el objetivo de integrar estos conocimientos en mis prácticas y de este modo ofrecer un enfoque integral.\r\n\r\nPara solicitar un turno conmigo podes comunicarte vía WhatsApp al +5492236210282. Estaré respondiendo a la brevedad todas tus consultas!\r\n";
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
