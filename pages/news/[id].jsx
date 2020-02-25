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

import {getFirstView, getNews, getNewsArticle, getSEO} from '../../lib/api';


export const config = {
    amp: true,
};


function NewsArticle({firstView, article, seo}) {
    if (!firstView || !article || !seo) {
        return <></>;
    }

    const description = HtmlToText.fromString(article.rawContent, {
        ignoreHref: true,
        ignoreImage: true,
    });

    return (
        <Scaffold seo={seo}>
            <Head>
                <script async custom-element="amp-social-share" src="https://cdn.ampproject.org/v0/amp-social-share-0.1.js" key="amp--social-share" />

                <title>{`${article.title} | お知らせ | ${seo.siteTitle}`}</title>
                <meta name="description" content={description} key="description" />

                <meta property="og:site_name" content="ちくわバー" key="ogp--site_name" />
                <meta property="og:title" content={article.title} key="ogp--title" />
                <meta property="og:url" content={`https://tikuwabar.shojir.ooo/news/${article.id}`} key="ogp--url" />
                <meta property="og:type" content="article" key="ogp--type" />
                <meta property="og:article:published_time" content={new Date(article.createdAt).toISOString()} key="ogp--published" />
                <meta property="og:article:modified_time" content={new Date(article.updatedAt).toISOString()} key="ogp--modified" />
                <meta property="og:description" content={description} key="ogp--description" />
                <meta property="og:image" content={seo.image.url} key="ogp--image" />
                <meta property="fb:app_id" content="506386943395976" key="fb--app_id" />
                <meta property="twitter:card" content="summary" key="twitter-card" />
            </Head>

            <Header image={firstView.image} />

            <BreadList pages={[
                {title: "お知らせ", href: "/news"},
                {title: article.title, href: `/news/${article.id}`},
            ]} />

            <article>
                <SectionTitle>{article.title}</SectionTitle>

                <SectionInner timestamp={new Date(article.createdAt)}>
                    <RawHTML html={article.content} />

                    <div>
                        <amp-social-share type="facebook" data-param-app_id="506386943395976" />
                        <amp-social-share type="twitter" />
                        <amp-social-share type="hatena_bookmark" data-share-endpoint={`http://b.hatena.ne.jp/entry/https://tikuwabar.shojir.ooo/news/${article.id}`}>B!</amp-social-share>
                        <amp-social-share type="line" data-share-endpoint="http://line.me/R/msg/text/?TITLE%3ASOURCE_URL" />
                        <amp-social-share type="system" />
                    </div>
                </SectionInner>

                <JsonLD {...article} seo={seo} />
            </article>

            <style jsx>{`
                article {
                    margin: 28px auto;
                }
                div {
                    float: right;
                    margin: 0 -6px;
                }
                amp-social-share {
                    margin: 0 6px;
                }
                amp-social-share[type=hatena_bookmark] {
                    width: 60px;
                    height: 44px;
                    font-family: Verdana;
                    background-color: #00A4DE;
                    font-weight: 700;
                    color: #fff;
                    line-height: 44px;
                    text-align: center;
                    font-size: 28px;
                }
                amp-social-share[type=system] {
                    background-color: #734c3d;
                }
            `}</style>

            <Footer {...seo} />
        </Scaffold>
    );
}


export const unstable_getStaticPaths = async () => ({
    paths: (await getNews(1000, undefined)).map(x => ({params: {id: x.id}})),
});


export const unstable_getStaticProps = async ({params}) => ({
    props: {
        firstView: await getFirstView(),
        article: await getNewsArticle(params.id),
        seo: await getSEO(),
    },
});


export default NewsArticle;
