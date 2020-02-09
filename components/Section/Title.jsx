function SecionTitle({children}) {
    return (
        <h1>
            {children}

            <style jsx>{`
                h1 {
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 0;
                    font-size: 40px;
                    color: white;
                    font-weight: normal;
                }
            `}</style>
        </h1>
    );
}


export default SecionTitle;
