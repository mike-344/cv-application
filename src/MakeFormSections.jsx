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

  function makeGeneralSection() {
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
    const generalFields = makeInputFields(general);
    return (
      <fieldset>
        <legend>General</legend>
        {generalFields}
      </fieldset>
    );
  }

  function makeEducationSection() {
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

    const educationFields = makeInputFields(education);

    return (
      <fieldset>
        <legend>Education</legend>
        {educationFields}
      </fieldset>
    );
  }

  function makeExperienceSection() {
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
    const experienceFields = makeInputFields(experience);
    return (
      <fieldset>
        <legend>Experience</legend>
        {experienceFields}
      </fieldset>
    );
  }

  

  return {makeGeneralSection, makeEducationSection, makeExperienceSection}
}

export { MakeFormSections };
