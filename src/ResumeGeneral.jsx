function ResumeGeneral({value}){
    return(
        <>
          
        <div className='general'>
        <div className='name'>{value.name}</div>
        <div className='contact'>
        <div className='email'>{value.email}</div>
        <div>●</div>
        <div className='phone'>{value.phone}</div>
        </div>
        </div>
       
        </>
    )
}

export {ResumeGeneral}