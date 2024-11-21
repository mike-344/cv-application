function Resume({value}){

    return(
        <>
        <div>{value.name}</div>
        <div>{value.email}</div>
        <div>{value.phone}</div>

        <h2>Education</h2>
        <div>{value.school}</div>
        <div>{value.degree}</div>
        <div>{value.schoolStartDate}</div>
        <div>{value.schoolEndDate}</div>

        <h2>Experience</h2>
        <div>{value.company}</div>
        <div>{value.title}</div>
        <div>{value.jobStartDate}</div>
        <div>{value.jobEndDate}</div>
        <div>{value.responsibilities}</div>
        </>
    )
}

export{Resume}