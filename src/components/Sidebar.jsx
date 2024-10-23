import AchievementsSection from "./AchievementsSection"
import EducationSection from "./EducationSection"
import PersonalForm from "./PersonalForm"
import SkillsForm from "./SkillsForm"
import WorkSection from "./WorkSection"

const Sidebar = ({ onSubmit, handleSubmitSkills, personalData, educationData, workData, skillsData, achievementsData, handleEditPersonal, handleEditSkills, handleEdit, handleDelete }) => {
    return (
        <aside className="sidebar">
            <PersonalForm onSubmit={onSubmit} data={personalData} handleEdit={handleEditPersonal} />
            <EducationSection onSubmit={onSubmit} data={educationData} handleEdit={handleEdit} handleDelete={handleDelete} />
            <WorkSection onSubmit={onSubmit} data={workData} handleEdit={handleEdit} handleDelete={handleDelete} />
            <SkillsForm onSubmit={handleSubmitSkills} data={skillsData} handleEdit={handleEditSkills} />
            <AchievementsSection onSubmit={onSubmit} data={achievementsData} handleEdit={handleEdit} handleDelete={handleDelete} />
        </aside>
    )
}

export default Sidebar