import { useState } from "react";
import { Button } from "./Button";
//working on it, basing off general form
function FormEducationSection({ educationInputs, handleChange, handleClick }){
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
              value={educationInputs.school}
              onChange={handleChange}
            />
          </label>
  
          <label>Degree:
            <input
              type="text"
              name="degree"
              id=""
              value={educationInputs.degree}
              onChange={handleChange}
            />
          </label>
  
          <label>From:
            <input
              type="date"
              name="schoolDateFrom"
              id=""
              value={educationInputs.schoolDateFrom}
              onChange={handleChange}
            />
          </label>
          <label>to:
            <input
              type="date"
              name="schoolDateTo"
              id=""
              value={educationInputs.schoolDateTo}
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