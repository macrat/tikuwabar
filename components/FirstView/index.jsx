import Menu from './Menu';
import TopText from './TopText';


function FirstView({image, topText}) {
    return (
        <header>
            <div className="first-view--menu-wrapper">
                <div className="first-view--menu">
                    <h1>ちくわバー</h1>
                    <span>不慣れなおじさん一人でやってます</span>
                    <Menu />
                </div>
            </div>
            <TopText text={topText} />

            <style jsx>{`
                header {
                    position: relative;
                    width: 100%;
                    height: 600px;
                    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0), rgba(255, 255, 255, 0.5)), url("${image.url}");
                    background-size: cover;
                }
                .first-view--menu-wrapper {
                    display: flex;
                    justify-content: center;
                    position: absolute;
                    top: 70px;
                    width: 100%;
                }
                .first-view--menu {
                    text-align: center;
                }
                h1, span {
                    display: block;
                    padding: 0;
                    margin: 0;
                    width: 100%;
                    color: white;
                }
                h1 {
                    font-size: 80px;
                    font-family: 'Noto Sans JP', gothic, sans-serif;
                    font-weight: bold;
                }
                span {
                    font-size: 24px;
                    margin-bottom: 16px;
                }
                @media screen and (max-width: 460px) {
                    header {
                        position: unset;
                        height: auto;
                    }
                    .first-view--menu-wrapper {
                        position: unset;
                        margin-bottom: 32px;
                    }
                    h1 {
                        margin-top: 32px;
                        font-size: 75px;
                    }
                }
            `}</style>
        </header>
    );
}


export default FirstView;
