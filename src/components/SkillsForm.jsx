import { useState } from "react"

const SkillsForm = ({ onSubmit, data }) => {
    const [formActive, setFormActive] = useState(false)
    
    const handleSubmit = e => {
        e.preventDefault()

        onSubmit(data)
    }

    const handleChange = e => {
        data = e.target.value
        console.log(data)
    }

    return (
        <div className={`form-container ${formActive && 'active'}`}>
            <div className="form-title">
                <h2>Skills</h2>
                <i className={`fa-solid fa-angle-down ${formActive && 'active'}`} onClick={() => setFormActive(!formActive)}></i>
            </div>
            <div className="form-items-wrapper">
                <form className="form" id="skills-form" onSubmit={handleSubmit}>
                    <div className="form-input-field">
                        <label htmlFor="skills">Skills</label>
                        <textarea id='skills' name="skills" placeholder={data} onChange={handleChange}/>
                    </div>
                    <div className="buttons-container">
                        <button className="btn save">Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SkillsForm