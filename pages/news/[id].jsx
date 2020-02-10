import Head from 'next/head';
import Link from 'next/link';

import Scaffold from '../../components/Scaffold';
import Header from '../../components/Header';
import JsonLD from '../../components/JsonLD';
import SectionTitle from '../../components/Section/Title';
import SectionInner from '../../components/Section/Inner';
import RawHTML from '../../components/RawHTML';
import NewsJsonLD from '../../components/News/JsonLD';

import {getFirstView, getNewsArticle, getSEO} from '../../lib/api';


export const config = {
    amp: true,
};


function BreadList({pageTitle, pageAddress}) {
    return (
        <ul>
            <li><Link href="/"><a>トップ</a></Link></li>
            <li><Link href={pageAddress}><a>{pageTitle}</a></Link></li>

            <JsonLD type="BreadcrumbList" properties={{
                itemListElement: [
                    {
                        "@type": "ListItem",
                        position: 1,
                        item: {
                            "@id": "/",
                            name: "ちくわバー",
                        },
                    },
                    {
                        "@type": "ListItem",
                        position: 2,
                        item: {
                            "@id": "/#news",
                            name: "お知らせ",
                        },
                    },
                    {
                        "@type": "ListItem",
                        position: 3,
                        item: {
                            "@id": pageAddress,
                            name: pageTitle,
                        },
                    },
                ],
            }} />

            <style jsx>{`
                ul {
                    margin: 0 auto;
                    padding: 0;
                    max-width: 900px;
                }
                li {
                    display: inline;
                    color: white;
                    font-size: smaller;
                }
                a {
                    color: inherit;
                    text-decoration: none;
                }
                li:not(:last-child):after {
                    content: ' > ';
                }
            `}</style>
        </ul>
    );
}


function NewsArticle({firstView = {}, article = {}, seo = {}}) {
    return (
        <Scaffold seo={seo}>
            <Head>
                <title>{`${article.title} | ${seo.siteTitle}`}</title>
                <meta name="description" content={article.content.slice(300)} key="description" />
            </Head>

            <Header image={firstView.image} />

            <BreadList pageTitle={article.title} pageAddress={`/news/${article.id}`} />

            <article>
                <SectionTitle>{article.title}</SectionTitle>

                <SectionInner timestamp={article.createdAt}>
                    <RawHTML html={article.content} />
                </SectionInner>

                <NewsJsonLD {...article} seo={seo} />
            </article>

            <style jsx>{`
                article {
                    margin: 28px auto;
                }
            `}</style>
        </Scaffold>
    );
}


NewsArticle.getInitialProps = async ({query}) => {
    return {
        firstView: await getFirstView(query.draftKey),
        article: await getNewsArticle(query.id, query.draftKey),
        seo: await getSEO(query.draftKey),
    };
};


export default NewsArticle;
