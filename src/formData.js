 const formData = [
    {
    title: "General",
    id: "general",
    fields: [
    {
      labelText: "Name: ",
      labelFor: "name",
      id: "name",
      name: "name",
    },
    {
      labelText: "Email ",
      labelFor: "email",
      id: "email",
      name: "email",

    },
    {
      labelText: "Phone ",
      inputType: "tel",
      labelFor: "phone",
      id: "phone",
      name: "phone",
    },
]
},
 
  {
    title: "Education",
    id: "education",
    fields:[
    {
      labelText: "School: ",
      inputType: "text",
      labelFor: "school",
      id: "school",
      name: "school",
    },
    {
      labelText: "Degree: ",
      inputType: "text",
      labelFor: "degree",
      id: "degree",
      name: "degree",
    },
    {
      labelText: "Start date: ",
      inputType: "date",
      labelFor: "schoolStartDate",
      id: "schoolStartDate",
      name: "schoolStartDate",
    },
    {
      labelText: "End date: ",
      inputType: "date",
      labelFor: "schoolEndDate",
      id: "schoolEndDate",
      name: "schoolEndDate"
    },
]
},

  {
    title: "Experience",
    id: "experience",
    fields:[
    {
      labelText: "Company: ",
      inputType: "text",
      labelFor: "company",
      id: "company",
      name: "company",
    },
    {
      labelText: "Position title: ",
      inputType: "text",
      labelFor: "positionTitle",
      id: "positionTitle",
      name: "positionTitle"
    },

    {
      labelText: "Start date: ",
      inputType: "date",
      labelFor: "startDate",
      id: "jobStartDate",
      name: "jobStartDate",
    },
    {
      labelText: "End date: ",
      inputType: "date",
      labelFor: "endDate",
      id: "jobEndDate",
      name: "jobEndDate",
    },
]
},
]

export {formData}