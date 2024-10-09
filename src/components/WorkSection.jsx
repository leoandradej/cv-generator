import { useState } from "react"
import WorkForm from "./WorkForm"

const WorkSection = ({ onSubmit, data, handleEdit, handleDelete }) => {

    const [show, setShow] = useState(false)
    const [showForm, setShowForm] = useState(false)
    const [itemToUpdate, setItemToUpdate] = useState()
    const [editActive, setEditActive] = useState(false)
    const [formActive, setFormActive] = useState(false)

    const displayForm = () => {
        setShow(!show)
        setShowForm(!showForm)
    }
    
    const editItem = e => {
        setShow(!show)
        setEditActive(!editActive)
    
        const getItem = data.find(({ id }) => id === e.target.id)
    
        setItemToUpdate(getItem)
    }

    const handleSubmit = e => {
        e.preventDefault();
        
        onSubmit(e.target)
        displayForm()
    }

    return (
        <div className={`form-container ${formActive && 'active'}`}>
            <div className="form-title">
                <h2>Work Experience</h2>
                <i className={`fa-solid fa-angle-down ${formActive && 'active'}`} onClick={() => setFormActive(!formActive)}></i>
            </div>
            <div className="form-items-wrapper">
                {!show && (
                    data.map(item => {
                        return (
                            <div key={item.id} className="form-item" onClick={editItem}>
                                <p id={item.id}>{item.companyName}</p>
                            </div>
                        )
                    })
                )}
                {!show && (
                    <button className="btn add-btn" onClick={displayForm}>+</button>
                )}
                {showForm && (
                    <form className='form' id='work-form' onSubmit={handleSubmit}>
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
                            <button className="btn cancel" onClick={displayForm}>Cancel</button>
                        </div>
                    </form>
                )}
                {editActive && <WorkForm onSubmit={editItem} data={data} displayForm={showForm} itemToUpdate={itemToUpdate} handleEdit={handleEdit} handleDelete={handleDelete}/>}
            </div>
        </div>
  )
}

export default WorkSection