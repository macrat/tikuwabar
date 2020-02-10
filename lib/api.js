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


const parseTimezone = article => ({
        ...article,
        createdAt: asJST(new Date(article.createdAt)),
        updatedAt: asJST(new Date(article.updatedAt)),
});


export const getFirstView = draftKey => fetch('/firstview', {draftKey});


export const getNews = async draftKey => {
    return (await fetch('/news', {limit: 20, draftKey: draftKey})).contents.map(parseTimezone);
};


export const getNewsArticle = async (id, draftKey) => {
    return parseTimezone(await fetch(`/news/${id}`, {draftKey}));
};


export const getSchedule = draftKey => fetch('/schedule', {draftKey});


export const getPricing = draftKey => fetch('/pricing', {draftKey});


export const getAccess = draftKey => fetch('/access', {draftKey});


export const getSEO = draftKey => fetch('/seo', {draftKey});
