import { useEffect, useState } from "react"

const PersonalForm = ({ onSubmit, data }) => {
    const [formState, setFormState] = useState({
        fullName: '',
        about: '',
        phone: '',
        email: '',
        linkedin: ''
    })

    useEffect(() => {
        setFormState(data)
    }, [data])
    
    const handleChange = e => {
        const { name, value } = e.target
        setFormState(prev => ({ ...prev, [name]: value}))
    }

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit({
            formId: 'personal',
            newData: formState
        })
    }

    const clearForm = () => {
        setFormState({
            fullName: '',
            about: '',
            phone: '',
            email: '',
            linkedin: ''
        })

        onSubmit({
            formId: 'personal',
            newData: {}
        })
    }
    
    return (
        <div className="form-container">
            <h2>Personal Information</h2>
            <form className='form' id="personal" onSubmit={handleSubmit}>
                <div className="form-input-field">
                    <label htmlFor="name">Full Name</label>
                    <input 
                        type="text"
                        id='full-name'
                        name="fullName"
                        value={formState.fullName}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-input-field">
                    <label htmlFor="about">About Me</label>
                    <textarea 
                        id="about"
                        name="about"
                        value={formState.about}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-input-field">
                    <label htmlFor="phone">Phone</label>
                    <input 
                        type="tel"
                        id='phone'
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-input-field">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id='email'
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-input-field">
                    <label htmlFor="linkedin">LinkedIn</label>
                    <input
                        type="text"
                        id='linkedin'
                        name="linkedin"
                        value={formState.linkedin}
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
    )
}

export default PersonalForm