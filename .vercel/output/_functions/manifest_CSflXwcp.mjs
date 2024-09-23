import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_BX9_TmI7.mjs';
import { e as decodeKey } from './chunks/astro/server_B9ajrtch.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/Ezequiel/Desktop/Projects/videau-webpage/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/consulta.ClY0i9fG.css"}],"routeData":{"route":"/consulta","isIndex":false,"type":"page","pattern":"^\\/consulta\\/?$","segments":[[{"content":"consulta","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/consulta.astro","pathname":"/consulta","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/consulta.ClY0i9fG.css"}],"routeData":{"route":"/contacto","isIndex":false,"type":"page","pattern":"^\\/contacto\\/?$","segments":[[{"content":"contacto","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contacto.astro","pathname":"/contacto","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/consulta.ClY0i9fG.css"}],"routeData":{"route":"/sobre-mi","isIndex":false,"type":"page","pattern":"^\\/sobre-mi\\/?$","segments":[[{"content":"sobre-mi","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sobre-mi.astro","pathname":"/sobre-mi","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/consulta.ClY0i9fG.css"}],"routeData":{"route":"/tienda","isIndex":false,"type":"page","pattern":"^\\/tienda\\/?$","segments":[[{"content":"tienda","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tienda.astro","pathname":"/tienda","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/consulta.ClY0i9fG.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["C:/Users/Ezequiel/Desktop/Projects/videau-webpage/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/Users/Ezequiel/Desktop/Projects/videau-webpage/src/pages/tienda.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/tienda@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Ezequiel/Desktop/Projects/videau-webpage/src/pages/tienda/receta/[id].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/tienda/receta/[id]@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Ezequiel/Desktop/Projects/videau-webpage/src/pages/consulta.astro",{"propagation":"none","containsHead":true}],["C:/Users/Ezequiel/Desktop/Projects/videau-webpage/src/pages/contacto.astro",{"propagation":"none","containsHead":true}],["C:/Users/Ezequiel/Desktop/Projects/videau-webpage/src/pages/sobre-mi.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/consulta@_@astro":"pages/consulta.astro.mjs","\u0000@astro-page:src/pages/contacto@_@astro":"pages/contacto.astro.mjs","\u0000@astro-page:src/pages/sobre-mi@_@astro":"pages/sobre-mi.astro.mjs","\u0000@astro-page:src/pages/tienda/receta/[id]@_@astro":"pages/tienda/receta/_id_.astro.mjs","\u0000@astro-page:src/pages/tienda@_@astro":"pages/tienda.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","C:/Users/Ezequiel/Desktop/Projects/videau-webpage/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","C:/Users/Ezequiel/Desktop/Projects/videau-webpage/src/content/main-sections/aprende-nuevos-habitos.md?astroContentCollectionEntry=true":"chunks/aprende-nuevos-habitos_7P2QOM9y.mjs","C:/Users/Ezequiel/Desktop/Projects/videau-webpage/src/content/main-sections/mejora-tu-composicion-corporal.md?astroContentCollectionEntry=true":"chunks/mejora-tu-composicion-corporal_qNmT8Wlr.mjs","C:/Users/Ezequiel/Desktop/Projects/videau-webpage/src/content/main-sections/quien-soy.md?astroContentCollectionEntry=true":"chunks/quien-soy_DVOajGo2.mjs","C:/Users/Ezequiel/Desktop/Projects/videau-webpage/src/content/recipes/recetario-invierno.md?astroContentCollectionEntry=true":"chunks/recetario-invierno_D1UhHJA6.mjs","C:/Users/Ezequiel/Desktop/Projects/videau-webpage/src/content/recipes/recetario-veggie.md?astroContentCollectionEntry=true":"chunks/recetario-veggie_DwtkkZn3.mjs","C:/Users/Ezequiel/Desktop/Projects/videau-webpage/src/content/recipes/recetario-whey.md?astroContentCollectionEntry=true":"chunks/recetario-whey_BfyEApqs.mjs","C:/Users/Ezequiel/Desktop/Projects/videau-webpage/src/content/recipes/transforma-salud-digestiva.md?astroContentCollectionEntry=true":"chunks/transforma-salud-digestiva_Dl9DaTlY.mjs","C:/Users/Ezequiel/Desktop/Projects/videau-webpage/src/content/main-sections/aprende-nuevos-habitos.md?astroPropagatedAssets":"chunks/aprende-nuevos-habitos_BUsIE54D.mjs","C:/Users/Ezequiel/Desktop/Projects/videau-webpage/src/content/main-sections/mejora-tu-composicion-corporal.md?astroPropagatedAssets":"chunks/mejora-tu-composicion-corporal_CkxHwMsr.mjs","C:/Users/Ezequiel/Desktop/Projects/videau-webpage/src/content/main-sections/quien-soy.md?astroPropagatedAssets":"chunks/quien-soy_CtkjLg1t.mjs","C:/Users/Ezequiel/Desktop/Projects/videau-webpage/src/content/recipes/recetario-invierno.md?astroPropagatedAssets":"chunks/recetario-invierno_C5kr7tLJ.mjs","C:/Users/Ezequiel/Desktop/Projects/videau-webpage/src/content/recipes/recetario-veggie.md?astroPropagatedAssets":"chunks/recetario-veggie_DZr0MHP6.mjs","C:/Users/Ezequiel/Desktop/Projects/videau-webpage/src/content/recipes/recetario-whey.md?astroPropagatedAssets":"chunks/recetario-whey_8G01jJTX.mjs","C:/Users/Ezequiel/Desktop/Projects/videau-webpage/src/content/recipes/transforma-salud-digestiva.md?astroPropagatedAssets":"chunks/transforma-salud-digestiva_gORz-KFt.mjs","\u0000astro:asset-imports":"chunks/_astro_asset-imports_D9aVaOQr.mjs","\u0000astro:content-module-imports":"chunks/_astro_content-module-imports_B0nxoYfl.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_BcEe_9wP.mjs","C:/Users/Ezequiel/Desktop/Projects/videau-webpage/src/content/main-sections/aprende-nuevos-habitos.md":"chunks/aprende-nuevos-habitos_CDg0RxvL.mjs","C:/Users/Ezequiel/Desktop/Projects/videau-webpage/src/content/main-sections/mejora-tu-composicion-corporal.md":"chunks/mejora-tu-composicion-corporal_Dn9hUY9D.mjs","C:/Users/Ezequiel/Desktop/Projects/videau-webpage/src/content/main-sections/quien-soy.md":"chunks/quien-soy_CBSfauvx.mjs","C:/Users/Ezequiel/Desktop/Projects/videau-webpage/src/content/recipes/recetario-invierno.md":"chunks/recetario-invierno_D2U4cD3j.mjs","C:/Users/Ezequiel/Desktop/Projects/videau-webpage/src/content/recipes/recetario-veggie.md":"chunks/recetario-veggie_DUWMI1eR.mjs","C:/Users/Ezequiel/Desktop/Projects/videau-webpage/src/content/recipes/recetario-whey.md":"chunks/recetario-whey_D7gJlpPV.mjs","C:/Users/Ezequiel/Desktop/Projects/videau-webpage/src/content/recipes/transforma-salud-digestiva.md":"chunks/transforma-salud-digestiva_B2BsHHe1.mjs","\u0000@astrojs-manifest":"manifest_CSflXwcp.mjs","\u0000astro:assets":"chunks/_astro_assets_m5mxe4H2.mjs","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/consulta.ClY0i9fG.css","/img/foto-principal.ico","/img/main-section/banner.jpg","/img/main-section/foto-principal.jpg","/img/svg/cart.svg","/img/store/recetario-invierno.png","/img/store/recetario-veggie.png","/img/store/recetario-whey.png","/img/store/transforma-tu-salud-digestiva.png"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"YVzkmx0O6/6LsI8VKvtv35DfTqV7AVhC+YrVsvYOCLI=","experimentalEnvGetSecretEnabled":false});

export { manifest };
