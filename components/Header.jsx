import Link from 'next/link';


function Header({image}) {
    return (
        <header>
            <Link href="/"><a><h1>ちくわバー</h1></a></Link>
            <span>不慣れなおじさん一人でやってます</span>

            <style jsx>{`
                header {
                    color: white;
                    background: url("${image.url}");
                    background-size: cover;
                    padding: 6px 8px 16px;
                }
                h1 {
                    margin: 0;
                    font-family: gothic;
                    font-size: 40px;
                }
                span {
                    font-size: 18px;
                }
                a {
                    color: inherit;
                    text-decoration: none;
                }
            `}</style>
        </header>
    );
}


export default Header;
