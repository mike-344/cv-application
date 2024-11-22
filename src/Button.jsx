function Button({text = "New", onClick}){

    return(
        <button type="button" onClick={onClick}>{text}</button>
    )
}

export {Button}