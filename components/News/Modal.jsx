import DateTime from '../DateTime';
import RawHTML from '../RawHTML';
import JsonLD from './JsonLD';



function NewsModal(props) {
    const {id, title, createdAt, updatedAt, content, seo} = props;

    return (
        <amp-lightbox id={id} layout="nodisplay">
            <div className="news-modal--wrapper">
                <div className="news-modal--closer" on={`tap:${id}.close`} role="button" tabIndex="0" />

                <article>
                    <h2>{title}</h2>
                    <div><DateTime time={new Date(createdAt)} /></div>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="32"
                        width="32"
                        viewBox="0 0 24 24"
                        on={`tap:${id}.close`}
                        role="button"
                        tabIndex="0">

                        <title>閉じる</title>
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="#734c3d" />
                    </svg>

                    <RawHTML html={content} />

                    <JsonLD {...props} />
                </article>
            </div>

            <style jsx>{`
                .news-modal--wrapper, .news-modal--closer {
                    position: absolute;
                    width: 100vw;
                    height: 100vh;
                }
                .news-modal--wrapper {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 10;
                }
                .news-modal--closer {
                    background-color: rgba(0, 0, 0, 0.4);
                    z-index: 11;
                    cursor: pointer;
                }
                article {
                    position: relative;
                    width: 800px;
                    max-width: 100%;
                    padding: 32px 64px;
                    box-sizing: border-box;
                    background-color: rgba(255, 255, 255, 0.95);
                    border-radius: 12px;
                    z-index: 12;
                }
                svg {
                    position: absolute;
                    top: 12px;
                    right: 12px;
                    cursor: pointer;
                }

                h2 {
                    font-size: 28px;
                    margin: 0 0 12px;
                    padding: 0;
                }
            `}</style>
        </amp-lightbox>
    );
}


export default NewsModal;
