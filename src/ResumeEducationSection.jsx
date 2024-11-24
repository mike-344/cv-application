function ResumeEducationSection({text}){

    return(
        <>
       
        <div className="school">{text.school}</div>
        <div className="degree">{text.degree}</div>
        <div className="schoolDateFrom">{text.schoolDateFrom}</div>
        <div className="schoolDateTo">{text.schoolDateTo}</div>
        
        </>
    )
}

export {ResumeEducationSection}