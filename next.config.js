// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
    assetPrefix: isProd ? 'https://developer-portal.w6d.io' : '',
    // assetPrefix: isProd ? 'http://localhost:3000' : '',
    exportPathMap: async function (
        defaultPathMap,
        { dev, dir, outDir, distDir, buildId }
    ) {
        return {
            '/': { page: '/' },
            '/blog': { page: '/blog' },
        }
    },
}

// module.exports = {
//     exportPathMap: async function (
//         defaultPathMap,
//         { dev, dir, outDir, distDir, buildId }
//     ) {
//         return {
//             '/': { page: '/' },
//             '/blog': { page: '/blog' },
//         }
//     },
// }
