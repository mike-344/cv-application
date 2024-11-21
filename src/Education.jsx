function Education({legendTitle = "Education"}){
    return(
        <fieldset>
        <legend>{legendTitle}</legend>
        <label htmlFor="">School:</label>
        <input type="text" name="" id="" />

        <label htmlFor="">Degree:</label>
        <input type="text" name="" id="" />
        
        <label htmlFor="">Start Date:</label>
        <input type="date" name="" id="" />

        <label htmlFor="">End Date:</label>
        <input type="date" name="" id="" />

        
    </fieldset>
    )
}
export{Education}