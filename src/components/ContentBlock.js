const ContentBlock = (props) => {
    return (
        <div className="prose">
            <h3 className={`mb-1 ${props.headerClassName}`}>
                {props.contentHeader}
            </h3>
            <p className="mt-1">
                {props.contentPara}
            </p>
        </div>
    )
}

export default ContentBlock;