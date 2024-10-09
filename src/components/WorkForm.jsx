const WorkForm = ({ onSubmit, data, displayForm, itemToUpdate, handleEdit, handleDelete}) => {
    

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
        <form className='form' id='work-form' onSubmit={handleSubmit}>
            <div className="form-input-field">
                <label htmlFor="company-name">Company Name</label>
                <input type="text" id='company-name' name="companyName" value={itemToUpdate.companyName} onChange={handleChange}/>
            </div>
            <div className="form-input-field">
                <label htmlFor="position">Position Title</label>
                <input type="text" id='position' name="position" value={itemToUpdate.position} onChange={handleChange}/>
            </div>
            <div className="form-input-field">
                <label htmlFor="job-description">Job Description</label>
                <textarea id='job-description' name="jobDescription" value={itemToUpdate.jobDescription} onChange={handleChange}/>
            </div>
            <div className="form-input-field">
                <label htmlFor="job-start-date">Start Date</label>
                <input type="text" id='job-start-date' name="jobStartDate" value={itemToUpdate.jobStartDate} onChange={handleChange}/>
            </div>
            <div className="form-input-field">
                <label htmlFor="job-end-date">End Date</label>
                <input type="text" id='job-end-date' name="jobEndDate" value={itemToUpdate.jobEndDate} onChange={handleChange}/>
            </div>
            <div className="form-input-field">
                <label htmlFor="job-location">Location</label>
                <input type="text" id='job-location' name="jobLocation" value={itemToUpdate.jobLocation} onChange={handleChange}/>
            </div>
            <div className="buttons-container">
                <button className="btn add">Add</button>
                <button className="btn cancel" onClick={displayForm}>Cancel</button>
                <button className="btn delete" onClick={() => deleteItem(itemToUpdate)}>Delete</button>
            </div>
        </form>
  )
}

export default WorkForm