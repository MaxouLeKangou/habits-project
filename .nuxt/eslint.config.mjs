// ESLint config generated by Nuxt
/// <reference path="./eslint-typegen.d.ts" />
/* eslint-disable */
// @ts-nocheck

import typegen from '../node_modules/eslint-typegen/dist/index.mjs';
import { createConfigForNuxt, defineFlatConfigs, resolveOptions } from '../node_modules/@nuxt/eslint-config/dist/flat.mjs';
import { fileURLToPath } from 'url';

const r = (...args) => fileURLToPath(new URL(...args, import.meta.url))

export { defineFlatConfigs }

export const options = resolveOptions({
  features: {
  "standalone": true
},
  dirs: {
    pages: ["pages"],
    composables: ["composables", "utils"],
    components: ["components"],
    componentsPrefixed: [],
    layouts: ["layouts"],
    plugins: ["plugins"],
    middleware: ["middleware"],
    modules: ["modules"],
    servers: [],
    root: [],
    src: [""],
}
})

export const configs = createConfigForNuxt(options)

configs.append(
// Set globals from imports registry
{
  name: 'nuxt/import-globals',
  languageOptions: {
    globals: Object.fromEntries(["useScriptTriggerConsent","useScriptEventPage","useScriptTriggerElement","useScript","useScriptGoogleAnalytics","useScriptPlausibleAnalytics","useScriptClarity","useScriptCloudflareWebAnalytics","useScriptFathomAnalytics","useScriptMatomoAnalytics","useScriptGoogleTagManager","useScriptGoogleAdsense","useScriptSegment","useScriptMetaPixel","useScriptXPixel","useScriptIntercom","useScriptHotjar","useScriptStripe","useScriptLemonSqueezy","useScriptVimeoPlayer","useScriptYouTubePlayer","useScriptGoogleMaps","useScriptNpm","useScriptCrisp","isVue2","isVue3","defineNuxtLink","useNuxtApp","tryUseNuxtApp","defineNuxtPlugin","definePayloadPlugin","useRuntimeConfig","defineAppConfig","requestIdleCallback","cancelIdleCallback","setInterval","useAppConfig","updateAppConfig","defineNuxtComponent","useAsyncData","useLazyAsyncData","useNuxtData","refreshNuxtData","clearNuxtData","useHydration","callOnce","useState","clearNuxtState","clearError","createError","isNuxtError","showError","useError","useFetch","useLazyFetch","useCookie","refreshCookie","onPrehydrate","prerenderRoutes","useRequestHeader","useRequestHeaders","useResponseHeader","useRequestEvent","useRequestFetch","setResponseStatus","onNuxtReady","preloadComponents","prefetchComponents","preloadRouteComponents","abortNavigation","addRouteMiddleware","defineNuxtRouteMiddleware","setPageLayout","navigateTo","useRoute","useRouter","isPrerendered","loadPayload","preloadPayload","definePayloadReducer","definePayloadReviver","useLoadingIndicator","getAppManifest","getRouteRules","reloadNuxtApp","useRequestURL","usePreviewMode","useRouteAnnouncer","useRuntimeHook","onBeforeRouteLeave","onBeforeRouteUpdate","withCtx","withDirectives","withKeys","withMemo","withModifiers","withScopeId","onActivated","onBeforeMount","onBeforeUnmount","onBeforeUpdate","onDeactivated","onErrorCaptured","onMounted","onRenderTracked","onRenderTriggered","onServerPrefetch","onUnmounted","onUpdated","computed","customRef","isProxy","isReactive","isReadonly","isRef","markRaw","proxyRefs","reactive","readonly","ref","shallowReactive","shallowReadonly","shallowRef","toRaw","toRef","toRefs","triggerRef","unref","watch","watchEffect","watchPostEffect","watchSyncEffect","isShallow","effect","effectScope","getCurrentScope","onScopeDispose","defineComponent","defineAsyncComponent","resolveComponent","getCurrentInstance","h","inject","hasInjectionContext","nextTick","provide","mergeModels","toValue","useModel","useAttrs","useCssModule","useCssVars","useSlots","useTransitionState","useId","useTemplateRef","useShadowRoot","Component","ComponentPublicInstance","ComputedRef","ExtractPropTypes","ExtractPublicPropTypes","InjectionKey","PropType","Ref","MaybeRef","MaybeRefOrGetter","VNode","injectHead","useHead","useSeoMeta","useHeadSafe","useServerHead","useServerSeoMeta","useServerHeadSafe","useAPI","useSanityImage","createSanityClient","groq","useSanity","useLazySanityQuery","useSanityQuery","useNuxtDevTools","definePageMeta","useLink","createSanityClient","useSanity","groq","useNitroApp","useRuntimeConfig","useAppConfig","defineNitroPlugin","nitroPlugin","defineCachedFunction","defineCachedEventHandler","cachedFunction","cachedEventHandler","useStorage","defineRenderHandler","defineRouteMeta","getRouteRules","useEvent","defineTask","runTask","defineNitroErrorHandler","appendCorsHeaders","appendCorsPreflightHeaders","appendHeader","appendHeaders","appendResponseHeader","appendResponseHeaders","assertMethod","callNodeListener","clearResponseHeaders","clearSession","createApp","createAppEventHandler","createError","createEvent","createEventStream","createRouter","defaultContentType","defineEventHandler","defineLazyEventHandler","defineNodeListener","defineNodeMiddleware","defineRequestMiddleware","defineResponseMiddleware","defineWebSocket","defineWebSocketHandler","deleteCookie","dynamicEventHandler","eventHandler","fetchWithEvent","fromNodeMiddleware","fromPlainHandler","fromWebHandler","getCookie","getHeader","getHeaders","getMethod","getProxyRequestHeaders","getQuery","getRequestFingerprint","getRequestHeader","getRequestHeaders","getRequestHost","getRequestIP","getRequestPath","getRequestProtocol","getRequestURL","getRequestWebStream","getResponseHeader","getResponseHeaders","getResponseStatus","getResponseStatusText","getRouterParam","getRouterParams","getSession","getValidatedQuery","getValidatedRouterParams","handleCacheHeaders","handleCors","isCorsOriginAllowed","isError","isEvent","isEventHandler","isMethod","isPreflightRequest","isStream","isWebResponse","lazyEventHandler","parseCookies","promisifyNodeListener","proxyRequest","readBody","readFormData","readMultipartFormData","readRawBody","readValidatedBody","removeResponseHeader","sanitizeStatusCode","sanitizeStatusMessage","sealSession","send","sendError","sendIterable","sendNoContent","sendProxy","sendRedirect","sendStream","sendWebResponse","serveStatic","setCookie","setHeader","setHeaders","setResponseHeader","setResponseHeaders","setResponseStatus","splitCookiesString","toEventHandler","toNodeListener","toPlainHandler","toWebHandler","toWebRequest","unsealSession","updateSession","useBase","useSession","writeEarlyHints","__buildAssetsURL","__publicAssetsURL","defineAppConfig"].map(i => [i, 'readonly'])),
  },
}
)

export function withNuxt(...customs) {
  return configs
    .clone()
    .append(...customs)
    .onResolved(configs => typegen(configs, { dtsPath: r("./eslint-typegen.d.ts"), augmentFlatConfigUtils: true }))
}

export default withNuxt