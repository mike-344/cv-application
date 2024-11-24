
//working on it, basing off general form
function FormEducationSection(){
    const [closed, setClosed] = useState(true);

    const handleToggle = () => {
        if (closed) {
          setClosed(false);
        } else {
          setClosed(true);
        }
      };
    

return (
    <fieldset>
         <legend onClick={handleToggle}>Education</legend>
        <InputFields
          inp={inp}
          handleChange={handleChange}
          isClosed={closed}
          handleClick={handleClick}
        />
    </fieldset>
)
}

function InputFields({ inp, handleChange, isClosed, handleClick }) {
    if (!isClosed) {
      return (
        <>
          <label>School:
            <input
              type="text"
              name="school"
              id=""
              value={inp.school}
              onChange={handleChange}
            />
          </label>
  
          <label>Degree:
            <input
              type="text"
              name="degree"
              id=""
              value={inp.degree}
              onChange={handleChange}
            />
          </label>
  
          <label>From:
            <input
              type="date"
              name="schoolDateFrom"
              id=""
              value={inp.schoolDateFrom}
              onChange={handleChange}
            />
          </label>
          <label>to:
            <input
              type="date"
              name="schoolDateTo"
              id=""
              value={inp.schoolDateTo}
              onChange={handleChange}
            />
          </label>
          <Button onClick={handleClick} />
        </>
      );
    }
  }

export {FormEducationSection}