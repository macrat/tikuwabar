module.exports = {
    env: {
        MICROCMS_API_KEY: process.env.MICROCMS_API_KEY,
        GA_MEASUREMENT_ID: process.env.GA_MEASUREMENT_ID,
    },
    experimental: {
        modern: true,
        rewrites: async () => [
            {source: '/sitemap.xml', destination: '/api/sitemap'},
            {source: '/news/feed.xml', destination: '/api/feed'},
        ],
        catchAllRouting: true,
    },
};
