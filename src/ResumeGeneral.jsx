import './ResumeGeneral.css'
function ResumeGeneral({value}){
    return(
        <>
          
        <section className='general'>
        <div className='name'>{value.name}</div>
        <div className='contact'>
        <div className='email'>{value.email}</div>
        <div>●</div>
        <div className='phone'>{value.phone}</div>
        </div>
        </section> 
       
        </>
    )
}

export {ResumeGeneral}