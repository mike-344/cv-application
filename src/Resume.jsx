import './Resume.css'
import { ResumeExperience } from './ResumeExperience'
import { ResumeEducation } from './ResumeEducation'
import { ResumeGeneral } from './ResumeGeneral'

function Resume({value}){

    return(
      <>
      <div className='resume'>
      <ResumeGeneral value={value}/>
      <ResumeEducation value={value}/>
      <ResumeExperience value={value}/>
      </div>
      </>
    )
}

export{Resume}