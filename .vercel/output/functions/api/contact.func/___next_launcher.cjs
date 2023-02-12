"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// The Next.js builder can emit the project in a subdirectory depending on how
// many folder levels of `node_modules` are traced. To ensure `process.cwd()`
// returns the proper path, we change the directory to the folder with the
// launcher. This mimics `yarn workspace run` behavior.
process.chdir(__dirname);
const region = process.env.VERCEL_REGION || process.env.NOW_REGION;
if (!process.env.NODE_ENV) {
    process.env.NODE_ENV = region === 'dev1' ? 'development' : 'production';
}
if (process.env.NODE_ENV !== 'production' && region !== 'dev1') {
    console.warn(`Warning: NODE_ENV was incorrectly set to "${process.env.NODE_ENV}", this value is being overridden to "production"`);
    process.env.NODE_ENV = 'production';
}
// eslint-disable-next-line
const NextServer = require('next/dist/server/next-server.js').default;
const nextServer = new NextServer({
    // @ts-ignore __NEXT_CONFIG__ value is injected
    conf: {"env":{"EMAIL":"arotiana4612@gmail.com","EMAIL_PASS":"rqaqymgkzobszijo","NEXT_PUBLIC_SANITY_DATASET":"production","NEXT_PUBLIC_SANITY_PROJECT_ID":"4fc7tplb","NEXT_PUBLIC_BASE_URL":"http://localhost:3000/"},"webpack":null,"webpackDevMiddleware":null,"eslint":{"ignoreDuringBuilds":false},"typescript":{"ignoreBuildErrors":true,"tsconfigPath":"tsconfig.json"},"distDir":".next","cleanDistDir":true,"assetPrefix":"","configOrigin":"next.config.js","useFileSystemPublicRoutes":true,"generateEtags":true,"pageExtensions":["tsx","ts","jsx","js"],"target":"server","poweredByHeader":true,"compress":false,"analyticsId":"","images":{"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":["cdn.sanity.io"],"disableStaticImages":false,"minimumCacheTTL":60,"formats":["image/webp"],"dangerouslyAllowSVG":false,"contentSecurityPolicy":"script-src 'none'; frame-src 'none'; sandbox;"},"devIndicators":{"buildActivity":true,"buildActivityPosition":"bottom-right"},"onDemandEntries":{"maxInactiveAge":15000,"pagesBufferLength":2},"amp":{"canonicalBase":""},"basePath":"","sassOptions":{},"trailingSlash":false,"i18n":null,"productionBrowserSourceMaps":false,"optimizeFonts":true,"excludeDefaultMomentLocales":true,"serverRuntimeConfig":{},"publicRuntimeConfig":{},"reactStrictMode":true,"httpAgentOptions":{"keepAlive":true},"outputFileTracing":true,"staticPageGenerationTimeout":60,"swcMinify":true,"experimental":{"manualClientBasePath":false,"legacyBrowsers":true,"browsersListForSwc":false,"newNextLinkBehavior":false,"cpus":3,"sharedPool":true,"profiling":false,"isrFlushToDisk":true,"workerThreads":false,"pageEnv":false,"optimizeCss":false,"nextScriptWorkers":false,"scrollRestoration":false,"externalDir":false,"disableOptimizedLoading":false,"gzipSize":true,"swcFileReading":true,"craCompat":false,"esmExternals":true,"appDir":false,"isrMemoryCacheSize":52428800,"serverComponents":false,"fullySpecified":false,"outputFileTracingRoot":"D:\\portfolio-react","images":{"remotePatterns":[]},"swcTraceProfiling":false,"forceSwcTransforms":false,"largePageDataBytes":128000,"trustHostHeader":true},"configFileName":"next.config.js"},
    dir: '.',
    minimalMode: true,
    customServer: false,
});
const requestHandler = nextServer.getRequestHandler();
module.exports = async (req, res) => {
    try {
        // entryDirectory handler
        await requestHandler(req, res);
    }
    catch (err) {
        console.error(err);
        // crash the lambda immediately to clean up any bad module state,
        // this was previously handled in ___vc_bridge on an unhandled rejection
        // but we can do this quicker by triggering here
        process.exit(1);
    }
};
