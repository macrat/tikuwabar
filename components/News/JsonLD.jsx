import JsonLD from '../JsonLD';


function NewsJsonLD({id, title, content, createdAt, updatedAt, seo}) {
    return (
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
            url: `/news/${id}`,
        }} />
    );
}


export default NewsJsonLD;
