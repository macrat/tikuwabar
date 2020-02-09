import Title from './Title';


function Section({title, id, children}) {
    return (
        <section id={id}>
            {title ? <Title>{title}</Title> : null}

            <div className="section--outer">
                <div className="section--inner">
                    {children}
                </div>
            </div>

            <style jsx>{`
                section {
                    margin: 32px auto;
                }
                .section--outer {
                    max-width: 900px;
                    box-sizing: border-box;
                    background-color: rgba(255, 255, 255, 0.6);
                    border-radius: 4px;
                }
                ::-webkit-scrollbar {
                    width: 8px;
                }
                ::-webkit-scrollbar-track {
                    margin: 16px 0;
                }
                ::-webkit-scrollbar-thumb {
                    background-color: #b59979;
                }
                div {
                    max-width: 800px;
                    box-sizing: border-box;
                    margin: 0 auto;
                    overflow: auto;
                    padding: 16px 8px;
                }
            `}</style>
        </section>
    );
}


export default Section;
