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
    });

    const news = await getNews(1000, undefined);

    stream.write({
        url: '/news',
        priority: 0.0,
        lastmod: news.reduce((x, y) => x.updatedAt > y.updatedAt ? x : y).updatedAt,
    });

    stream.write({
        url: '/privacy-policy',
        priority: 0.0,
    });

    news.forEach(article => {
        stream.write({
            url: `/news/${article.id}`,
            lastmod: article.updatedAt,
        });
    });

    stream.end();
    res.end();
}
