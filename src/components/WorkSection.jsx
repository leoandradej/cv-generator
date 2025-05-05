import { useState } from "react"
import WorkForm from "./WorkForm"

const WorkSection = ({ onSubmit, data, handleEdit, handleDelete }) => {

    const [showAddBtn, setShowAddBtn] = useState(false)
    const [showForm, setShowForm] = useState(false)
    const [itemToUpdate, setItemToUpdate] = useState(null)
    const [editActive, setEditActive] = useState(false)
    const [formActive, setFormActive] = useState(false)

    const toggleAddForm = () => {
        setShowAddBtn(!showAddBtn)
        setShowForm(!showForm)
    }

    const cancelEditForm = () => {
        setShowAddBtn(!showAddBtn)
        setEditActive(!editActive)
        setItemToUpdate(null)
    }
    
    const editItem = e => {
        const getItem = data.find(({ id }) => id === e.target.id)
        setItemToUpdate(getItem)
        setShowAddBtn(!showAddBtn)
        setEditActive(!editActive)
    }

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target
        const formData = new FormData(form)
        const newData = Object.fromEntries(formData.entries())

        onSubmit({
            formId: form.id,
            newData
        })
        
        toggleAddForm()
    }

    return (
        <div className={`form-container ${formActive && 'active'}`}>
            <div className="form-title">
                <h2>Work Experience</h2>
                <i className={`fa-solid fa-angle-down ${formActive && 'active'}`} onClick={() => setFormActive(!formActive)}></i>
            </div>
            <div className="form-items-wrapper">
                {!showAddBtn && (
                    data.map(item => {
                        return (
                            <div key={item.id} className="form-item" onClick={editItem}>
                                <p id={item.id}>{item.companyName}</p>
                            </div>
                        )
                    })
                )}
                {!showAddBtn && (
                    <button className="btn add-btn" onClick={toggleAddForm}>+</button>
                )}
                {showForm && (
                    <form className='form' id='work' onSubmit={handleSubmit}>
                        <div className="form-input-field">
                            <label htmlFor="company-name">Company Name</label>
                            <input type="text" id='company-name' name="companyName"/>
                        </div>
                        <div className="form-input-field">
                            <label htmlFor="position">Position Title</label>
                            <input type="text" id='position' name="position"/>
                        </div>
                        <div className="form-input-field">
                            <label htmlFor="job-description">Job Description</label>
                            <textarea id='job-description' name="jobDescription"/>
                        </div>
                        <div className="form-input-field">
                            <label htmlFor="job-start-date">Start Date</label>
                            <input type="text" id='job-start-date' name="jobStartDate"/>
                        </div>
                        <div className="form-input-field">
                            <label htmlFor="job-end-date">End Date</label>
                            <input type="text" id='job-end-date' name="jobEndDate"/>
                        </div>
                        <div className="form-input-field">
                            <label htmlFor="job-location">Location</label>
                            <input type="text" id='job-location' name="jobLocation"/>
                        </div>
                        <div className="buttons-container">
                            <button className="btn add">Add</button>
                            <button
                                className="btn cancel"
                                onClick={() => toggleAddForm()}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                )}
                {editActive && (
                    <WorkForm 
                        onSubmit={handleEdit} 
                        data={data}
                        cancelEditForm={cancelEditForm}
                        itemToUpdate={itemToUpdate}
                        setItemToUpdate={setItemToUpdate}
                        handleDelete={handleDelete}
                    />
                )}
            </div>
        </div>
  )
}

export default WorkSection