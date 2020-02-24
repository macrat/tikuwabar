import axios from 'axios';

import {asJST} from './timezone';


export function fetch(path, params) {
    return axios
        .get(`https://tikuwabar.microcms.io/api/v1${path}`, {
            params: params,
            headers: {'X-API-KEY': process.env.MICROCMS_API_KEY},
        })
        .then(resp => resp.data)
}


export const getFirstView = draftKey => fetch('/firstview', {draftKey});


const parseArticle = article => ({
        ...article,
        rawContent: article.content,
        content: article.content.replace(
            /<img src="(https:\/\/images\.microcms-assets\.io\/.*)" /,
            '<amp-img layout=responsive width=800 height=600 src="$1?fit=max&w=800&h=600" ',
        ),
        createdAt: asJST(new Date(article.createdAt)),
        updatedAt: asJST(new Date(article.updatedAt)),
});


export const getNews = async (limit=20, draftKey) => {
    return (await fetch('/news', {limit: limit, draftKey: draftKey})).contents.map(parseArticle);
};


export const getNewsArticle = async (id, draftKey) => {
    return parseArticle(await fetch(`/news/${id}`, {draftKey}));
};


export const getSchedule = draftKey => fetch('/schedule', {draftKey});


export const getPricing = draftKey => fetch('/pricing', {draftKey});


export const getAccess = draftKey => fetch('/access', {draftKey});


export const getSEO = draftKey => fetch('/seo', {draftKey});


export const getPrivacyPolicy = draftKey => fetch('/privacy-policy', {draftKey});
