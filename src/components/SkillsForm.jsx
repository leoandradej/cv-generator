import { useEffect, useState } from "react"

const SkillsForm = ({ onSubmit, data }) => {
    const [formActive, setFormActive] = useState(false)
    const [formState, setFormState] = useState('')

    useEffect(() => {
        setFormState(data.join(', '))
    }, [data])

    const handleChange = e => {
        setFormState(e.target.value)
    }
    
    const handleSubmit = e => {
        e.preventDefault();
        const skillsArray = formState
            .split(',')
            .map(skill => skill.trim())
            .filter(skill => skill.length > 0)

        onSubmit({
            formId: 'skills',
            newData: skillsArray
        })
    }

    const clearForm = () => {
        setFormState('')

        onSubmit({
            formId: 'skills',
            newData: []
        })
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
                        <label htmlFor="skills"><span>Insert a comma and a space after each skill.</span></label>
                        <textarea
                            id='skills'
                            name="skills"
                            value={formState}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="buttons-container">
                        <button className="btn save">Save</button>
                        <button
                            className="btn clear"
                            type="button"
                            onClick={clearForm}
                        >
                            Clear
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SkillsForm