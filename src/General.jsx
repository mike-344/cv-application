function General({legendTitle = "General"}){
    return(
        <fieldset>
        <legend>{legendTitle}</legend>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" />

        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" />

        <label htmlFor="phone">Phone:</label>
        <input type="text" name="phone" id="phone" />
    </fieldset>
    )
}

export {General}

