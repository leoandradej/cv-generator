const EducationForm = ({ onSubmit, data, displayEditForm, itemToUpdate, handleEdit, handleDelete }) => {
    
    const handleChange = e => {
        itemToUpdate[e.target.name] = e.target.value
        handleEdit(e.target.id)
    }

    const deleteItem = (formId, item) => {
        const getItems = data.filter(items => items.id !== item.id)
        handleDelete(formId, getItems)
    }

    const handleSubmit = e => {
        e.preventDefault();
        
        onSubmit(e.target.id)
        displayEditForm()
    }
 
    return (
        <form className='form' id='education' onSubmit={handleSubmit}>
            <div className="form-input-field">
                <label htmlFor="school">School</label>
                <input type="text" id='education' name='school' value={itemToUpdate.school} onChange={handleChange}/>
            </div>
            <div className="form-input-field">
                <label htmlFor="degree">Degree</label>
                <input type="text" id='education' name='degree' value={itemToUpdate.degree} onChange={handleChange}/>
            </div>
            <div className="form-input-field">
                <label htmlFor="school-start-date">Start Date</label>
                <input type="text" id='education' name='schoolStartDate' value={itemToUpdate.schoolStartDate} onChange={handleChange}/>
            </div>
            <div className="form-input-field">
                <label htmlFor="school-end-date">End Date</label>
                <input type="text" id='education' name='schoolEndDate' value={itemToUpdate.schoolEndDate} onChange={handleChange}/>
            </div>
            <div className="form-input-field">
                <label htmlFor="school-location">Location</label>
                <input type="text" id='education' name='schoolLocation' value={itemToUpdate.schoolLocation} onChange={handleChange}/>
            </div>
            <div className="buttons-container">
                <button className="btn save">Save</button>
                <button className="btn cancel" onClick={() => displayEditForm()}>Cancel</button>
                <button className="btn delete" onClick={() => deleteItem('education', itemToUpdate)}>Delete</button>
            </div>
        </form>
    )
}

export default EducationForm