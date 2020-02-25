import Head from 'next/head';
import Link from 'next/link';

import Header from '../components/Header';
import Scaffold from '../components/Scaffold';
import Footer from '../components/Footer';

import {getFirstView, getSEO} from '../lib/api';


export const config = {
    amp: true,
};


function Error({statusCode, firstView = {}, seo = {}}) {
    return (
        <Scaffold seo={seo}>
            <Head>
                {statusCode === 404 ? (
                    <title>{`ページが見つかりませんでした | ${seo.siteTitle}`}</title>
                ) : (
                    <title>{`${statusCode ?? ""}エラー | ${seo.siteTitle}`}</title>
                )}
            </Head>

            <Header image={firstView.image} />

            <article>
                <div>
                    <h1>{statusCode === 404 ? "ページが見つかりませんでした" : (statusCode ? `${statusCode} エラー` : "エラー")}</h1>
                    {statusCode !== 404 ? <p>しばらくしてからもう一度お試しください。</p> : null}

                    <p><Link href="/"><a>トップにもどる</a></Link></p>
                </div>

                <amp-img layout="responsive" width="400" height="400" src="/icon-512.png" />
            </article>

            <Footer {...seo} />

            <style jsx>{`
                article {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                h1 {
                    text-align: center;
                    font-size: 28pt;
                    margin: 0;
                    padding: 0;
                }
                div {
                    background-color: #d5cac5;
                    border-radius: 100%;
                    padding: 86px 32px;
                    margin: 32px;
                    margin-right: -64px;
                    position: relative;
                    text-align: center;
                }
                div::after {
                    content: '';
                    display: block;
                    border: 30px solid transparent;
                    border-left-color: #d5cac5;
                    position: absolute;
                    right: -50px;
                    bottom: calc(50% - 30px);
                }
                div > p {
                    margin-bottom: -32px;
                }
                a {
                    color: inherit;
                }
                amp-img {
                    flex: 0 0 400px;
                    margin: 32px 0;
                }
                @media screen and (max-width: 800px) {
                    amp-img {
                        flex: 0 0 300px;
                        height: 300px;
                        width: 300px;
                    }
                }
                @media screen and (max-width: 600px) {
                    article {
                        flex-direction: column;
                    }
                    div {
                        margin-right: 32px;
                        margin-bottom: 0;
                    }
                    div::after {
                        border-left-color: transparent;
                        border-top-color: #d5cac5;
                        right: calc(50% - 30px);
                        bottom: -50px;
                    };
                }
            `}</style>
        </Scaffold>
    );
}


Error.getInitialProps = async ({res, err}) => ({
    firstView: await getFirstView(),
    seo: await getSEO(),
    statusCode: res ? res.statusCode : (err ? err.statusCode : 404),
});


export default Error;
