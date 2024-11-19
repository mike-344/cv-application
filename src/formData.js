 const formData = [
    {
    title: "General",
    id: crypto.randomUUID(),
    fields: [
    {
      labelText: "Name: ",
      labelFor: "name",
      id: crypto.randomUUID(),
    },
    {
      labelText: "Email ",
      labelFor: "email",
      id: crypto.randomUUID(),
    },
    {
      labelText: "Phone ",
      inputType: "tel",
      labelFor: "phone",
      id: crypto.randomUUID(),
    },
]
},
 
  {
    title: "Education",
    id: crypto.randomUUID(),
    fields:[
    {
      labelText: "School: ",
      inputType: "text",
      labelFor: "school",
      id: crypto.randomUUID(),
    },
    {
      labelText: "Degree: ",
      inputType: "text",
      labelFor: "degree",
      id: crypto.randomUUID(),
    },
    {
      labelText: "Start date: ",
      inputType: "date",
      labelFor: "startDate",
      id: crypto.randomUUID(),
    },
    {
      labelText: "End date: ",
      inputType: "date",
      labelFor: "endDate",
      id: crypto.randomUUID(),
    },
]
},

  {
    title: "Experience",
    id: crypto.randomUUID(),
    fields:[
    {
      labelText: "Company: ",
      inputType: "text",
      labelFor: "company",
      id: crypto.randomUUID(),
    },
    {
      labelText: "Position title: ",
      inputType: "text",
      labelFor: "positionTitle",
      id: crypto.randomUUID(),
    },

    {
      labelText: "Start date: ",
      inputType: "date",
      labelFor: "startDate",
      id: crypto.randomUUID(),
    },
    {
      labelText: "End date: ",
      inputType: "date",
      labelFor: "endDate",
      id: crypto.randomUUID(),
    },
]
},
]

export {formData}