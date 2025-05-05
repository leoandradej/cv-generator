const WorkForm = ({ onSubmit, data, cancelEditForm, itemToUpdate, setItemToUpdate, handleDelete}) => {
    const handleChange = e => {
        const { name, value } = e.target
        setItemToUpdate(prev => ({ ...prev, [name]: value }))
    }

    const deleteItem = (formId, item) => {
        const getItems = data.filter(items => items.id !== item.id)
        handleDelete(formId, getItems)
    }
    
    const handleSubmit = e => {
        e.preventDefault();
        onSubmit('work', itemToUpdate)
        cancelEditForm()
    }

    return (
        <form className='form' id='work' onSubmit={handleSubmit}>
            <div className="form-input-field">
                <label htmlFor="company-name">Company Name</label>
                <input
                    type="text"
                    id='work'
                    name="companyName"
                    value={itemToUpdate.companyName}
                    onChange={handleChange}
                />
            </div>
            <div className="form-input-field">
                <label htmlFor="position">Position Title</label>
                <input
                    type="text"
                    id='work'
                    name="position"
                    value={itemToUpdate.position}
                    onChange={handleChange}
                />
            </div>
            <div className="form-input-field">
                <label htmlFor="job-description">Job Description</label>
                <textarea
                    id='work'
                    name="jobDescription"
                    value={itemToUpdate.jobDescription}
                    onChange={handleChange}
                />
            </div>
            <div className="form-input-field">
                <label htmlFor="job-start-date">Start Date</label>
                <input
                    type="text"
                    id='work'
                    name="jobStartDate"
                    value={itemToUpdate.jobStartDate}
                    onChange={handleChange}
                />
            </div>
            <div className="form-input-field">
                <label htmlFor="job-end-date">End Date</label>
                <input
                    type="text"
                    id='work'
                    name="jobEndDate"
                    value={itemToUpdate.jobEndDate}
                    onChange={handleChange}/>
            </div>
            <div className="form-input-field">
                <label htmlFor="job-location">Location</label>
                <input
                    type="text"
                    id='work'
                    name="jobLocation"
                    value={itemToUpdate.jobLocation}
                    onChange={handleChange}/>
            </div>
            <div className="buttons-container">
                <button className="btn add">Save</button>
                <button
                    className="btn cancel"
                    onClick={cancelEditForm}
                >
                    Cancel
                </button>
                <button
                    className="btn delete"
                    onClick={() => deleteItem('work', itemToUpdate)}
                >
                    Delete
                </button>
            </div>
        </form>
    )
}

export default WorkForm