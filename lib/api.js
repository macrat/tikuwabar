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


export const getNews = async draftKey => {
    return (await fetch('/news', {limit: 20, draftKey: draftKey})).contents.map(x => ({
        ...x,
        createdAt: asJST(new Date(x.createdAt)),
        updatedAt: asJST(new Date(x.updatedAt)),
    }));
}


export const getSchedule = draftKey => fetch('/schedule', {draftKey});


export const getPricing = draftKey => fetch('/pricing', {draftKey});


export const getAccess = draftKey => fetch('/access', {draftKey});


export const getSEO = draftKey => fetch('/seo', {draftKey});
