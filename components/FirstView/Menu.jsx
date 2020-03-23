import Link from 'next/link';


function Menu() {
    return (
        <ul>
            <li><Link href="#news"><a>お知らせ</a></Link></li>
            <li><Link href="#schedule"><a>営業日</a></Link></li>
            <li><Link href="#pricing"><a>料金</a></Link></li>
            <li><Link href="#access"><a>アクセス</a></Link></li>

            <style jsx>{`
                ul {
                    width: 400px;
                    max-width: 100%;
                    display: flex;
                    justify-content: space-around;
                    margin: 0;
                    padding: 0;
                    text-align: center;
                }
                li {
                    display: block;
                    writing-mode: vertical-lr;
                    letter-spacing: 8px;
                    background-color: rgba(255, 255, 255, 0.7);
                }
                a {
                    display: block;
                    padding: 24px 8px;
                    text-decoration: none;
                    color: black;
                }
            `}</style>
        </ul>
    );
}


export default Menu;
