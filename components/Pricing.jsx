import Section from './Section';
import RawHTML from './RawHTML';


function Pricing({pricing}) {
    return (
        <Section title="料金" id="pricing">
            <RawHTML html={pricing} />
        </Section>
    );
}


export default Pricing;
