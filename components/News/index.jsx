import Head from 'next/head';
import Link from 'next/link';

import Section from '../Section';
import Modal from './Modal';


function Time({time}) {
    return (
        <time datetime={time.toISOString()}>
            {`${time.getFullYear()}.${time.getMonth() + 1}.${time.getDate()}`}
        </time>
    );
}


function News({news, seo}) {
    return (
        <Section title="お知らせ" id="news">
            <Head>
                <script async custom-element="amp-lightbox" src="https://cdn.ampproject.org/v0/amp-lightbox-0.1.js" />
            </Head>

            <ul>
                {news.map(x => (
                    <li key={x.id}>
                        <a on={`tap:${x.id}`} role="button" tabIndex="0">
                            <Time time={new Date(x.createdAt)} />
                            {` ${x.title}`}
                        </a>

                        <Modal {...x} seo={seo} />
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
