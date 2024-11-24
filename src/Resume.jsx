import './Resume.css'
import './ResumeGeneralSection'
import { ResumeGeneralSection } from './ResumeGeneralSection'


function Resume({text}){

    return(
      <>
      <section className='resume'>
        <ResumeGeneralSection text={text}/>
      </section>
      </>
    )
}

export{Resume}