const EducationItem = ({ school, degree, schoolStartDate, schoolEndDate, schoolLocation}) => {
    return (
        <div className="section-item">
            <h3>{degree}</h3>
            <p>{schoolStartDate} - {schoolEndDate}</p>
            <ul>
                <li>{school}</li>
                <li>{schoolLocation}</li>
            </ul>
        </div>
    )
}

export default EducationItem