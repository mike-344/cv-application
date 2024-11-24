//Updates personalText state variable defined in App.jsx
function updatePersonalText (personalInputs, personalText, setPersonalText) {
    setPersonalText({
        ...personalText,
        name: personalInputs.name,
        email: personalInputs.email,
        phone: personalInputs.phone,
    }) 
  }

  export {updatePersonalText}