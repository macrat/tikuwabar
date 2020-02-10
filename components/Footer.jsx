function Footer({location, telephone}) {
    return (
        <footer>
            {location} <address><a href={`tel:${telephone}`}>{telephone}</a></address><br />
            <small>&copy; 2020 ちくわバー All rights reserved.</small>

            <style jsx>{`
                footer {
                    text-align: center;
                    font-size: smaller;
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
            `}</style>
        </footer>
    );
}


export default Footer;
