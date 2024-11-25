import { useState } from "react";
import { Button } from "./Button";
//working on it, basing off general form
function FormEducationSection({ educationFormData, handleChange, handleClick }){
    const [closed, setClosed] = useState(true);

    const handleToggle = () => {
      closed ? setClosed(false) : setClosed(true);
     };
       
return (
    <fieldset>
         <legend onClick={handleToggle}>Education</legend>
         {!closed ? (
     
        <>
          <label>School:
            <input
              type="text"
              name="school"
              id=""
              value={educationFormData.school}
              onChange={handleChange}
            />
          </label>
  
          <label>Degree:
            <input
              type="text"
              name="degree"
              id=""
              value={educationFormData.degree}
              onChange={handleChange}
            />
          </label>
  
          <label>From:
            <input
              type="date"
              name="schoolDateFrom"
              id=""
              value={educationFormData.schoolDateFrom}
              onChange={handleChange}
            />
          </label>
          <label>to:
            <input
              type="date"
              name="schoolDateTo"
              id=""
              value={educationFormData.schoolDateTo}
              onChange={handleChange}
            />
          </label>
          <Button onClick={handleClick} />
        </>
         ): null}
    
    </fieldset>
)
}


export {FormEducationSection}