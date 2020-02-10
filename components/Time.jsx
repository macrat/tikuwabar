function Time({time}) {
    return (
        <time datetime={time.toISOString()}>
            {`${time.getFullYear()}.${time.getMonth() + 1}.${time.getDate()}`}
        </time>
    );
}


export default Time;
