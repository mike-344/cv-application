function Button({text = "Save", handleClick }){

    return(
        <button type="button" onClick={handleClick}>{text}</button>
    )
}

export{Button}