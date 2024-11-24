function Button({text = "Save", onClick}){

    return(
        <button type="button" onClick={onClick}>{text}</button>
    )
}

export {Button}