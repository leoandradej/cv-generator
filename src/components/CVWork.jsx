import { work } from '../demo-data.json'
import WorkItem from './WorkItem'

const CVWork = ({ data }) => {
    return (
        <section className="cv-work">
            <h2 className='section-title'>WORK EXPERIENCE</h2>
            {data.length === 0 && work.map(data => {
              return (
                <WorkItem {...data} key={data.id} />
              )
            })}
            {data.length > 0 && data.map(data => {
              return (
                <WorkItem {...data} key={data.id} />
              )
            })}
          </section>
    )
}

export default CVWork