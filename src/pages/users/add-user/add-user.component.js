import React, { useState } from 'react';
import { PROJECTS_MOCK } from '../../../mocks/projects.mock';
import { USER_ROLES } from '../../../config/user-roles.config';

function AddUser(props) {
    const [contactNo, setContactNo] = useState('');
    const [password, setPassword] = useState('');
    const [project, setProject] = useState('');
    const [userRole, setUserRole] = useState('');

    let allProjects = [...PROJECTS_MOCK.ongoingProjects, ...PROJECTS_MOCK.upcomingProjects];

    const handleContact = (e) => {
        setContactNo(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleProject = (e) => {
        setProject(e.target.value);
    }
    const handleUserRole = (e) => {
        setUserRole(e.target.value);
    }

    const handleAddUser = (e) => {
        e.preventDefault();
        console.log({ contactNo, password, project, userRole });
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 offset-md-3 pt-3">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Add New User</h3>
                        </div>

                        <form id="quickForm" onSubmit={handleAddUser}>
                            <div className="card-body">
                                <div className="form-group">
                                    <label htmlFor="contact">Contact no.</label>
                                    <input
                                        type="text"
                                        name="contactNo"
                                        className="form-control"
                                        id="contact"
                                        placeholder="Enter Contact Number"
                                        value={contactNo}
                                        onChange={handleContact}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        id="password"
                                        placeholder="Enter Password"
                                        value={password}
                                        onChange={handlePassword}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Project</label>
                                    <select
                                        className="form-control"
                                        value={project}
                                        onChange={handleProject}
                                    >
                                        <option value="">Select a project</option>
                                        {
                                            allProjects.map((project, index) => <option key={index}>{project.name}</option>)
                                        }
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Role</label>
                                    <select className="form-control" value={userRole}
                                        onChange={handleUserRole}>
                                        <option value="">Select a Role</option>
                                        {
                                            USER_ROLES.map((item, index) => <option key={index}>{item.role}</option>)
                                        }
                                    </select>

                                </div>
                            </div>
                            <div className="card-footer d-flex justify-content-center">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-md-6">

                </div>
            </div>
        </div >
    );
}

export default AddUser;