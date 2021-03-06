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
                    color: #2d1a12;
                    background-color: rgba(255, 255, 255, 0.7);
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    margin-top: 16px;
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
                    }
                }
            `}</style>
        </div>
    );
}


export default TopText;
