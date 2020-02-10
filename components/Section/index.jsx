import Title from './Title';
import Inner from './Inner';


function Section({title, id, children}) {
    return (
        <section id={id}>
            {title ? <Title>{title}</Title> : null}

            <Inner>{children}</Inner>

            <style jsx>{`
                section {
                    margin: 32px auto;
                }
            `}</style>
        </section>
    );
}


export default Section;
