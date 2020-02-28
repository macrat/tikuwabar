import Head from 'next/head';

import Section from './Section';
import RawHTML from './RawHTML';
import Loading from './Loading';


function Opening({preText, afterText}) {
    return (
        <Section title="営業スケジュール" id="schedule">
            <Head>
                <script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>
            </Head>

            {preText ? <RawHTML html={preText} /> : ''}

            <amp-iframe
                height="400"
                sandbox="allow-scripts allow-same-origin"
                src="https://calendar.google.com/calendar/embed?height=400&amp;wkst=2&amp;bgcolor=%23795548&amp;ctz=Asia%2FTokyo&amp;src=c2hvamlyLm9vb190bHZsNnVyNDJuajExYzVjODQwNnBraWlyY0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%23743500&amp;showTitle=0&amp;showNav=0&amp;showPrint=0&amp;showTabs=1&amp;showTz=0&amp;showCalendars=0&amp;mode=AGENDA"
                frameborder="0"
                scrolling="no">

                <Loading />
            </amp-iframe>

            {afterText ? <RawHTML html={afterText} /> : ''}

            <style jsx>{`
                h1 {
                    max-width: 800px;
                    margin: 0 auto;
                }
                #opening {
                    margin: 0 auto;
                    max-width: 900px;
                }
                iframe {
                    width: 100%;
                    height: 400px;
                }
            `}</style>
        </Section>
    );
}


export default Opening;
