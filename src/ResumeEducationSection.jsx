function ResumeEducationSection({educationText}){

    return(
        <>
        <div>
        <div className="school">{educationText.school}</div>
        <div className="degree">{educationText.degree}</div>
        <div className="schoolDateFrom">{educationText.schoolDateFrom}</div>
        <div className="schoolDateTo">{educationText.schoolDateTo}</div>
        </div>
        </>
    )
}

function ResumeEducationList({educationText}){
    return(
        <>
        <ResumeEducationSection />
        </>
    )

   
}

export {ResumeEducationSection}