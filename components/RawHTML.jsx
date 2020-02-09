function RawHTML({html}) {
    return (
        <div dangerouslySetInnerHTML={{__html: html}} />
    );
}


export default RawHTML;
