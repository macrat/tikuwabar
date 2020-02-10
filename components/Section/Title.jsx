function SecionTitle({children}) {
    return (
        <h2>
            {children}

            <style jsx>{`
                h2 {
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 0;
                    font-size: 40px;
                    color: white;
                    font-weight: normal;
                }
            `}</style>
        </h2>
    );
}


export default SecionTitle;
