import './ResumeEducation.css'

function ResumeEducation({value, heading = "Education"}){
    return(
        <>
        <section className='education'>
        <h2>{heading}</h2>
        <div className='schoolGeneral'>
        <div className='schoolDetails'>
        <div className='school'>{value.school}</div>
        <div className='degree'>{value.degree}</div>
        </div>
        <div className='schoolDate'>
        <div className='schoolStartDate'>{value.schoolStartDate} –</div>
        <div className='schoolEndDate'>{value.schoolEndDate}</div>
        </div>
        </div>
        </section>
        </>
    )
}
export {ResumeEducation}