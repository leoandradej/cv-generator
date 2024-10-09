const EducationForm = ({ onSubmit, data, displayForm, itemToUpdate, handleEdit, handleDelete }) => {

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
        <form className='form' id='education-form' onSubmit={handleSubmit}>
            <div className="form-input-field">
                <label htmlFor="school">School</label>
                <input type="text" id='school' name='school' value={itemToUpdate.school} onChange={handleChange}/>
            </div>
            <div className="form-input-field">
                <label htmlFor="degree">Degree</label>
                <input type="text" id='degree' name='degree' value={itemToUpdate.degree} onChange={handleChange}/>
            </div>
            <div className="form-input-field">
                <label htmlFor="school-start-date">Start Date</label>
                <input type="text" id='school-start-date' name='schoolStartDate' value={itemToUpdate.schoolStartDate} onChange={handleChange}/>
            </div>
            <div className="form-input-field">
                <label htmlFor="school-end-date">End Date</label>
                <input type="text" id='school-end-date' name='schoolEndDate' value={itemToUpdate.schoolEndDate} onChange={handleChange}/>
            </div>
            <div className="form-input-field">
                <label htmlFor="school-location">Location</label>
                <input type="text" id='school-location' name='schoolLocation' value={itemToUpdate.schoolLocation} onChange={handleChange}/>
            </div>
            <div className="buttons-container">
                <button className="btn save">Save</button>
                <button className="btn cancel" onClick={displayForm}>Cancel</button>
                <button className="btn delete" onClick={() => deleteItem(itemToUpdate)}>Delete</button>
            </div>
        </form>
    )
}

export default EducationForm