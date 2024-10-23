const PersonalForm = ({ onSubmit, data, handleEdit}) => {
    const handleChange = e => {
        data[e.target.name] = e.target.value
        handleEdit('personal')
    }

    const handleSubmit = e => {
        e.preventDefault();
        
        onSubmit(e.target)
    }

    const clearForm = () => {
        document.querySelector('#personal').reset()
    }
    
    return (
        <div className="form-container">
            <h2>Personal Information</h2>
            <form className='form' id="personal" onSubmit={handleSubmit}>
                <div className="form-input-field">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id='full-name' name="fullName" onChange={handleChange}/>
                </div>
                <div className="form-input-field">
                    <label htmlFor="about">About Me</label>
                    <textarea id="about" name="about" onChange={handleChange}></textarea>
                </div>
                <div className="form-input-field">
                    <label htmlFor="phone">Phone</label>
                    <input type="tel" id='phone' name="phone" onChange={handleChange}/>
                </div>
                <div className="form-input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' name="email" onChange={handleChange}/>
                </div>
                <div className="form-input-field">
                    <label htmlFor="linkedin">LinkedIn</label>
                    <input type="text" id='linkedin' name="linkedin" onChange={handleChange}/>
                </div>
                <div className="buttons-container">
                    <button className="btn save">Save</button>
                    <button className="btn clear" onClick={() => clearForm()}>Clear</button>
                </div>
            </form>
        </div>
    )
}

export default PersonalForm