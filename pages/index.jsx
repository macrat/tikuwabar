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


Index.getInitialProps = async ({req}) => {
    return {
        firstView: await getFirstView(),
        news: await getNews(),
        schedule: await getSchedule(),
        pricing: await getPricing(),
        access: await getAccess(),
        seo: await getSEO(),
    };
};


export default Index;
