import React from 'react';
// import Modal from '../../../../components/modal/modal.component';
import AddMember from '../add-member/add-member.component';

function TeamMembers(props) {

    const addNewTeamMembers = (newTeamMembers) => {
        console.log("newTeamMembers", newTeamMembers);
    }

    return (
        <div>
            <div class="d-flex justify-content-between mb-3">
                <h3 class="card-title">Member List (2)</h3>
                <button class="btn btn-success btn-sm" data-toggle="modal" data-target="#modal-default">
                    <i class="fa fa-plus me-1"></i> Add New Member
                </button>
            </div>

            <div className='d-flex flex-wrap'>
                <div className="info-box  w-25 mr-2">
                    <span className="info-box-icon text-white bg-secondary"><i className="ion ion-person-add"></i></span>
                    <div className="info-box-content d-flex flex-wrap">

                        <div>
                            <h6 className='text-muted text-uppercase'>John</h6>
                            <small className="text-muted">Project Manager</small>
                        </div>
                    </div>
                </div>
                <div className="info-box w-25 mr-2">
                    <span className="info-box-icon  text-white bg-secondary"><i className="ion ion-person-add"></i></span>
                    <div className="info-box-content d-flex flex-wrap">

                        <div>
                            <h6 className='text-muted text-uppercase'>Lucifer</h6>
                            <small className="text-muted">Volunteer</small>
                        </div>
                    </div>
                </div>
            </div>


            <AddMember addNewTeamMembers={addNewTeamMembers}></AddMember>
            
        </div>
    );
}

export default TeamMembers;