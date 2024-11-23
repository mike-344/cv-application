
//General section for the resume input form
function GeneralForm({legendTitle = "General", value, handleChange}){
   
    return(
        <fieldset >
        <legend>{legendTitle}</legend>
        <label>Name:
        <input type="text" name="name" value={value.name} onChange={(e)=>handleChange(e,"name")}/>
        </label>

        <label>Email:
        <input type="email" name="email" value={value.email} onChange={(e)=>handleChange(e,"email")}/>
        </label>

        <label>Phone:
        <input type="tel" name="phone" value={value.phone} onChange={(e)=>handleChange(e,"phone")}/>
        </label>
        </fieldset>
    )
}

export {GeneralForm}

