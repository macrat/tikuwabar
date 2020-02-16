import JsonLD from '../JsonLD';


function NewsJsonLD({id, title, rawContent, createdAt, updatedAt, seo}) {
    return (
        <JsonLD type="NewsArticle" properties={{
            headline: title,
            articleBody: rawContent,
            dateCreated: createdAt,
            dateModified: updatedAt,
            datePublished: createdAt,
            author: 'ちくわバー',
            publisher: {
                '@type': 'Organization',
                name: 'ちくわバー',
                logo: {
                    '@type': 'ImageObject',
                    'url': 'https://tikuwabar.shojir.ooo/logo.png',
                },
            },
            image: seo.image.url,
            mainEntityOfPage: `https://tikuwabar.shojir.ooo/news/${id}`,
            url: `https://tikuwabar.shojir.ooo/news/${id}`,
        }} />
    );
}


export default NewsJsonLD;
