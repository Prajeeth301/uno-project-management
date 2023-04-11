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
        <div className="modal fade" id="modal-default">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Add New Member</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">

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
                    <div className="modal-footer justify-content-between">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={handleSubmit}>Save changes</button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default AddMember;