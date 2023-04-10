import React from 'react';
import { PROJECTS_MOCK } from '../../../mocks/projects.mock';


function AddUser(props) {
    let allProjects = [...PROJECTS_MOCK.ongoingProjects, ...PROJECTS_MOCK.upcomingProjects];

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 offset-md-3 pt-3">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Add New User</h3>
                        </div>

                        <form id="quickForm">
                            <div className="card-body">
                                <div className="form-group">
                                    <label for="contact">Contact no.</label>
                                    <input type="text" name="contact" className="form-control" id="contact" placeholder="Enter contact number" />
                                </div>
                                <div className="form-group">
                                    <label for="password">Password</label>
                                    <input type="password" name="password" className="form-control" id="password" placeholder="Password" />
                                </div>
                                <div className="form-group">
                                    <label>Project</label>
                                    <select className="form-control">
                                        {
                                            allProjects.map(project => <option>{project.name}</option>)
                                        }
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Role</label>
                                    <select className="form-control">
                                        <option>User</option>
                                        <option>Admin</option>

                                        <option>System Admin</option>


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