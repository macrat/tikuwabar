module.exports = {
    env: {
        MICROCMS_API_KEY: process.env.MICROCMS_API_KEY,
        GA_MEASUREMENT_ID: process.env.GA_MEASUREMENT_ID,
        GOOGLE_CALENDAR_URL: "https://calendar.google.com/calendar/embed?height=400&wkst=2&bgcolor=%23795548&ctz=Asia%2FTokyo&src=c2hvamlyLm9vb190bHZsNnVyNDJuajExYzVjODQwNnBraWlyY0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23743500&showTitle=0&showNav=0&showPrint=0&showTabs=1&showTz=0&showCalendars=0&mode=AGENDA",
        GOOGLE_MAP_URL: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.508949615999!2d139.70521124997757!3d35.71369973570251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d3ebb883a57%3A0x275cdedb2f7a46dc!2z44CSMTY5LTAwNzUg5p2x5Lqs6YO95paw5a6_5Yy66auY55Sw6aas5aC077yS5LiB55uu77yR77yV4oiS77yR!5e0!3m2!1sja!2sjp!4v1580881145227!5m2!1sja!2sjp",
    },
    rewrites: async () => [
        {source: '/sitemap.xml', destination: '/api/sitemap'},
        {source: '/news/feed.xml', destination: '/api/feed'},
    ],
};
