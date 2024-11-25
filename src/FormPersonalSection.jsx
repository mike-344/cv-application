import { useState } from "react";
import { Button } from "./Button";

function FormPersonalSection({ personalFormData, handleChange, handleClick }) {
    
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
             value={personalFormData.name}
             onChange={handleChange}
           />
         </label>
 
         <label>Email:
           <input
             type="text"
             name="email"
             id=""
             value={personalFormData.email}
             onChange={handleChange}
           />
         </label>
 
         <label>Phone:
           <input
             type="text"
             name="phone"
             id=""
             value={personalFormData.phone}
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
