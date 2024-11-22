function ResumeExperience({value}){
    return(
        <>
        <div className='experience'>
        <h2>Experience</h2>
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