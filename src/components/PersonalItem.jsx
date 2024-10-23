const PersonalItem = ({ fullName, about, phone, email, linkedin }) => {
    return (
        <>
            <div className="cv-header">
                <h1>{fullName.toUpperCase()}</h1>
            </div>
            <div className="cv-about">
                <div className="cv-about-text">
                    <h2>ABOUT ME</h2>
                    <p>{about}</p>
                </div>
                <div className="contact-icons">
                    <div className="contact-icon">
                        <i className="fa-solid fa-mobile-screen-button"></i>
                        <p>{phone}</p>
                    </div>
                    <div className="contact-icon">
                        <i className="fa-regular fa-envelope"></i>
                        <p>{email}</p>
                    </div>
                    <div className="contact-icon">
                        <i className="fa-brands fa-linkedin"></i>
                        <p>{linkedin}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PersonalItem