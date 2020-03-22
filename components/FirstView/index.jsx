import {useState} from 'react';

import Menu from './Menu';
import TopText from './TopText';
import RawHTML from '../RawHTML';
import Instagram from '../Instagram';


function LogoSelector({logo, setLogo}) {
    return (
        <div className="first-view--logo-selector">
            <h1>見た目をいじるやつ</h1>
            <button disabled={logo === 'dark'} onClick={() => setLogo('dark')}><img src="/logo/dark.png" alt="黒いロゴ" /></button>
            <button disabled={logo === 'light'} onClick={() => setLogo('light')}><img src="/logo/light.png" alt="茶色いロゴ" /></button>
            <style jsx>{`
                div {
                    position: fixed;
                    bottom: 0;
                    right: 0;
                    padding: 16px 24px;
                    background-color: rgba(255, 0, 0, .8);
                    z-index: 1000;
                }
                h1 {
                    font-size: 120%;
                    color: white;
                    margin: 0 0 4px;
                }
                button {
                    display: block;
                    width: 100%;
                }
                button:disabled {
                    opacity: .5;
                }
                img {
                    width: 120px;
                    pointer-events: none;
                }
            `}</style>
        </div>
    );
}


function FirstView({image, topText}) {
    const [logo, setLogo] = useState('dark');

    return (
        <header>
            <div>
                <h1><img alt="ちくわバー" src={`/logo/${logo}.png`} /></h1>
                <span>不慣れなおじさん一人でやってます</span>
            </div>
            <nav>
                <Menu />
            </nav>
            <TopText>
                <RawHTML html={topText} />
            </TopText>

            <a href="https://www.instagram.com/tikuwa_world/" target="_blank">
                <Instagram />
            </a>

            <LogoSelector logo={logo} setLogo={setLogo} />

            <style jsx>{`
                header {
                    position: relative;
                    width: 100%;
                    height: 600px;
                    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0), rgba(255, 255, 255, 0.5)), url("${image.url}");
                    background-size: cover;
                }
                div {
                    position: absolute;
                    top: 12px;
                    left: 12px;
                }
                nav {
                    position: absolute;
                    bottom: 240px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                }
                h1, span {
                    display: block;
                    padding: 0;
                    margin: 0;
                    width: 100%;
                    color: white;
                }
                img {
                    width: 380px;
                    max-width: 100%;
                }
                span {
                    font-size: 24px;
                    margin-bottom: 16px;
                }
                a {
                    position: absolute;
                    color: white;
                    text-decoration: none;
                    top: 0;
                    right: 0;
                }
                @media screen and (max-width: 740px) {
                    div {
                        text-align: center;
                        top: 24px;
                        right: 12px;
                    }
                }
                @media screen and (max-width: 460px) {
                    header {
                        position: unset;
                        height: auto;
                    }
                    div {
                        position: unset;
                    }
                    nav {
                        position: unset;
                    }
                    h1 {
                        padding-top: 32px;
                        font-size: 75px;
                    }
                }
            `}</style>
        </header>
    );
}


export default FirstView;
