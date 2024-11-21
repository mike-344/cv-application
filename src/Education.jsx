function Education({legendTitle = "Education", value, handleChange}){
    return(
        <fieldset>
        <legend>{legendTitle}</legend>
        <label htmlFor="school">School:</label>
        <input type="text" name="school" id="school" value={value.school} onChange={handleChange}/>

        <label htmlFor="degree">Degree:</label>
        <input type="text" name="degree" id="degree" value={value.degree} onChange={handleChange}/>
        
        <label htmlFor="schoolStartDate">Start Date:</label>
        <input type="date" name="schoolStartDate" id="schoolStartDate" value={value.schoolStartDate} onChange={handleChange}/>

        <label htmlFor="schoolEndDate">End Date:</label>
        <input type="date" name="schoolEndDate" id="schoolEndDate" value={value.schoolEndDate} onChange={handleChange}/>

        
    </fieldset>
    )
}
export{Education}