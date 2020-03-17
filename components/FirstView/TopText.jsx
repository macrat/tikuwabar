function TopText({children}) {
    return (
        <div>
            <article>
                {children}
            </article>

            <style jsx>{`
                div {
                    position: absolute;
                    bottom: 0;
                    color: #744917;
                    background-color: rgba(255, 255, 255, 0.7);
                    width: 100%;
                    display: flex;
                    justify-content: center;
                }
                article {
                    margin: 12px auto 8px;
                    max-width: 800px;
                }
                @media screen and (max-width: 900px) {
                    article {
                        margin: 8px 16px 4px;
                    }
                }
                @media screen and (max-width: 460px) {
                    div {
                        position: unset;
                        padding: 8px 4px;
                    }
                }
            `}</style>
        </div>
    );
}


export default TopText;
