const PersonalForm = ({ onSubmit, data, handleEdit }) => {

    const handleSubmit = e => {
        e.preventDefault();
        
        onSubmit(e.target)
    }
    
    return (
        <div className="form-container">
            <h2>Personal Information</h2>
            <form className='form form-personal' id="personal-form" onSubmit={handleSubmit}>
                <div className="form-input-field">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id='full-name' name="fullName" placeholder={data.fullName}/>
                </div>
                <div className="form-input-field">
                    <label htmlFor="about">About Me</label>
                    <textarea id="about" name="about" placeholder={data.about}></textarea>
                </div>
                <div className="form-input-field">
                    <label htmlFor="phone">Phone</label>
                    <input type="tel" id='phone' name="phone" placeholder={data.phone}/>
                </div>
                <div className="form-input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' name="email" placeholder={data.email}/>
                </div>
                <div className="form-input-field">
                    <label htmlFor="linkedin">LinkedIn</label>
                    <input type="url" id='linkedin' name="linkedin" placeholder={data.linkedin}/>
                </div>
                <div className="buttons-container">
                    <button className="btn save">Save</button>
                </div>
            </form>
        </div>
    )
}

export default PersonalForm