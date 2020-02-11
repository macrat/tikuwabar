function GoogleAnalytics({id}) {
    return (
        <>
            <script async custom-element="amp-analytics" src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js" />

            <amp-analytics type="gtag" data-credentials="include">
                <script
                    type="application/json"
                    dangerouslySetInnerHTML={
                        {__html: JSON.stringify({
                            vars: {
                                gtag_id: id,
                                config: {
                                    [id]: {
                                        groups: "default",
                                    },
                                },
                            },
                        })}
                    } />
            </amp-analytics>
        </>
    );
}


export default GoogleAnalytics;
