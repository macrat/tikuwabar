import DateTime from '../DateTime';


function SectionInner({timestamp, children}) {
    return (
        <div className="section--outer">
            {timestamp ? <span className="section--timestamp"><DateTime time={timestamp} /></span> : ""}

            <div className="section--inner">
                {children}
            </div>

            <style jsx>{`
                .section--outer {
                    position: relative;
                    max-width: 900px;
                    box-sizing: border-box;
                    background-color: rgba(255, 255, 255, 0.6);
                    border-radius: 4px;
                }
                .section--timestamp {
                    display: block;
                    position: absolute;
                    top: -5px;
                    right: 0;
                    font-size: 32px;
                    opacity: .5;
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
        </div>
    );
}


export default SectionInner;
