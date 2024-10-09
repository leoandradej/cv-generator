const CV = () => {
    return (
        <main>
            <div className="cv-display">
            <section className="cv-header">
                <h1>{personalData.fullName}</h1>
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
                    <div className="section-item">
                        <h3>{educationData.degree}</h3>
                        <p>{educationData.schoolStartDate}-{educationData.schoolEndDate}</p>
                        <ul>
                            <li>{educationData.school}</li>
                            <li>{educationData.schoolLocation}</li>
                        </ul>
                    </div>
                    <div className="section-item">
                        <h2>SKILLS</h2>
                        <ul>
                            {educationData.skills.split(',').map(item => {
                                return <li key={item}>{item}</li>
                            })}
                        </ul>
                    </div>
                    <div className="section-item">
                        <h2>ACHIEVEMENTS</h2>
                        <div className="achievement-item">
                            <h3>{educationData.achievement}</h3>
                            <div>
                                <p>{educationData.achievementLocation}</p>
                                <p>{educationData.achievementDate}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="cv-work">
                <h2 className='section-title'>WORK EXPERIENCE</h2>
                <div className="section-item company-item">
                    <div className="company-heading">
                        <div className="company-heading-right">
                            <h3>{workData.companyName}</h3>
                            <p>{workData.position}</p>
                        </div>
                        <div className="company-heading-left">
                            <p>{workData.jobLocation}</p>
                            <p>{workData.jobStartDate}-{workData.jobEndDate}</p>
                        </div>
                    </div>
                    <p className="company-text">
                        {workData.jobDescription}
                    </p>
                </div>
            </section>
            </div>
        </main>
    )
}

export default CV