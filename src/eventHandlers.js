//Updates personalText state variable defined in App.jsx
function updatePersonalText (personalInputs, personalText, setPersonalText) {
    setPersonalText({
        ...personalText,
        name: personalInputs.name,
        email: personalInputs.email,
        phone: personalInputs.phone,
    }) 
  }



function updateEducationText(educationInputs, educationText, setEducationText){
    setEducationText({
        ...educationText,
        school: educationInputs.school,
        degree: educationInputs.degree,
        schoolDateFrom: educationInputs.schoolDateFrom,
        schoolDateTo: educationInputs.schoolDateTo,
    }) 
}

  export {updatePersonalText, updateEducationText}