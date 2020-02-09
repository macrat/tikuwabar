function Footer({location, telephone}) {
    return (
        <footer>
            {location} <a href={`tel:${telephone}`}>{telephone}</a><br />
            &copy; 2020 ちくわバー All rights reserved.

            <style jsx>{`
                footer {
                    text-align: center;
                }
                a {
                    color: inherit;
                }
            `}</style>
        </footer>
    );
}


export default Footer;
