import { useState } from "react"

const SkillsForm = ({ onSubmit, data, handleEdit }) => {
    const [formActive, setFormActive] = useState(false)
    
    const handleSubmit = e => {
        e.preventDefault()

        onSubmit(e.target)
    }

    const handleChange = e => {
        data = e.target.value
        console.log(data)
        handleEdit('skills', data)
    }

    return (
        <div className={`form-container ${formActive && 'active'}`}>
            <div className="form-title">
                <h2>Skills</h2>
                <i className={`fa-solid fa-angle-down ${formActive && 'active'}`} onClick={() => setFormActive(!formActive)}></i>
            </div>
            <div className="form-items-wrapper">
                <form className="form" id="skills" onSubmit={handleSubmit}>
                    <div className="form-input-field">
                        <label htmlFor="skills">Skills</label>
                        <textarea id='skills' name="skills" value={data.join(', ')} onChange={handleChange}/>
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