function Loading() {
    return (
        <div className="loading">
            <style jsx>{`
                .loading {
                    width: 100%;
                    height: 100%;
                    background-color: #734c3d;
                    animation: loading 3s ease infinite alternate;
                }
                @keyframes loading {
                    0% {
                        opacity: .6;
                    }
                    100% {
                        opacity: .1;
                    }
                }
            `}</style>
        </div>
    );
}


export default Loading;
