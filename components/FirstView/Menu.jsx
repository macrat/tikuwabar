import Link from 'next/link';


function Menu() {
    return (
        <nav>
            <ul>
                <li><Link href="#news"><a>お知らせ</a></Link></li>
                <li><Link href="#schedule"><a>営業日</a></Link></li>
                <li><Link href="#pricing"><a>料金</a></Link></li>
                <li><Link href="#access"><a>アクセス</a></Link></li>

                <style jsx>{`
                    ul {
                        display: flex;
                        justify-content: space-around;
                        margin: 0;
                        padding: 0;
                    }
                    li {
                        display: block;
                        writing-mode: vertical-lr;
                        letter-spacing: 8px;
                        background-color: rgba(255, 255, 255, 0.7);
                    }
                    a {
                        display: block;
                        padding: 14px 8px;
                        text-decoration: none;
                        color: black;
                    }
                `}</style>
            </ul>
        </nav>
    );
}


export default Menu;
