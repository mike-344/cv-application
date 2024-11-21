function General({legendTitle = "General"}){
    return(
        <fieldset>
        <legend>{legendTitle}</legend>
        <label htmlFor="">Name:</label>
        <input type="text" name="" id="" />

        <label htmlFor="">Email:</label>
        <input type="text" name="" id="" />

        <label htmlFor="">Phone:</label>
        <input type="text" name="" id="" />
    </fieldset>
    )
}

export {General}