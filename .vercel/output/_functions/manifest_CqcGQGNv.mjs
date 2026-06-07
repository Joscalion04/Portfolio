import 'piccolore';
import { p as decodeKey } from './chunks/astro/server_CZ6s4HTj.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_CI48IeWh.mjs';
import 'es-module-lexer';

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
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
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
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
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

const manifest = deserializeManifest({"hrefRoot":"file:///home/joseph/Documents/Projects/Portfolio/","cacheDir":"file:///home/joseph/Documents/Projects/Portfolio/node_modules/.astro/","outDir":"file:///home/joseph/Documents/Projects/Portfolio/dist/","srcDir":"file:///home/joseph/Documents/Projects/Portfolio/src/","publicDir":"file:///home/joseph/Documents/Projects/Portfolio/public/","buildClientDir":"file:///home/joseph/Documents/Projects/Portfolio/dist/client/","buildServerDir":"file:///home/joseph/Documents/Projects/Portfolio/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.BKXfceL4.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/joseph/Documents/Projects/Portfolio/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_CqcGQGNv.mjs","/home/joseph/Documents/Projects/Portfolio/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_5Z7vvRWF.mjs","/home/joseph/Documents/Projects/Portfolio/src/React/LikeButton.tsx":"_astro/LikeButton.DzGdM3ls.js","/home/joseph/Documents/Projects/Portfolio/src/React/SkillsList.tsx":"_astro/SkillsList.CVvkAPXu.js","@astrojs/react/client.js":"_astro/client.DyS41jpO.js","/home/joseph/Documents/Projects/Portfolio/src/components/nav.astro?astro&type=script&index=0&lang.ts":"_astro/nav.astro_astro_type_script_index_0_lang.DTvZ3elG.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/home/joseph/Documents/Projects/Portfolio/src/components/nav.astro?astro&type=script&index=0&lang.ts","const s=document.getElementById(\"main-nav\"),u=800;let c=null;function h(){if(window.scrollY>0){s?.classList.add(\"scrolling\");const o=Math.min(window.scrollY/u,1),t=1-Math.pow(1-o,4),r=560,n=window.innerWidth*.8,e=n-(n-r)*t;window.innerWidth>=768&&s?.style.setProperty(\"width\",`${e}px`)}else s?.classList.remove(\"scrolling\"),s?.style.setProperty(\"width\",\"80%\");c=null}window.addEventListener(\"scroll\",()=>{c||(c=requestAnimationFrame(h))},{passive:!0});document.querySelectorAll('a[href^=\"#\"]').forEach(o=>{o.addEventListener(\"click\",function(t){t.preventDefault();const n=t.currentTarget.getAttribute(\"href\")?.substring(1)||\"\",e=document.getElementById(n);e&&e.scrollIntoView({behavior:\"smooth\"})})});document.addEventListener(\"DOMContentLoaded\",()=>{const o=document.querySelectorAll(\"section[id]\"),t=document.querySelectorAll(\"nav a[href^='#']\"),r=e=>{e.forEach(i=>{if(i.isIntersecting){t.forEach(d=>d.classList.remove(\"active\"));const l=i.target.getAttribute(\"id\"),a=document.querySelector(`nav a[href=\"#${l}\"]`);a&&a.classList.add(\"active\")}})},n=new IntersectionObserver(r,{threshold:.5});o.forEach(e=>n.observe(e))});"]],"assets":["/_astro/soc-example.B6yTM7QQ.png","/_astro/lamp-example.D4n6Q_pR.png","/_astro/OpenLDAP-example.BtqEg_Mj.png","/_astro/ci_cd-example.CIrdf6UR.png","/_astro/snypshark-example.DDqdCZyL.png","/_astro/index.BKXfceL4.css","/OpenLDAP-example.png","/biesC-example.png","/biesVM-example.png","/ci_cd-example.png","/cleatEats-example.png","/favicon.png","/lamp-example.png","/snypshark-example.png","/soc-example.png","/spring-example.png","/wallpaper-shortcut.png","/_astro/LikeButton.DzGdM3ls.js","/_astro/SkillsList.CVvkAPXu.js","/_astro/client.DyS41jpO.js","/_astro/index.BVOCwoKb.js","/_astro/jsx-runtime.D_zvdyIk.js","/svg/CSS3.svg","/svg/HTML5.svg","/svg/angular.svg","/svg/apache.svg","/svg/astro.svg","/svg/aws.svg","/svg/bash.svg","/svg/burpSuite.svg","/svg/cpp.svg","/svg/crowdstrike.svg","/svg/csharp.svg","/svg/docker.svg","/svg/elastic.svg","/svg/express.svg","/svg/fortinet.svg","/svg/git.svg","/svg/github.svg","/svg/java.svg","/svg/javaScript.svg","/svg/jwt.svg","/svg/kalilinux.svg","/svg/kubernetes.svg","/svg/laravel.svg","/svg/linux.svg","/svg/metasploit.svg","/svg/mysql.svg","/svg/next.svg","/svg/ngnix.svg","/svg/nmap.svg","/svg/nodejs.svg","/svg/oracle.svg","/svg/php.svg","/svg/powershell.svg","/svg/proxmox.svg","/svg/python.svg","/svg/react.svg","/svg/rust.svg","/svg/splunk.svg","/svg/springboot.svg","/svg/sql.svg","/svg/tailwindcss.svg","/svg/typeScript.svg","/svg/ubuntuServer.svg","/svg/vercel.svg","/svg/vue.svg","/svg/wazuh.svg","/svg/wireshark.svg"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"actionBodySizeLimit":1048576,"serverIslandNameMap":[],"key":"9/t7Zl2TccLLSEE5KQXYFSnooSu5uXF4HFAPs+wGUJs="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
