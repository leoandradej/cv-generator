import { education, skills, achievements } from '../demo-data.json'
import AchievementsItem from './AchievementsItem'
import EducationItem from './EducationItem'

const CVEducation = ({ educationData, skillsData, achievementsData }) => {
    return (
        <section className='cv-education'>
            <h2 className='section-title'>EDUCATION</h2>
            <div className="section-item-container">
                {educationData.length === 0 && education.map(data => {
                    return (
                        <EducationItem {...data} key={data.id} />
                    )
                })}
                {educationData.length > 0 && educationData.map(data => {
                    return (
                        <EducationItem {...data} key={data.id} />
                    )
                })}
                <div className="section-item">
                <h2>SKILLS</h2>
                <ul>
                    {skillsData.length === 0 && skills.map(item => {
                        return <li key={item}>{item}</li>
                    })}
                    {skillsData.length > 0 && skillsData.map(item => {
                        return <li key={item}>{item}</li>
                    })}
                </ul>
                </div>
                <div className="section-item">
                <h2>ACHIEVEMENTS</h2>
                {achievementsData.length === 0 && achievements.map(data => {
                    return (
                        <AchievementsItem {...data} key={data.id} />
                    )
                })}
                {achievementsData.length > 0 && achievementsData.map(data => {
                    return (
                        <AchievementsItem {...data} key={data.id} />
                    )
                })}
                </div>
            </div>
        </section>
    )
}

export default CVEducation