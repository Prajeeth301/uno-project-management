import React, { useState } from 'react';
import { USERS_MOCK } from '../../../../mocks/users.mock';
import { PROJECT_TYPES } from '../../../../config/project-types.config';
import './add-project-members.styles.css';

function AddProjectMembers({ values, onNext, onPrevious }) {
    const [projectType, setProjectType] = useState(values.projectType ? values.projectType : '' );
    const [teamMembers, setTeamMembers] = useState(values.teamMembers ? values.teamMembers : []);
    const [selectedTeamMember, setSelectedTeamMember] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onNext({ ...values, projectType , teamMembers });
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

    const handleProjectTypeChange = (event) => {
        setProjectType(event.target.value);
    };

    return (
        <div>
            <div className='text-center'>
                <h5>Assign to</h5>
                <small>Select Members</small>
            </div>
            <form onSubmit={handleSubmit}>

            <div className="form-group">
                    <label htmlFor="projectType">Project Type:</label>
                    <select className="form-control custom-select" id="projectType" value={projectType} onChange={handleProjectTypeChange}>
                        <option value="">Select a type</option>
                        {PROJECT_TYPES.map((option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>


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

                <div className='d-flex justify-content-between mt-4'>
                    <button className='btn btn-primary btn-sm' onClick={onPrevious} >Prev</button>
                    <button className='btn btn-primary btn-sm' type="submit">Next</button>
                </div>
            </form>
        </div>
    );
}

export default AddProjectMembers;