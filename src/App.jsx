import { useState } from 'react';
import './reset.css'
import PersonalForm from './components/PersonalForm'
import EducationSection from './components/EducationSection';
import WorkSection from './components/WorkSection';
import SkillsForm from './components/SkillsForm';
import AchievementsSection from './components/AchievementsSection';

function App() {

  const [personalData, setPersonalData] = useState({
    fullName: 'Full Name',
    about: 'Similar to resume summary - about me is an introduction that provides a brief snapshot of your professional background, relevant skills, and key accomplishments.',
    phone: '123-456-7890',
    email: 'person@gmail.com',
    linkedin: 'https://linkedin.com/person'
  });

  const [educationData, setEducationData] = useState([
    {
      id: crypto.randomUUID(),
      school: 'School Name',
      degree: 'Masters Degree in ...',
      schoolStartDate: 'Jun/2010',
      schoolEndDate: 'March/2012',
      schoolLocation: 'Location',
    },
    {
      id: crypto.randomUUID(),
      school: 'School Name',
      degree: 'Bachelors Degree in ...',
      schoolStartDate: 'Jun/2002',
      schoolEndDate: 'March/2006',
      schoolLocation: 'Location',
    }
  ])

  const [workData, setWorkData] = useState([
    {
      id: crypto.randomUUID(),
      companyName: 'Company Name',
      position: 'Indicate your role/position in the company',
      jobDescription: 'Including relevant work experience on your resume is important because it shows hiring managers you have understood the requirements of the job.',
      jobStartDate: 'Jan/2009',
      jobEndDate: 'May/2013',
      jobLocation: 'Location'
    },
    {
      id: crypto.randomUUID(),
      companyName: 'Company Name',
      position: 'Indicate your role/position in the company',
      jobDescription: 'Including relevant work experience on your resume is important because it shows hiring managers you have understood the requirements of the job.',
      jobStartDate: 'Jan/2009',
      jobEndDate: 'May/2013',
      jobLocation: 'Location'
    }
  ])

  const [skillsData, setSkillsData] = useState([
    'Time management', 'Communication', 'Critical thinking', 'Analytics', 'Seo', 'Project management'
  ])

  const [achievementsData, setAchievementsData] = useState([
    {
      id: crypto.randomUUID(),
      achievement: 'Your achievement',
      achievementLocation: 'Location',
      achievementDate: 'Date'
    },
    {
      id: crypto.randomUUID(),
      achievement: 'Your achievement',
      achievementLocation: 'Location',
      achievementDate: 'Date'
    }
  ])

  const handleEditEducation = () => {
    setEducationData(currentData => {
      return [...currentData]
    })
  }

  const handleDeleteEducation = data => {
    setEducationData(data)
  }

  const handleEditWork = () => {
    setWorkData(currentData => {
      return [...currentData]
    })
  }

  const handleDeleteWork = data => {
    setWorkData(data)
  }

  const handleSubmitSkills = (data) => {
    const convertedData = data.split(', ')
    setSkillsData(convertedData)
  }

  const handleEditAchievement = () => {
    setAchievementsData(currentData => {
      return [...currentData]
    })
  }

  const handleDeleteAchievement = data => {
    setAchievementsData(data)
  }

  const handleSubmit = form => {
    const formData = new FormData(form)
    const data = Object.fromEntries(formData)

    if (form.id === 'personal-form') {
      setPersonalData(data)
    } else if (form.id === 'education-form') {
      setEducationData(currentData => {
        return [...currentData, { id: crypto.randomUUID(), ...data},]
      })
    } else if (form.id === 'work-form') {
      setWorkData(currentData => {
        return [...currentData, { id: crypto.randomUUID(), ...data},]
      })
    } else {
      setAchievementsData(currentData => {
        return [...currentData, { id: crypto.randomUUID(), ...data},]
      })
    }
  }

  return (
    <>
      <aside>
        <PersonalForm onSubmit={handleSubmit} data={personalData}/>
        <EducationSection onSubmit={handleSubmit} data={educationData} handleEdit={handleEditEducation} handleDelete={handleDeleteEducation}/>
        <WorkSection onSubmit={handleSubmit} data={workData} handleEdit={handleEditWork} handleDelete={handleDeleteWork}/>
        <SkillsForm onSubmit={handleSubmitSkills} data={skillsData}/>
        <AchievementsSection onSubmit={handleSubmit} data={achievementsData} handleEdit={handleEditAchievement} handleDelete={handleDeleteAchievement}/>
      </aside>
      <main>
        <div className="cv-display">
          <section className="cv-header">
            <h1>{personalData.fullName.toUpperCase()}</h1>
          </section>
          <section className="cv-about">
            <div className="cv-about-text">
              <h2>ABOUT ME</h2>
              <p>{personalData.about}</p>
            </div>
            <div className="contact-icons">
                <div className="contact-icon">
                  <i className="fa-solid fa-mobile-screen-button"></i>
                  <p>{personalData.phone}</p>
                </div>
                <div className="contact-icon">
                  <i className="fa-regular fa-envelope"></i>
                  <p>{personalData.email}</p>
                </div>
                <div className="contact-icon">
                <i className="fa-brands fa-linkedin"></i>
                  <p>{personalData.linkedin}</p>
                </div>
              </div>
          </section>
          <section className='cv-education'>
            <h2 className='section-title'>EDUCATION</h2>
            <div className="section-item-container">
              {educationData.map(item => {
                return (
                  <div key={item.id} className="section-item">
                    <h3>{item.degree}</h3>
                    <p>{item.schoolStartDate}-{item.schoolEndDate}</p>
                    <ul>
                      <li>{item.school}</li>
                      <li>{item.schoolLocation}</li>
                    </ul>
                  </div>
                )
              })}
              <div className="section-item">
                <h2>SKILLS</h2>
                <ul>
                  {skillsData.map(item => {
                    return <li key={item}>{item}</li>
                  })}
                </ul>
              </div>
              <div className="section-item">
                <h2>ACHIEVEMENTS</h2>
                {achievementsData.map(item => {
                  return (
                    <div key={item.id} className="achievement-item">
                      <h3>{item.achievement}</h3>
                      <div>
                        <p>{item.achievementLocation}</p>
                        <p>{item.achievementDate}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
          <section className="cv-work">
            <h2 className='section-title'>WORK EXPERIENCE</h2>
            {workData.map(item => {
              return (
                <div key={item.id} className="section-item company-item">
                  <div className="company-heading">
                    <div className="company-heading-right">
                      <h3>{item.companyName}</h3>
                      <p>{item.position}</p>
                    </div>
                    <div className="company-heading-left">
                      <p>{item.jobLocation}</p>
                      <p>{item.jobStartDate}-{item.jobEndDate}</p>
                    </div>
                  </div>
                  <p className="company-text">
                    {item.jobDescription}
                  </p>
                </div>
              )
            })}
          </section>
        </div>
      </main>
    </>
  )
}

export default App
