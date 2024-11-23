import './ExperienceResume.css'
function ExperienceResume({value, heading = "Experience"}){
    return(
        <>
        <section className='experience'>
        <h2>{heading}</h2>
        <div className='jobGeneral'>
        <div className='jobDetails'>
        <div className='company'>{value.company}</div>
        <div className='title'>{value.title}</div>
        </div>
        <div className='jobDateDetails'>
        <div className='jobStartDate'>{value.jobStartDate} –</div>
        <div className='jobEndDate'>{value.jobEndDate}</div>
        </div>
        </div>
        <div className='responsibilities'>{value.responsibilities}</div>
        </section>
        
        </>
    )
}

export {ExperienceResume}