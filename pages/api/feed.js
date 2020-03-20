import xmlbuilder from 'xmlbuilder';

import {getNews} from '../../lib/api';


export default async function Feed(req, res) {
    res.setHeader('Content-Type', 'application/atom+xml; charset=utf-8');
    res.setHeader('Cache-Control', 'max-age=86400, public');

    const news = await getNews(100, undefined);

    const xml = xmlbuilder.create({
        feed: {
            '@xmlns': 'http://www.w3.org/2005/Atom',
            id: {'#text': `tag:${req.headers.host},2019:news/feed.xml`},
            title: {'@type': 'text', '#text': 'ちくわバー'},
            link: [{
                '@rel': 'alternate',
                '@type': 'text/html',
                '@hreflang': 'ja',
                '@href': `https://${req.headers.host}`,
            }, {
                '@rel': 'self',
                '@type': 'application/atom+xml',
                '@href': `https://${req.headers.host}/news/feed.xml`,
            }],
            updated: news.length > 0 ? {
                '#text': news.reduce((x, y) => x.updatedAt > y.updatedAt ? x : y).updatedAt,
            } : undefined,
            entry: news.map(article => ({
                title: {'#text': article.title},
                id: {'#text': `tag:${req.headers.host},2019:news/${article.id}`},
                link: {
                    '@rel': 'alternate',
                    '@type': 'text/html',
                    '@hreflang': 'ja',
                    '@href': `https://${req.headers.host}/news/${article.id}`,
                },
                published: {'#text': article.createdAt},
                updated: {'#text': article.updatedAt},
                author: {
                    name: {'#text': 'ちくわバー'},
                },
                content: {
                    '@type': 'text/html',
                    '#text': article.rawContent,
                },
            })),
        },
    }, {encoding: 'UTF-8'});
    res.end(xml.end());
}
