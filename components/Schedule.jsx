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
                src={process.env.GOOGLE_CALENDAR_URL}
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
