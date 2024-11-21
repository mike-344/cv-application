function General({legendTitle = "General", value, handleChange}){
   
    return(
        <fieldset>
        <legend>{legendTitle}</legend>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" value={value.name} onChange={handleChange}/>

        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" value={value.email} onChange={handleChange}/>

        <label htmlFor="phone">Phone:</label>
        <input type="tel" name="phone" id="phone" value={value.phone} onChange={handleChange}/>
        </fieldset>
    )
}

export {General}

