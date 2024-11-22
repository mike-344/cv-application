function GeneralForm({legendTitle = "General", value, handleChange}){
   
    return(
        <fieldset >
        <legend>{legendTitle}</legend>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" value={value.name} onChange={(e)=>handleChange(e,"name")}/>

        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" value={value.email} onChange={(e)=>handleChange(e,"email")}/>

        <label htmlFor="phone">Phone:</label>
        <input type="tel" name="phone" id="phone" value={value.phone} onChange={(e)=>handleChange(e,"phone")}/>
        </fieldset>
    )
}

export {GeneralForm}

