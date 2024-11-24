import { useState } from "react"

/*
"Personal Information" section of the resume display.
Take text object from Resume parent and read/display values in personal section
of resume.
*/
function ResumePersonalSection({personalText}){
  
   

return(
    <>
    <div className="personalInformation">
    <div className="name">{personalText.name}</div>
    <div className="contactInformation">
    <div className="email">{personalText.email}</div>
    <div className="phone">{personalText.phone}</div>
    </div>
    </div>
    </>
)
}

export{ResumePersonalSection}