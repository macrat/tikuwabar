import RawHTML from '../RawHTML';
import JsonLD from '../JsonLD';


function DateTime({time}) {
    return (
        <time>{time.getFullYear()}.{time.getMonth() + 1}.{time.getDate()} {time.getHours()}:{String(time.getMinutes()).padStart(2, '0')}</time>
    );
}


function NewsModal({id, title, createdAt, updatedAt, content, seo}) {
    return (
        <amp-lightbox id={id} layout="nodisplay">
            <div className="news-modal--wrapper">
                <div className="news-modal--closer" on={`tap:${id}.close`} role="button" tabIndex="0" />

                <article>
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

                    <h2>{title}</h2>
                    <div><DateTime time={new Date(createdAt)} /></div>

                    <RawHTML html={content} />

                    <JsonLD type="NewsArticle" properties={{
                        headline: title,
                        articleBody: content,
                        dateCreated: createdAt,
                        dateModified: updatedAt,
                        datePublished: createdAt,
                        author: 'ちくわバー',
                        publisher: {
                            '@type': 'Organization',
                            name: 'ちくわバー',
                            logo: {
                                '@type': 'ImageObject',
                                'url': '/logo.png',
                            },
                        },
                        image: seo.image.url,
                        mainEntityOfPage: '/',
                    }} />
                </article>
            </div>

            <style jsx>{`
                .news-modal--wrapper, .news-modal--closer {
                    position: fixed;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
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
