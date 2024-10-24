const AchievementsForm = ({ onSubmit, data, displayEditForm, itemToUpdate, handleEdit, handleDelete }) => {

    const handleChange = e => {
        itemToUpdate[e.target.name] = e.target.value
        handleEdit(e.target.id)
    }

    const deleteItem = (formId, item) => {
        const getItems = data.filter(items => items.id !== item.id)
        handleDelete(formId, getItems)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        onSubmit(e.target.id)
        displayEditForm()
    }

    return (
        <form className="form" id="achievements" onSubmit={handleSubmit}>
            <div className="form-input-field">
                <label htmlFor="achievement">Achievement</label>
                <input type="text" id='achievements' name='achievement' value={itemToUpdate.achievement} onChange={handleChange}/>
            </div>
            <div className="form-input-field">
                <label htmlFor="achievement-location">Location</label>
                <input type="text" id='achievements' name='achievementLocation' value={itemToUpdate.achievementLocation} onChange={handleChange}/>
            </div>
            <div className="form-input-field">
                <label htmlFor="achievement-date">Date</label>
                <input type="text" id='achievements' name='achievementDate' value={itemToUpdate.achievementDate} onChange={handleChange}/>
            </div>
            <div className="buttons-container">
                <button className="btn save">Save</button>
                <button className="btn cancel" onClick={() => displayEditForm()}>Cancel</button>
                <button className="btn delete" onClick={() => deleteItem('achievements', itemToUpdate)}>Delete</button>
            </div>
        </form>
    )
}

export default AchievementsForm