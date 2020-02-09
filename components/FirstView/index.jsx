import Menu from './Menu';
import TopText from './TopText';


function FirstView({image, topText}) {
    return (
        <div className="first-view">
            <div className="first-view--menu-area">
                <header>
                    <h1>ちくわバー</h1>
                    <span>不慣れなおじさん一人でやってます</span>
                    <Menu />
                </header>
            </div>
            <TopText text={topText} />

            <style jsx>{`
                .first-view {
                    position: relative;
                    width: 100%;
                    height: 600px;
                    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0), rgba(255, 255, 255, 0.5)), url("${image.url}");
                    background-size: cover;
                }
                .first-view--menu-area {
                    display: flex;
                    justify-content: center;
                    position: absolute;
                    top: 70px;
                    width: 100%;
                }
                header {
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
                    font-family: gothic;
                    font-weight: bold;
                }
                span {
                    font-size: 24px;
                    margin-bottom: 16px;
                }
                @media screen and (max-width: 420px) {
                    .first-view {
                        position: unset;
                        height: auto;
                    }
                    .first-view--menu-area {
                        position: unset;
                        margin-bottom: 32px;
                    }
                    h1 {
                        margin-top: 32px;
                        font-size: 75px;
                    }
                }
            `}</style>
        </div>
    );
}


export default FirstView;
