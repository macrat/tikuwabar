import Head from 'next/head';

import Scaffold from '../components/Scaffold';
import FirstView from '../components/FirstView';
import News from '../components/News';
import Schedule from '../components/Schedule';
import Pricing from '../components/Pricing';
import Access from '../components/Access';
import Footer from '../components/Footer';

import {getFirstView, getNews, getSchedule, getPricing, getAccess, getSEO} from '../lib/api';

import Loading from '../components/Loading';


export const config = {
    amp: true,
};


function Index({firstView = {}, news = [], schedule = {}, pricing = {}, access = {}, seo = {}}) {
    return (
        <Scaffold seo={seo}>
            <Head>
                <link href="https://calendar.google.com" rel="preconnect dns-prefetch" crossOrigin="anonymous" />
                <link href="https://www.google.com" rel="preconnect dns-prefetch" crossOrigin="anonymous" />
                <link href="https://maps.google.com" rel="preconnect dns-prefetch" crossOrigin="anonymous" />
                <link href="https://apis.google.com" rel="preconnect dns-prefetch" crossOrigin="anonymous" />
                <link href={process.env.GOOGLE_CALENDAR_URL} rel="preload" as="document" type="text/html" crossOrigin="anonymous" />
                <link href={process.env.GOOGLE_MAP_URL} rel="preload" as="document" type="text/html" crossOrigin="anonymous" />

                <title>{seo.siteTitle}</title>
                <meta name="description" content={seo.description} key="description" />

                <meta property="og:site_name" content="ちくわバー" key="ogp--site_name" />
                <meta property="og:title" content="ちくわバー" key="ogp--title" />
                <meta property="og:url" content="https://tikuwabar.shojir.ooo/" key="ogp--url" />
                <meta property="og:type" content="website" key="ogp--type" />
                <meta property="og:description" content={seo.description} key="ogp--description" />
                <meta property="og:image" content={seo.image.url} key="ogp--image" />
                <meta property="og:locale" content="ja_JP" key="ogp--locale" />
                <meta property="fb:app_id" content="506386943395976" key="fb--app_id" />
                <meta property="twitter:card" content="summary" key="twitter-card" />
            </Head>

            <FirstView {...firstView} />

            <main>
                <News news={news} seo={seo} />
                <Schedule {...schedule} />
                <Pricing {...pricing} />
                <Access {...access} />
            </main>

            <Footer location={seo.location} telephone={seo.telephone}/>
        </Scaffold>
    );
}


export const getStaticProps = async () => ({
    props: {
        firstView: await getFirstView(),
        news: await getNews(),
        schedule: await getSchedule(),
        pricing: await getPricing(),
        access: await getAccess(),
        seo: await getSEO(),
    },
    revalidate: 1,
});


export default Index;
