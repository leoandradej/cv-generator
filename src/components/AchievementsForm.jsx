const AchievementsForm = ({ onSubmit, data, displayForm, itemToUpdate, handleEdit, handleDelete }) => {

    const handleChange = e => {
        itemToUpdate[e.target.name] = e.target.value
        handleEdit()
    }

    const deleteItem = (item) => {
        const getItems = data.filter(items => items.id !== item.id)
        handleDelete(getItems)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        onSubmit()
    }

    return (
        <form className="form" id="achievements-form" onSubmit={handleSubmit}>
            <div className="form-input-field">
                <label htmlFor="achievement">Achievements</label>
                <input type="text" id='achievement' name='achievement' value={itemToUpdate.achievement} onChange={handleChange}/>
            </div>
            <div className="form-input-field">
                <label htmlFor="achievement-location">Location</label>
                <input type="text" id='achievement-location' name='achievementLocation' value={itemToUpdate.achievementLocation} onChange={handleChange}/>
            </div>
            <div className="form-input-field">
                <label htmlFor="achievement-date">Date</label>
                <input type="text" id='achievement-date' name='achievementDate' value={itemToUpdate.achievementDate} onChange={handleChange}/>
            </div>
            <div className="buttons-container">
                <button className="btn save">Save</button>
                <button className="btn cancel" onClick={displayForm}>Cancel</button>
                <button className="btn delete" onClick={() => deleteItem(itemToUpdate)}>Delete</button>
            </div>
        </form>
    )
}

export default AchievementsForm