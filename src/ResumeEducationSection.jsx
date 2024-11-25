function ResumeEducationSection({educationText}){

    return(
        <>
        <section>
        <div className="school">{educationText.school}</div>
        <div className="degree">{educationText.degree}</div>
        <div className="schoolDateFrom">{educationText.schoolDateFrom}</div>
        <div className="schoolDateTo">{educationText.schoolDateTo}</div>
        </section>
        </>
    )
}

function ResumeEducationList({educationText}){

   
}

export {ResumeEducationSection}