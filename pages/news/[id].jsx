import Head from 'next/head';
import HtmlToText from 'html-to-text';

import Scaffold from '../../components/Scaffold';
import Header from '../../components/Header';
import SectionTitle from '../../components/Section/Title';
import SectionInner from '../../components/Section/Inner';
import RawHTML from '../../components/RawHTML';
import JsonLD from '../../components/News/JsonLD';
import BreadList from '../../components/BreadList';

import {getFirstView, getNewsArticle, getSEO} from '../../lib/api';


export const config = {
    amp: true,
};


function NewsArticle({firstView = {}, article = {}, seo = {}}) {
    return (
        <Scaffold seo={seo}>
            <Head>
                <title>{`${article.title} | ${seo.siteTitle}`}</title>
                <meta
                    name="description"
                    content={HtmlToText.fromString(article.rawContent, {
                        ignoreHref: true,
                        ignoreImage: true,
                    })}
                    key="description" />
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
