import { useState } from "react"
import AchievementsForm from "./AchievementsForm"

const AchievementsSection = ({ onSubmit, data, handleEdit, handleDelete}) => {
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
        handleEdit('achievements')
    }
    
    const editItem = e => {
        setShowAddBtn(!showAddBtn)
        setEditActive(!editActive)
    
        const getItem = data.find(({ id }) => id === e.target.id)
    
        setItemToUpdate(getItem)
    }
    const handleSubmit = e => {
        e.preventDefault()

        onSubmit(e.target)
        displayForm()
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
                    <button className="btn add-btn" onClick={displayForm}>+</button>
                )}
                {showForm && (
                    <form className="form" id="achievements" onSubmit={handleSubmit}>
                        <div className="form-input-field">
                            <label htmlFor="achievement">Achievements</label>
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
                            <button className="btn cancel" onClick={() => displayForm()}>Cancel</button>
                        </div>
                    </form>
                )}
                {editActive && <AchievementsForm onSubmit={handleEdit} data={data} displayEditForm={displayEditForm} itemToUpdate={itemToUpdate} handleEdit={handleEdit} handleDelete={handleDelete}/>}
            </div>
        </div>
    )
}

export default AchievementsSection