import Head from 'next/head';
import {useRouter} from 'next/router';

import JsonLD from './JsonLD';


function Scaffold({children, seo = {}}) {
    const router = useRouter();

    return (
        <>
            <Head>
                <link rel="icon" href="/icon-192.png" type="image/png" sizes="192x192" key="icon--192-png" />
                <link rel="icon" href="/icon-192.webp" type="image/webp" sizes="192x192" key="icon--192-webp" />
                <link rel="icon" href="/icon-96.png" type="image/png" sizes="96x96" key="icon--96-png" />
                <link rel="icon" href="/icon-96.webp" type="image/webp" sizes="96x96" key="icon--96-webp" />
                <link rel="icon" href="/icon-32.png" type="image/png" sizes="32x32" key="icon--32-png" />
                <link rel="icon" href="/icon-32.webp" type="image/webp" sizes="32x32" key="icon--32-webp" />
                <link rel="apple-touch-icon" href="/icon-180.png" type="image/png" sizes="180x180" key="apple-touch-icon" />

                <link rel="canonical" href={`https://tikuwabar.shojir.ooo${router.asPath}`} />
                <link rel="alternate" type="application/atom+xml" href="/news/feed.xml" title="ちくわバーからのお知らせフィード" key="feed" />
                <link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP|Noto+Serif+JP&display=swap" rel="stylesheet" />
                <link href="https://fonts.gstatic.com" rel="preconnect" />
                <link href="https://fonts.gstatic.com" rel="dns-prefetch" />

                <JsonLD type="BarOrPub" properties={{
                    name: "ちくわバー",
                    '@id': 'https://tikuwabar.shojir.ooo/',
                    url: 'https://tikuwabar.shojir.ooo/',
                    logo: 'https://tikuwabar.shojir.ooo/icon-512.png',
                    acceptsReservations: false,
                    openingHours: seo.openingHours,
                    priceRange: seo.priceRange,
                    address: seo.location,
                    location: seo.location,
                    telephone: seo.telephone,
                    image: seo.image.url,
                }} />

                <script async custom-element="amp-analytics" src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js" />
            </Head>

            <amp-analytics type="gtag" data-credentials="include">
                <script
                    type="application/json"
                    dangerouslySetInnerHTML={
                        {__html: JSON.stringify({
                            vars: {
                                gtag_id: process.env.GA_MEASUREMENT_ID,
                                config: {
                                    [process.env.GA_MEASUREMENT_ID]: {groups: "default"},
                                },
                            },
                        })}
                    } />
            </amp-analytics>

            {children}

            <style jsx global>{`
                html {
                    scroll-behavior: smooth;
                    font-family: 'Noto Serif JP', serif;
                    color: #734c3d;
                }
                body {
                    background: linear-gradient(#734c3d, #734c3d, #e4d8d3);
                    min-height: 100vh;
                }
            `}</style>
        </>
    );
}


export default Scaffold;
