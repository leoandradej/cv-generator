import { useState } from "react"
import AchievementsForm from "./AchievementsForm"

const AchievementsSection = ({ onSubmit, data, handleEdit, handleDelete}) => {
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
                <h2>Achievements</h2>
                <i className={`fa-solid fa-angle-down ${formActive && 'active'}`} onClick={() => setFormActive(!formActive)}></i>
            </div>
            <div className="form-items-wrapper">
                {!showAddBtn && (
                    data.map(item => {
                        return (
                            <div key={item.id} className="form-item" onClick={editItem}>
                                <p id={item.id}>{item.achievement}</p>
                            </div>
                        )
                    })
                )}
                {!showAddBtn && (
                    <button className="btn add-btn" onClick={toggleAddForm}>+</button>
                )}
                {showForm && (
                    <form className="form" id="achievements" onSubmit={handleSubmit}>
                        <div className="form-input-field">
                            <label htmlFor="achievement">Achievement</label>
                            <input type="text" id='achievement' name='achievement'/>
                        </div>
                        <div className="form-input-field">
                            <label htmlFor="achievement-location">Location</label>
                            <input type="text" id='achievement-location' name='achievementLocation'/>
                        </div>
                        <div className="form-input-field">
                            <label htmlFor="achievement-date">Date</label>
                            <input type="text" id='achievement-date' name='achievementDate'/>
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
                    <AchievementsForm
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

export default AchievementsSection