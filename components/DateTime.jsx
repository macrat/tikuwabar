function DateTime({time, style = {}}) {
    return (
        <time datetime={time.toISOString()} style={style}>
            {`${time.getFullYear()}.${time.getMonth() + 1}.${time.getDate()} ${time.getHours()}:${String(time.getMinutes()).padStart(2, '0')}`}
        </time>
    );
}


export default DateTime;
