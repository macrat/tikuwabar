import Link from 'next/link';

import JsonLD from './JsonLD';


export default function BreadList({pages=[]}) {
    return (
        <ul>
            <li><Link href="/"><a>トップ</a></Link></li>

            {pages.map(p => (
                <li><Link href={p.href}><a>{p.title}</a></Link></li>
            ))}

            <JsonLD type="BreadcrumbList" properties={{
                itemListElement: [
                    {
                        "@type": "ListItem",
                        position: 1,
                        item: {
                            "@id": "/",
                            name: "ちくわバー",
                        },
                    },
                    ...pages.map((p, i) => ({
                        "@type": "ListItem",
                        position: 2 + i,
                        item: {
                            "@id": p.href,
                            name: p.title,
                        },
                    })),
                ],
            }} />

            <style jsx>{`
                ul {
                    margin: 0 auto;
                    padding: 0;
                    max-width: 900px;
                }
                li {
                    display: inline;
                    color: white;
                    font-size: smaller;
                }
                a {
                    color: inherit;
                    text-decoration: none;
                }
                li:not(:last-of-type):after {
                    content: ' > ';
                }
            `}</style>
        </ul>
    );
}
