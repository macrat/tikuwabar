import Head from 'next/head';

import Scaffold from '../components/Scaffold';
import Header from '../components/Header';
import SectionTitle from '../components/Section/Title';
import SectionInner from '../components/Section/Inner';
import BreadList from '../components/BreadList';
import RawHTML from '../components/RawHTML';
import Footer from '../components/Footer';

import {getFirstView, getPrivacyPolicy, getSEO} from '../lib/api.js';


export const config = {
    amp: true,
};


function PrivcacyPolicy({firstView = {}, privacyPolicy = {}, seo = {}}) {
    const updatedAt = new Date(privacyPolicy.updatedAt);

    return (
        <Scaffold seo={seo}>
            <Head>
                <title>{`プライバシーポリシー | ${seo.siteTitle}`}</title>
            </Head>

            <Header image={firstView.image} />

            <BreadList pages={[
                {title: "プライバシーポリシー", href: "/privacy-policy"},
            ]} />

            <article>
                <SectionTitle>プライバシーポリシー</SectionTitle>

                <SectionInner>
                    <p className="privacy-policy--updated-at"><time dateTime={updatedAt.toISOString()}>{`${updatedAt.getFullYear()}年${updatedAt.getMonth() + 1}月${updatedAt.getDate()}日 改訂`}</time></p>

                    <RawHTML html={privacyPolicy.body} />
                </SectionInner>
            </article>

            <style jsx>{`
                article {
                    margin: 28px auto;
                }
                .privacy-policy--updated-at {
                    text-align: right;
                    margin: 0;
                }
            `}</style>

            <Footer {...seo} />
        </Scaffold>
    );
}


PrivcacyPolicy.getInitialProps = async ({query, res}) => {
    res.setHeader('Cache-Control', 'max-age=1d, s-maxage=10m, public');

    return {
        firstView: await getFirstView(query.draftKey),
        privacyPolicy: await getPrivacyPolicy(query.draftKey),
        seo: await getSEO(query.draftKey),
    };
};


export default PrivcacyPolicy;
