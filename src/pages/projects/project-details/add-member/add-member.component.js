import React, { useState } from 'react';
import { USERS_MOCK } from '../../../../mocks/users.mock';

function AddMember(props) {
    const [teamMembers, setTeamMembers] = useState([]);
    const [selectedTeamMember, setSelectedTeamMember] = useState('');

    const handleSubmit = (e) => {
        props.addNewTeamMembers(teamMembers);
    };

    const handleTeamMemberChange = (event) => {
        if (event.target.value !== "") {
            setSelectedTeamMember(event.target.value);
        }
    };

    const handleAddTeamMember = () => {
        if (selectedTeamMember !== '') {
            setTeamMembers([...teamMembers, selectedTeamMember]);
            setSelectedTeamMember('');
        }
    };

    const handleRemoveTeamMember = (index) => {
        const updatedTeamMembers = [...teamMembers];
        updatedTeamMembers.splice(index, 1);
        setTeamMembers(updatedTeamMembers);
    };


    return (
        <div class="modal fade" id="modal-default">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Add New Member</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">

                        <div className="form-group">
                            <label htmlFor="teamMember">Assign Team Member:</label>
                            <div className='d-flex'>
                                <select className="form-control" id="teamMember" value={selectedTeamMember} onChange={handleTeamMemberChange}>
                                    <option value="">Select a team member</option>
                                    {USERS_MOCK.map((option, index) => (
                                        <option key={index} value={option.name}>
                                            {option.name}
                                        </option>
                                    ))}
                                </select>
                                <button type="button" className='btn btn-sm btn-success custom-btn' onClick={handleAddTeamMember}>
                                    Add
                                </button>
                            </div>
                        </div>

                        {teamMembers.length > 0 && (
                            <div className="form-group">
                                <label>Team Members:</label>
                                <ul>
                                    {teamMembers.map((teamMember, index) => (
                                        <li className='mb-3' key={index}>
                                            {teamMember}
                                            <button type="button" className='btn btn-sm btn-danger ml-2' onClick={() => handleRemoveTeamMember(index)}>
                                                Remove
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                    </div>
                    <div class="modal-footer justify-content-between">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" onClick={handleSubmit}>Save changes</button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default AddMember;