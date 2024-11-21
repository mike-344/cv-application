function Education({legendTitle = "Education"}){
    return(
        <fieldset>
        <legend>{legendTitle}</legend>
        <label htmlFor="school">School:</label>
        <input type="text" name="school" id="school" />

        <label htmlFor="degree">Degree:</label>
        <input type="text" name="degree" id="degree" />
        
        <label htmlFor="startDate">Start Date:</label>
        <input type="date" name="startDate" id="startDate" />

        <label htmlFor="endDate">End Date:</label>
        <input type="date" name="endDate" id="endDate" />

        
    </fieldset>
    )
}
export{Education}