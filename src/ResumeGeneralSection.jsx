import { useState } from "react"


function ResumeGeneralSection({text}){
  
   
  
return(
    <>
    <div className="personalInformation">
    <div className="name">{text.name}</div>
    <div className="contactInformation">
    <div className="email">{text.email}</div>
    <div className="phone">{text.phone}</div>
    </div>
    </div>
    </>
)
}

export{ResumeGeneralSection}