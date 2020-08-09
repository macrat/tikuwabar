import NewsArticle from '../[id]';

import {getFirstView, getNews, getNewsArticle, getSEO} from '../../../lib/api';


export const config = {
    amp: true,
};


function NewsArticlePreview(props) {
    return <NewsArticle {...props} />
}


export const getServerSideProps = async ({params, query}) => ({
    props: {
        firstView: await getFirstView(),
        article: await getNewsArticle(query.id, query.draftKey),
        seo: await getSEO(),
    },
});


export default NewsArticlePreview;
