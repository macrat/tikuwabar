import Head from 'next/head';
import Link from 'next/link';

import Scaffold from '../../components/Scaffold';
import Header from '../../components/Header';
import SectionTitle from '../../components/Section/Title';
import SectionInner from '../../components/Section/Inner';
import BreadList from '../../components/BreadList';
import Time from '../../components/Time';

import {getFirstView, getNews, getSEO} from '../../lib/api.js';


export const config = {
    amp: true,
};


function NewsIndex({firstView = {}, news = {}, seo = {}}) {
    return (
        <Scaffold seo={seo}>
            <Head>
                <title>{`お知らせ | ${seo.siteTitle}`}</title>
            </Head>

            <Header image={firstView.image} />

            <BreadList pages={[
                {title: "お知らせ", href: "/news"},
            ]} />

            <article>
                <SectionTitle>お知らせ</SectionTitle>

                <SectionInner>
                    <ul>
                        {news.map(x => (
                            <li key={x.id}><Link href="/news/[id]" as={`/news/${x.id}`}><a>
                                <Time time={new Date(x.createdAt)} />
                                {` ${x.title}`}
                            </a></Link></li>
                        ))}
                    </ul>
                </SectionInner>
            </article>

            <style jsx>{`
                article {
                    margin: 28px auto;
                }
            `}</style>
        </Scaffold>
    );
}


NewsIndex.getInitialProps = async ({query, res}) => {
    res.setHeader('Cache-Control', 'max-age=12h, s-maxage=5m, public');

    return {
        firstView: await getFirstView(query.draftKey),
        news: await getNews(1000, query.draftKey),
        seo: await getSEO(query.draftKey),
    };
};


export default NewsIndex;
