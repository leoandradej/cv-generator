import { useState } from "react";
import EducationForm from "./EducationForm";

const EducationSection = ({ onSubmit, data, handleEdit, handleDelete }) => {
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
                <h2>Education Experience</h2>
                <i className={`fa-solid fa-angle-down ${formActive && 'active'}`} onClick={() => setFormActive(!formActive)}></i>
            </div>
            <div className="form-items-wrapper">
                {!showAddBtn && (
                    data.map(item => {
                        return (
                            <div key={item.id} className="form-item" onClick={editItem}>
                                <p id={item.id}>{item.school}</p>
                            </div>
                        )
                    })
                )}
                {!showAddBtn && (
                    <button className="btn add-btn" onClick={toggleAddForm}>+</button>
                )}
                
                {showForm && (
                    <form className='form' id='education' onSubmit={handleSubmit}>
                        <div className="form-input-field">
                            <label htmlFor="school">School</label>
                            <input type="text" id='school' name='school'/>
                        </div>
                        <div className="form-input-field">
                            <label htmlFor="degree">Degree</label>
                            <input type="text" id='degree' name='degree'/>
                        </div>
                        <div className="form-input-field">
                            <label htmlFor="school-start-date">Start Date</label>
                            <input type="text" id='school-start-date' name='schoolStartDate'/>
                        </div>
                        <div className="form-input-field">
                            <label htmlFor="school-end-date">End Date</label>
                            <input type="text" id='school-end-date' name='schoolEndDate'/>
                        </div>
                        <div className="form-input-field">
                            <label htmlFor="school-location">Location</label>
                            <input type="text" id='school-location' name='schoolLocation'/>
                        </div>
                        <div className="buttons-container">
                            <button className="btn add">Add</button>
                            <button
                                className="btn cancel"
                                onClick={toggleAddForm}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                )}
                {editActive && (
                    <EducationForm
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

export default EducationSection