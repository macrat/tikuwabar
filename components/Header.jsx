import Link from 'next/link';

import Instagram from './Instagram';


function Header({image}) {
    return (
        <header>
            <Link href="/"><a>
                <amp-img
                    alt="ちくわバー"
                    width="210"
                    height="56"
                    layout="intrinsic"
                    srcset="/img/logo.png 1x, /img/logo@2x.png 2x"
                    src="/img/logo.png" />
            </a></Link>
            <span>不慣れなおじさん一人でやってます</span>

            <a className="instagram" href="https://www.instagram.com/tikuwa_world/" target="_blank">
                <Instagram />
            </a>

            <style jsx>{`
                header {
                    position: relative;
                    color: white;
                    background: url("${image.url}");
                    background-size: cover;
                    padding: 6px 8px 16px;
                }
                span {
                    display: block;
                    font-size: 18px;
                }
                a {
                    color: inherit;
                    text-decoration: none;
                }
                .instagram {
                    position: absolute;
                    bottom: 0;
                    right: 0;
                }
                @media screen and (max-width: 450px) {
                    .instagram {
                        top: 0;
                        bottom: auto;
                    }
                }
            `}</style>
        </header>
    );
}


export default Header;
