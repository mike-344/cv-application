import { InputElement } from "./InputElement";

function MakeFormSections() {
  function makeInputFields(arr) {
    return arr.map((field) => {
      return (
        <InputElement
          key={field.id}
          labelText={field.labelText}
          inputType={field.inputType}
          labelFor={field.labelFor}
        />
      );
    });
  }
  function makeSection(sectiontitle, fields){
    const sectionFields = makeInputFields(fields)
    return (
      <fieldset>
        <legend>{sectiontitle}</legend>
        {sectionFields}
      </fieldset>
    );
  }

    const general = [
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
    ];
   
    const education = [
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
    ];

    const experience = [
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
    ];
  


  return {makeGeneralSection: () => makeSection("General", general),
     makeEducationSection: () => makeSection("Education", education),
      makeExperienceSection: () => makeSection("Experience", experience)}
}

export { MakeFormSections };
