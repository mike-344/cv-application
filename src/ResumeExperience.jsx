
function ResumeExperience({value, heading = "Experience"}){
    return(
        <>
        <div className='experience'>
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
        </div>
        
        </>
    )
}

export {ResumeExperience}