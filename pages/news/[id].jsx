import Head from 'next/head';
import HtmlToText from 'html-to-text';

import Scaffold from '../../components/Scaffold';
import Header from '../../components/Header';
import SectionTitle from '../../components/Section/Title';
import SectionInner from '../../components/Section/Inner';
import RawHTML from '../../components/RawHTML';
import JsonLD from '../../components/News/JsonLD';
import BreadList from '../../components/BreadList';
import Footer from '../../components/Footer';

import {getFirstView, getNewsArticle, getSEO} from '../../lib/api';


export const config = {
    amp: true,
};


function NewsArticle({firstView = {}, article = {}, seo = {}}) {
    const description = HtmlToText.fromString(article.rawContent, {
        ignoreHref: true,
        ignoreImage: true,
    });

    return (
        <Scaffold seo={seo}>
            <Head>
                <title>{`${article.title} | お知らせ | ${seo.siteTitle}`}</title>
                <meta name="description" content={description} key="description" />

                <meta property="og:site_name" content="ちくわバー" key="ogp--site_name" />
                <meta property="og:title" content={article.title} key="ogp--title" />
                <meta property="og:url" content={`https://tikuwabar.shojir.ooo/news/${article.id}`} key="ogp--url" />
                <meta property="og:type" content="article" key="ogp--type" />
                <meta property="og:article:published_time" content={article.createdAt.toISOString()} key="ogp--published" />
                <meta property="og:article:modified_time" content={article.createdAt.toISOString()} key="ogp--modified" />
                <meta property="og:description" content={description} key="ogp--description" />
                <meta property="og:image" content={seo.image.url} key="ogp--image" />
                <meta property="twitter:card" content="summary" key="twitter-card" />
            </Head>

            <Header image={firstView.image} />

            <BreadList pages={[
                {title: "お知らせ", href: "/news"},
                {title: article.title, href: `/news/${article.id}`},
            ]} />

            <article>
                <SectionTitle>{article.title}</SectionTitle>

                <SectionInner timestamp={article.createdAt}>
                    <RawHTML html={article.content} />
                </SectionInner>

                <JsonLD {...article} seo={seo} />
            </article>

            <style jsx>{`
                article {
                    margin: 28px auto;
                }
            `}</style>

            <Footer {...seo} />
        </Scaffold>
    );
}


NewsArticle.getInitialProps = async ({query, res}) => {
    res.setHeader('Cache-Control', 'max-age=1d, s-maxage=30m, public');

    return {
        firstView: await getFirstView(query.draftKey),
        article: await getNewsArticle(query.id, query.draftKey),
        seo: await getSEO(query.draftKey),
    };
};


export default NewsArticle;
