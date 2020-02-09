function JsonLD({type, properties}) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={
                {__html: JSON.stringify({
                    "@context": "http://schema.org/",
                    "@type": type,
                    ...properties,
                })}
            } />
    );
}


export default JsonLD;
