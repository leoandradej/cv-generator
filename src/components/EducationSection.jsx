import { useState } from "react";
import EducationForm from "./EducationForm";

const EducationSection = ({ onSubmit, data, handleEdit, handleDelete }) => {
    const [showAddBtn, setShowAddBtn] = useState(false)
    const [showForm, setShowForm] = useState(false)
    const [itemToUpdate, setItemToUpdate] = useState()
    const [editActive, setEditActive] = useState(false)
    const [formActive, setFormActive] = useState(false)
    
    const displayForm = () => {
        setShowAddBtn(!showAddBtn)
        setShowForm(!showForm)
    }

    const displayEditForm = () => {
        setShowAddBtn(!showAddBtn)
        setEditActive(!editActive)
        handleEdit('education')
    }
    
    const editItem = e => {
        setShowAddBtn(!showAddBtn)
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
                    <button className="btn add-btn" onClick={displayForm}>+</button>
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
                            <button className="btn cancel" onClick={() => displayForm()}>Cancel</button>
                        </div>
                    </form>
                )}
                {editActive && <EducationForm onSubmit={handleEdit} data={data} displayEditForm={displayEditForm} itemToUpdate={itemToUpdate} handleEdit={handleEdit} handleDelete={handleDelete}/>}
            </div>
        </div>
    )
}

export default EducationSection