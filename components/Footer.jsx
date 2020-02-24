import Link from 'next/link';


function Footer({location, telephone}) {
    return (
        <footer>
            {location} <address><a href={`tel:${telephone}`}>{telephone}</a></address><br />
            <small>
                <span><Link href="/privacy-policy"><a>プライバシーポリシー</a></Link></span>
                <span>&copy; 2020 ちくわバー All rights reserved.</span>
            </small>

            <style jsx>{`
                footer {
                    text-align: center;
                    font-size: smaller;
                    color: rgba(20, 10, 0, .6);
                }
                a {
                    color: inherit;
                }
                address {
                    display: inline;
                    font-style: inherit;
                }
                small {
                    font-size: unset;
                }
                span {
                    display: inline-block;
                    margin: 0 8px;
                }
            `}</style>
        </footer>
    );
}


export default Footer;
