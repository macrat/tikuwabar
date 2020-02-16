import Head from 'next/head';

import JsonLD from './JsonLD';


function Scaffold({children, seo = {}}) {
    return (
        <>
            <Head>
                <link rel="icon" href="/icon.png" key="favicon" />
                <link rel="alternate" type="application/atom+xml" href="/news/atom.xml" title="ちくわバーからのお知らせフィード" key="feed" />

                <JsonLD type="BarOrPub" properties={{
                    name: "ちくわバー",
                    '@id': 'https://tikuwabar.shojir.ooo/',
                    url: 'https://tikuwabar.shojir.ooo/',
                    logo: 'https://tikuwabar.shojir.ooo/icon.png',
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
                    font-family: serif;
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
