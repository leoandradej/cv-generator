import { personal } from '../demo-data.json'
import PersonalItem from './PersonalItem'

const CVPersonal = ({ data }) => {
    return (
        <section className="cv-personal">
            {Object.keys(data).length === 0 && (<PersonalItem {...personal} />)}
            {Object.keys(data).length > 0 && (<PersonalItem {...data} />)}
        </section>
        
    )
}

export default CVPersonal