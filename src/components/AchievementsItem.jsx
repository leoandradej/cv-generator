const AchievementsItem = ({ achievement, achievementLocation, achievementDate}) => {
    return (
        <div className="achievement-item">
            <h3>{achievement}</h3>
            <div>
            <p>{achievementLocation}</p>
            <p>{achievementDate}</p>
            </div>
        </div>
    )
}

export default AchievementsItem