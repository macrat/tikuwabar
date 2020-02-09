import axios from 'axios';

import {asJST} from './timezone';


export function fetch(path) {
    return axios
        .get(`https://tikuwabar.microcms.io/api/v1${path}`, {headers: {'X-API-KEY': process.env.MICROCMS_API_KEY}})
        .then(resp => resp.data)
}


export const getFirstView = () => fetch('/firstview');


export const getNews = async id => {
    if (!id) {
        return (await fetch('/news?limit=100')).contents.map(x => ({
            ...x,
            createdAt: asJST(new Date(x.createdAt)),
            updatedAt: asJST(new Date(x.updatedAt)),
        }));
    }

    return await fetch(`/news/${id}`);
}


export const getSchedule = () => fetch('/schedule');


export const getPricing = () => fetch('/pricing');


export const getAccess = () => fetch('/access');


export const getSEO = () => fetch('/seo');
