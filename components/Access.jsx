import Section from './Section';
import RawHTML from './RawHTML';
import Loading from './Loading';


function Access({preText, afterText}) {
    return (
        <Section title="アクセス" id="access">
            {preText ? <RawHTML html={preText} /> : ''}

            <amp-iframe
                height="500"
                sandbox="allow-scripts allow-same-origin allow-popups"
                src={process.env.GOOGLE_MAP_URL}
                frameborder="0"
                allowfullscreen="allowfullscreen">

                <Loading />
            </amp-iframe>

            {afterText ? <RawHTML html={afterText} /> : ''}
        </Section>
    );
}


export default Access;
