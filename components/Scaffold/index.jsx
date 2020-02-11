import Head from 'next/head';

import JsonLD from '../JsonLD';
import GoogleAnalytics from './GoogleAnalytics';


function Scaffold({children, seo = {}}) {
    return (
        <>
            <Head>
                <link rel="icon" href="/icon.png" key="favicon" />

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

                <GoogleAnalytics id={process.env.GA_MEASUREMENT_ID} />
            </Head>

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
