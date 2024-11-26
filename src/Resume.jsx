import './Resume.css'

function Resume({educationDataList}){

    const educationList  = educationDataList.map((education) =>{
        let uuid = crypto.randomUUID();
        return(
        <div className='educationInfoResume' key={uuid}>
        <div>{education.school}</div>
        <div>{education.degree}</div>
        <div>{education.schoolDateFrom}</div>
        <div>{education.schoolDateTo}</div>
        </div>
        )
    })

    return(
        <div>
            <h2>Education</h2>
            {educationList}
        </div>
    )
    
}

export{Resume}