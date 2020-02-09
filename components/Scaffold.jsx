import Head from 'next/head';

import JsonLD from './JsonLD';


function Scaffold({children, seo = {}}) {
    return (
        <>
            <Head>
                <title>{seo.siteTitle}</title>
                <meta name="description" content={seo.description} key="description" />

                <link rel="icon" href="/icon.png" key="favicon" />

                <JsonLD type="BarOrPub" properties={{
                    name: "ちくわバー",
                    acceptsReservations: false,
                    openingHours: seo.openingHours,
                    priceRange: seo.priceRange,
                    address: seo.location,
                    location: seo.location,
                    telephone: seo.telephone,
                    image: seo.image.url,
                }} />
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
