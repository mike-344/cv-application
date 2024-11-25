import { useState } from "react";
import { Button } from "./Button";

function FormPersonalSection({ personalInputs, handleChange, handleClick }) {
    
  const [closed, setClosed] = useState(true);

 
  const handleToggle = () => {
   closed ? setClosed(false) : setClosed(true);
  };


  return (
    <>
      <fieldset>
        <legend onClick={handleToggle}>Personal Information</legend>
      {!closed ? (
         <>
         <label>Name:
           <input
             type="text"
             name="name"
             id=""
             value={personalInputs.name}
             onChange={handleChange}
           />
         </label>
 
         <label>Email:
           <input
             type="text"
             name="email"
             id=""
             value={personalInputs.email}
             onChange={handleChange}
           />
         </label>
 
         <label>Phone:
           <input
             type="text"
             name="phone"
             id=""
             value={personalInputs.phone}
             onChange={handleChange}
           />
         </label>
         <Button onClick={handleClick} />
       </>
      ): null
      }
      </fieldset>
    </>
  );
}

export { FormPersonalSection };
