import './Resume.css'
function Resume({value}){

    return(
        <>
        <div className='resume'>
        <div className='general'>
        <div className='name'>{value.name}</div>
        <div className='contact'>
        <div className='email'>{value.email}</div>
        <div>●</div>
        <div className='phone'>{value.phone}</div>
        </div>
        </div>


        <div className='education'>
        <h2>Education</h2>
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
        </div>

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
        </div>
        </>
    )
}

export{Resume}