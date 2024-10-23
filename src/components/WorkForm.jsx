const WorkForm = ({ onSubmit, data, displayEditForm, itemToUpdate, handleEdit, handleDelete}) => {
    

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
        <form className='form' id='work' onSubmit={handleSubmit}>
            <div className="form-input-field">
                <label htmlFor="company-name">Company Name</label>
                <input type="text" id='work' name="companyName" value={itemToUpdate.companyName} onChange={handleChange}/>
            </div>
            <div className="form-input-field">
                <label htmlFor="position">Position Title</label>
                <input type="text" id='work' name="position" value={itemToUpdate.position} onChange={handleChange}/>
            </div>
            <div className="form-input-field">
                <label htmlFor="job-description">Job Description</label>
                <textarea id='work' name="jobDescription" value={itemToUpdate.jobDescription} onChange={handleChange}/>
            </div>
            <div className="form-input-field">
                <label htmlFor="job-start-date">Start Date</label>
                <input type="text" id='work' name="jobStartDate" value={itemToUpdate.jobStartDate} onChange={handleChange}/>
            </div>
            <div className="form-input-field">
                <label htmlFor="job-end-date">End Date</label>
                <input type="text" id='work' name="jobEndDate" value={itemToUpdate.jobEndDate} onChange={handleChange}/>
            </div>
            <div className="form-input-field">
                <label htmlFor="job-location">Location</label>
                <input type="text" id='work' name="jobLocation" value={itemToUpdate.jobLocation} onChange={handleChange}/>
            </div>
            <div className="buttons-container">
                <button className="btn add">Save</button>
                <button className="btn cancel" onClick={() => displayEditForm()}>Cancel</button>
                <button className="btn delete" onClick={() => deleteItem('work', itemToUpdate)}>Delete</button>
            </div>
        </form>
  )
}

export default WorkForm