function TopText() {
    return (
        <div>
            <article>
                <p>平日は「六花」という店名で可愛い女性たちが営業されている素敵なお店です。「ちくわバー」は、「六花」がお休みのときに、場所をお借りして営業します。ということで、開店祝いのお花とか、うれしいのですが、置いておくことが難しいので、お断りさせていただけると、ありがたいです。</p>
                <p>あ、ま、それでも、お気持ちがほとばしってしょうがないのなら、薄いもので・・・。</p>
            </article>

            <style jsx>{`
                div {
                    position: absolute;
                    bottom: 0;
                    color: #744917;
                    background-color: rgba(255, 255, 255, 0.7);
                    border-radius: 100% 100% 0 0;
                    height: 200px;
                    width: 100%;
                }
                article {
                    margin: 60px auto 0;
                    max-width: 800px;
                }
                @media screen and (max-width: 900px) {
                    div {
                        border-radius: 0;
                        height: auto;
                    }
                    article {
                        margin: 8px 16px 4px;
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
