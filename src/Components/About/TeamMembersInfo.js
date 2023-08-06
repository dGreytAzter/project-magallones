import React from 'react'

const TeamMembersInfo = (props) => {
    return (
        <div class="col-md-4">
            <div class="team-item">
                <img src={props.img} alt="teams" />
                <div class="down-content">
                <h4>{props.name}</h4>
                <span>{props.role}</span>
                <p>{props.jobDescription}</p>
                </div>
            </div>
        </div>
    )
}

export default TeamMembersInfo