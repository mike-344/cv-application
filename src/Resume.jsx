import './Resume.css'
import './ResumePersonalSection'
import { ResumePersonalSection } from './ResumePersonalSection'

//Receive text object from App and pass down to children components
function Resume({personalText}){

    return(
      <>
      <section className='resume'>
        <ResumePersonalSection personalText={personalText}/>
      </section>
      </>
    )
}

export{Resume}