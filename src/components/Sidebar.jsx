import AchievementsSection from "./AchievementsSection"
import EducationSection from "./EducationSection"
import PersonalForm from "./PersonalForm"
import SkillsForm from "./SkillsForm"
import WorkSection from "./WorkSection"

const Sidebar = ({ 
        onSubmit,
        personalData,
        educationData,
        workData,
        skillsData,
        achievementsData,
        handleEdit,
        handleDelete }) => {
    return (
        <aside className="sidebar">
            <PersonalForm onSubmit={onSubmit} data={personalData}/>
            <EducationSection onSubmit={onSubmit} data={educationData} handleEdit={handleEdit} handleDelete={handleDelete} />
            <WorkSection onSubmit={onSubmit} data={workData} handleEdit={handleEdit} handleDelete={handleDelete} />
            <SkillsForm onSubmit={onSubmit} data={skillsData} />
            <AchievementsSection onSubmit={onSubmit} data={achievementsData} handleEdit={handleEdit} handleDelete={handleDelete} />
        </aside>
    )
}

export default Sidebar