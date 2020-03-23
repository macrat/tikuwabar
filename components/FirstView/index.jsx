import {useState} from 'react';

import Menu from './Menu';
import TopText from './TopText';
import RawHTML from '../RawHTML';
import Instagram from '../Instagram';


function FirstView({image, topText}) {
    return (
        <header>
            <div>
                <h1>
                    <amp-img
                        alt="ちくわバー"
                        width="380"
                        height="101"
                        layout="intrinsic"
                        srcset="/img/logo.png 1x, /img/logo@2x.png 2x"
                        src="/img/logo.png" />
                </h1>
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
