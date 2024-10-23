const WorkItem = ({ companyName, position, jobDescription, jobStartDate, jobEndDate, jobLocation}) => {
    return (
        <div className="section-item company-item">
            <div className="company-heading">
                <div className="company-heading-left">
                    <h3>{companyName}</h3>
                    <p>{position}</p>
                </div>
                <div className="company-heading-right">
                    <p>{jobLocation}</p>
                    <p>{jobStartDate} - {jobEndDate}</p>
                </div>
            </div>
            <p className="company-text">{jobDescription}</p>
        </div>
    )
}

export default WorkItem