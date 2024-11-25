//Updates personalText state variable defined in App.jsx
function updatePersonalText (personalFormData, personalText, setPersonalText) {
    setPersonalText({
        ...personalText,
        name: personalFormData.name,
        email: personalFormData.email,
        phone: personalFormData.phone,
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