import Head from 'next/head';

import Scaffold from '../components/Scaffold';
import FirstView from '../components/FirstView';
import News from '../components/News';
import Schedule from '../components/Schedule';
import Pricing from '../components/Pricing';
import Access from '../components/Access';
import Footer from '../components/Footer';

import {getFirstView, getNews, getSchedule, getPricing, getAccess, getSEO} from '../lib/api';


export const config = {
    amp: true,
};


function Index({firstView = {}, news = [], schedule = {}, pricing = {}, access = {}, seo = {}}) {
    return (
        <Scaffold seo={seo}>
            <Head>
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


Index.getInitialProps = async ({res, query}) => {
    res.setHeader('Cache-Control', 'max-age=6h, s-maxage=5m, public');

    return {
        firstView: await getFirstView(query.draftKey),
        news: await getNews(query.draftKey),
        schedule: await getSchedule(query.draftKey),
        pricing: await getPricing(query.draftKey),
        access: await getAccess(query.draftKey),
        seo: await getSEO(query.draftKey),
    };
};


export default Index;
