import './Resume.css'
import { ExperienceResume } from './ExperienceResume'
import { EducationResume } from './EducationResume'
import { GeneralResume } from './GeneralResume'


//Resume component
function Resume({value}){

    return(
      <>
      <div className='resume'>
      <GeneralResume value={value}/>
      <EducationResume value={value}/>
      <ExperienceResume value={value}/>
      </div>
      </>
    )
}

export{Resume}