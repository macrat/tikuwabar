import {SitemapStream, streamToPromise} from 'sitemap';

import {getNews} from '../../lib/api';


export default async function Sitemap(req, res) {
    res.setHeader('Content-Type', 'text/xml; charset=utf-8');
    res.setHeader('Cache-Control', 'max-age=1day, public');

    const stream = new SitemapStream({hostname: `https://${req.headers.host}`});
    stream.pipe(res);

    stream.write({
        url: '/',
        priority: 1.0,
        lastmod: process.env.BUILT_TIME,
    });

    (await getNews(1000, undefined)).forEach(article => {
        stream.write({
            url: `/news/${article.id}`,
            lastmod: article.updatedAt,
        });
    });

    stream.end();
    res.end();
}
