import { useState } from "react";
import { Button } from "./Button";

function FormGeneralSection({ inp, handleChange, handleClick }) {
  const [closed, setClosed] = useState(true);

  const handleToggle = () => {
    if (closed) {
      setClosed(false);
    } else {
      setClosed(true);
    }
  };

  return (
    <>
      <fieldset>
        <legend onClick={handleToggle}>Personal Information</legend>
        <InputFields
          inp={inp}
          handleChange={handleChange}
          isClosed={closed}
          handleClick={handleClick}
        />
      </fieldset>
    </>
  );
}

function InputFields({ inp, handleChange, isClosed, handleClick }) {
  if (!isClosed) {
    return (
      <>
        <label>Name:
          <input
            type="text"
            name="name"
            id=""
            value={inp.name}
            onChange={handleChange}
          />
        </label>

        <label>Email:
          <input
            type="text"
            name="email"
            id=""
            value={inp.email}
            onChange={handleChange}
          />
        </label>

        <label>Phone:
          <input
            type="text"
            name="phone"
            id=""
            value={inp.phone}
            onChange={handleChange}
          />
        </label>
        <Button onClick={handleClick} />
      </>
    );
  }
}

export { FormGeneralSection };
