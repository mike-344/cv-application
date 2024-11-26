import './Resume.css'

function Resume({educationListData}){


    const educationList  = educationListData.map((education) =>{
        return(
        <div className='educationInfoResume' key={education.id}>
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