
//To clear input fields on form submission or close
  function clearInputFields(formInput, setFormInput){
    let copiedInput = {...formInput}
    for(const prop in copiedInput){
        copiedInput[prop] = ""
    }
    
      setFormInput( copiedInput)
  
  }
  
  //Add new education object to the array, taking values from the form input on submission
  function addEducationToList(educationListData, setEducationListData, educationFormInput){
    setEducationListData([...educationListData, {
      school: educationFormInput.school,
      degree: educationFormInput.degree,
      schoolDateFrom: educationFormInput.schoolDateFrom,
      schoolDateTo: educationFormInput.schoolDateTo,
      id: crypto.randomUUID(),
    },
  ])
  }

  /*Store input data when user submits field, clear input fields, and re-render
  Consider closing the input field here too*/
  function displayEducation(educationListData, setEducationListData, educationFormInput, setEducationFormInput){
    addEducationToList(educationListData, setEducationListData, educationFormInput);
    clearInputFields(educationFormInput, setEducationFormInput);
  }
  
  
  function removeEducationFromList(){
    
  }

  
  export{clearInputFields, addEducationToList, displayEducation}