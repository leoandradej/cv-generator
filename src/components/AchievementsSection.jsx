import { useState } from "react"
import AchievementsForm from "./AchievementsForm"
import { faL } from "@fortawesome/free-solid-svg-icons"

const AchievementsSection = ({ onSubmit, data, handleEdit, handleDelete}) => {
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
        e.preventDefault()

        onSubmit(e.target)
    }

    return (
        <div className={`form-container ${formActive && 'active'}`}>
            <div className="form-title">
                <h2>Achievements</h2>
                <i className={`fa-solid fa-angle-down ${formActive && 'active'}`} onClick={() => setFormActive(!formActive)}></i>
            </div>
            <div className="form-items-wrapper">
                {!show && (
                    data.map(item => {
                        return (
                            <div key={item.id} className="form-item" onClick={editItem}>
                                <p id={item.id}>{item.achievement}</p>
                            </div>
                        )
                    })
                )}
                {!show && (
                    <button className="btn add-btn" onClick={displayForm}>+</button>
                )}
                {showForm && (
                    <form className="form" id="achievements-form" onSubmit={handleSubmit}>
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
                            <button className="btn cancel" onClick={displayForm}>Cancel</button>
                        </div>
                    </form>
                )}
                {editActive && <AchievementsForm onSubmit={editItem} data={data} displayForm={showForm} itemToUpdate={itemToUpdate} handleEdit={handleEdit} handleDelete={handleDelete}/>}
            </div>
        </div>
    )
}

export default AchievementsSection