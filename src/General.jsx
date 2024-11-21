function General({legendTitle = "General", value}){
   
    return(
        <fieldset>
        <legend>{legendTitle}</legend>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" value={value.name} onChange={(e) => setValue({...value, name:e.target.value})}/>

        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" value={value.email} onChange={(e) => setValue({...value, email:e.target.value})}/>

        <label htmlFor="phone">Phone:</label>
        <input type="tel" name="phone" id="phone" value={value.phone} onChange={(e) => setValue({...value, phone:e.target.value})}/>
        </fieldset>
    )
}

export {General}

