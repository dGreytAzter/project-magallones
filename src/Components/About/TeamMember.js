import React from 'react'
import Team01 from '../assets/images/team_01.jpg'
import Team02 from '../assets/images/team_02.jpg'
import Team03 from '../assets/images/team_03.jpg'
import TeamMembersInfo from './TeamMembersInfo'

const TeamMember = () => {
    return (
        <div class="team">
            <div class="container">
            <div class="row">
                <div class="col-md-12">
                <div class="section-heading">
                    <h2><em>Our Team Members</em></h2>
                </div>
                </div>
                <TeamMembersInfo img={Team01} name="Anonymous" jobDescription="Data Encoder" />
                <TeamMembersInfo img={Team02} name="Anonymous1" jobDescription="Data Encoder1" />
                <TeamMembersInfo img={Team03} name="Anonymous2" jobDescription="Data Encoder2" />
            </div>
            </div>
        </div>
    )
}

export default TeamMember