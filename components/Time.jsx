function Time({time}) {
    return (
        <time dateTime={time.toISOString()}>
            {`${time.getFullYear()}.${time.getMonth() + 1}.${time.getDate()}`}
        </time>
    );
}


export default Time;
