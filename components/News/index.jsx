import Head from 'next/head';
import Link from 'next/link';

import Section from '../Section';
import Time from '../Time';


function News({news, seo}) {
    return (
        <Section title="お知らせ" id="news">
            <ul>
                {news.map(x => (
                    <li key={x.id}>
                        <Link href="/news/[id]" as={`/news/${x.id}`}><a>
                            <Time time={new Date(x.createdAt)} />
                            {` ${x.title}`}
                        </a></Link>
                    </li>
                ))}
            </ul>

            <style jsx>{`
                ul {
                    max-height: 120px;
                    margin: 0;
                    padding: 0;
                }
                li {
                    display: block;
                    margin: 4px 0;
                    line-height: 1.5em;
                }
                a {
                    cursor: pointer;
                    text-decoration: underline;
                }
            `}</style>
        </Section>
    );
}


export default News;
