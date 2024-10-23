import CVEducation from "./CVEducation"
import CVPersonal from "./CVPersonal"
import CVWork from "./CVWork"

const CV = ({ personalData, educationData, workData, skillsData, achievementsData }) => {
    return (
        <main className="main">
            <div className="cv-display">
                <CVPersonal data={personalData} />
                <CVEducation educationData={educationData} skillsData={skillsData} achievementsData={achievementsData} />
                <CVWork data={workData} />
            </div>
        </main>
    )
}

export default CV