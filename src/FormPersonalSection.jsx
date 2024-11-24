import { useState } from "react";
import { Button } from "./Button";

/*Takes inp obj and change handler to control/update form input values, click handler submits form
and updates text display values*/
function FormPersonalSection({ personalInputs, handleChange, handleClick }) {
  //Initialize closed state to toggle input fields when legend is clicked  
  const [closed, setClosed] = useState(true);

  //Toggle to display input fields
  const handleToggle = () => {
    if (closed) {
      setClosed(false);
    } else {
      setClosed(true);
    }
  };

  /*pass the inp, click, and change handlers down to InputFields.
  Set Legend to toggle input fields on click */
  return (
    <>
      <fieldset>
        <legend onClick={handleToggle}>Personal Information</legend>
        <InputFields
          personalInputs={personalInputs}
          handleChange={handleChange}
          isClosed={closed}
          handleClick={handleClick}
        />
      </fieldset>
    </>
  );
}

//input fields display when isClosed is false
//Reads values of inp obj and updates values with change handler
//click handler updates the resume text to match input values
function InputFields({ personalInputs, handleChange, isClosed, handleClick }) {
  if (!isClosed) {
    return (
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
    );
  }
}

export { FormPersonalSection };
