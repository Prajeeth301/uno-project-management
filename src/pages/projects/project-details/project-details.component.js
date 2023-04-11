import React, { useEffect, useState } from 'react';
import './project-details.styles.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { PROJECTS_MOCK } from '../../../mocks/projects.mock';
// import ProjectOverview from './project-overview/project-overview.component';
import ProjectTasks from './project-tasks/project-tasks.component';
import TeamMembers from './team-members/team-members.component';
import { TASKS_MOCK } from '../../../mocks/tasks.mock';
import UploadZone from '../../../components/upload-zone/upload-zone.component';

function ProjectDetails(props) {
    let [projectDetails, setProjectDetails] = useState(null);
    let [projectTasks, setProjectTasks] = useState([]);

    const handleFiles = (files) => {
        if (files.length) {
           console.log(files);
        }
    }

    const addNewTeamMembers = (newTeamMembers) => {
        props.addNewTeamMembers(newTeamMembers);
    }

    let { id } = useParams();
    
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            setProjectTasks(TASKS_MOCK[id]);
            let { ongoingProjects, upcomingProjects } = PROJECTS_MOCK;
            let currentProject = ongoingProjects.filter(p => p.slug === id);
            if (currentProject.length === 0) {
                currentProject = upcomingProjects.filter(p => p.slug === id);
            }

            if (currentProject.length !== 0) {
                setProjectDetails(currentProject[0]);
            } else {
                navigate('/page-no-found');
            }
        }

    }, [id, navigate, projectDetails]);

    return (
        <section className="content pt-2">
            {projectDetails !== null ?
                <div className="card">
                    <div className='card-header'>
                        <div className='row'>
                            <div className='col'>
                                <div className='row'>
                                    <div className='col-auto'>
                                        <img width="50px" src={projectDetails.thumbnail} alt='project-thumbnail' />
                                    </div>
                                    <div className='col'>
                                        <h5 className="text-muted m-0">{projectDetails.name.toLocaleUpperCase()}</h5>
                                        <p className="card-text text-muted mt-2">{projectDetails.description}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-auto'>
                                <Link className="btn btn-info btn-sm mr-1" to="/"><i className="fas fa-pencil-alt mr-1"></i>Edit</Link>
                                <Link className="btn"><i className="fas fa-ellipsis-v mr-1"></i> </Link>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-4">
                                {/* important info or project gallery */}
                                <h6 className='text-muted'>Upload Project Documents here</h6>
                                <UploadZone handleFiles={handleFiles} />
                            </div>
                            <div className='col-2'></div>

                            <div className="col-3 text-muted">
                                <div className="d-flex align-items-center mt-3">
                                    <div className="flex-shrink-0 mr-3">
                                        <i className="fas fa-calendar"></i>
                                    </div>
                                    <div className="flex-grow-1">
                                        <h5 className="font-size-12 mb-1">Start Date</h5>
                                        <p className="text-muted mb-0">{projectDetails.startDate}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3 text-muted">
                                <div className="d-flex align-items-center mt-3">
                                    <div className="flex-shrink-0 mr-3">
                                        <i className="fas fa-clock"></i>
                                    </div>
                                    <div className="flex-grow-1">
                                        <h5 className="font-size-12 mb-1">Due Date</h5>
                                        <p className="text-muted mb-0">{projectDetails.endDate}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div> : null}
            <div className="card card-info card-outline card-outline-tabs">
                <div className="card-header p-0 border-bottom-0">
                    <ul className="nav nav-tabs" id="custom-tabs-four-tab" role="tablist">
                        {/* <li className="nav-item">
                            <a className="nav-link active" id="overview-tab" data-toggle="pill"
                                href="#overview" role="tab" aria-controls="overview"
                                aria-selected="true">Overview</a>
                        </li> */}
                        <li className="nav-item">
                            <a className="nav-link" id="tasks-tab" data-toggle="pill"
                                href="#tasks" role="tab" aria-controls="tasks"
                                aria-selected="false">Project Activities</a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" id="issues-tab" data-toggle="pill"
                                href="#issues" role="tab" aria-controls="issues"
                                aria-selected="false">Issues</a>
                        </li> */}
                        <li className="nav-item">
                            <a className="nav-link" id="teams-tab" data-toggle="pill"
                                href="#teams" role="tab"
                                aria-controls="teams" aria-selected="false">Team</a>
                        </li>
                    </ul>
                </div>
                <div className="card-body">
                    <div className="tab-content" id="custom-tabs-four-tabContent">
                        {/* <div className="tab-pane fade active show" id="overview" role="tabpanel"
                            aria-labelledby="overview-tab">
                            <ProjectOverview />
                        </div> */}
                        <div className="tab-pane fade active show" id="tasks" role="tabpanel"
                            aria-labelledby="tasks-tab">
                            <ProjectTasks tasks={projectTasks} />
                        </div>
                        <div className="tab-pane fade" id="issues" role="tabpanel"
                            aria-labelledby="issues-tab">
                            <table id="example2" className="table table-bordered table-hover dataTable dtr-inline"
                                aria-describedby="example2_info">
                                <thead>
                                    <tr>
                                        <th className="sorting sorting_asc" tabIndex="0" aria-controls="example2" rowSpan="1"
                                            colSpan="1" aria-sort="ascending"
                                            aria-label="Rendering engine: activate to sort column descending">Id
                                        </th>
                                        <th className="sorting" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1"
                                            aria-label="Browser: activate to sort column ascending">Task</th>
                                        <th className="sorting" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1"
                                            aria-label="Platform(s): activate to sort column ascending">Status</th>
                                        <th className="sorting" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1"
                                            aria-label="Engine version: activate to sort column ascending">End date</th>
                                        <th className="sorting" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1"
                                            aria-label="CSS grade: activate to sort column ascending">Severity</th>
                                        <th className="sorting" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1"
                                            aria-label="CSS grade: activate to sort column ascending">Assignee</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="odd">
                                        <td><button className="btn btn-outline-light">+Add New Issue</button></td>
                                    </tr>
                                    <tr className="even">
                                        <td className="dtr-control sorting_1" tabIndex="0">006</td>
                                        <td>Footer responsive</td>
                                        <td><span className="badge badge-pill badge-warning">Inprogress</span></td>
                                        <td><span>8/4/23</span></td>
                                        <td><span className="badge badge-pill badge-success">low</span></td>
                                        <td>lokesh</td>

                                    </tr>
                                    <tr className="odd">
                                        <td className="dtr-control sorting_1" tabIndex="0">005</td>
                                        <td>Sign up for validation</td>
                                        <td><span className="badge badge-pill badge-info">Open</span></td>
                                        <td><span>30/4/23</span></td>
                                        <td><span className="badge badge-pill badge-info">Medium</span></td>

                                        <td>lokesh</td>
                                    </tr>
                                    <tr className="even">
                                        <td className="dtr-control sorting_1" tabIndex="0">004</td>
                                        <td>Cross browser compatibilty</td>
                                        <td><span className="badge badge-pill badge-info">Open</span></td>
                                        <td><span>30/4/23</span></td>
                                        <td><span className="badge badge-pill badge-danger">High</span></td>
                                        <td>lokesh</td>

                                    </tr>
                                    <tr className="odd">
                                        <td className="dtr-control sorting_1" tabIndex="0">003</td>
                                        <td>Updated Icons</td>
                                        <td><span className="badge badge-pill badge-warning">Inprogress</span></td>
                                        <td><span>10/4/23</span></td>
                                        <td><span className="badge badge-pill badge-success">low</span></td>
                                        <td>lokesh</td>

                                    </tr>
                                    <tr className="even">
                                        <td className="dtr-control sorting_1" tabIndex="0">002</td>
                                        <td>Backened Architectture</td>
                                        <td><span className="badge badge-pill badge-warning">Inprogress</span></td>
                                        <td><span>8/4/23</span></td>
                                        <td><span className="badge badge-pill badge-success">low</span></td>
                                        <td>lokesh</td>

                                    </tr>
                                    <tr className="odd">
                                        <td className="sorting_1 dtr-control">001</td>
                                        <td>Checklist item order</td>
                                        <td><span className="badge badge-pill badge-danger">closed</span></td>
                                        <td><span>8/03/23</span></td>
                                        <td><span className="badge badge-pill badge-success">low</span></td>
                                        <td>lokesh</td>

                                    </tr>

                                    <tr className="odd">
                                        <td className="sorting_1 dtr-control">005</td>
                                        <td>Task status color variation</td>
                                        <td><span className="badge badge-pill badge-danger">closed</span></td>
                                        <td><span>3/03/23</span></td>
                                        <td><span className="badge badge-pill badge-danger">High</span></td>
                                        <td>lokesh</td>

                                    </tr>

                                </tbody>
                            </table>
                            <div className="row">
                                <div className="col-sm-12 col-md-5">
                                    <div className="dataTables_info" id="example2_info" role="status" aria-live="polite">
                                        Showing 1 to 10 of 57 entries</div>
                                </div>
                                <div className="col-sm-12 col-md-7">
                                    <div className="dataTables_paginate paging_simple_numbers" id="example2_paginate">
                                        <ul className="pagination">
                                            <li className="paginate_button page-item previous disabled" id="example2_previous">
                                                <a href="/"
                                                    aria-controls="example2" data-dt-idx="0" tabIndex="0" className="page-link">Previous</a>
                                            </li>
                                            <li className="paginate_button page-item active">
                                                <a href="/" aria-controls="example2"
                                                    data-dt-idx="1" tabIndex="0" className="page-link">1</a>
                                            </li>
                                            <li className="paginate_button page-item ">
                                                <a href="/" aria-controls="example2" data-dt-idx="2"
                                                    tabIndex="0" className="page-link">2</a>
                                            </li>
                                            <li className="paginate_button page-item ">
                                                <a href="/" aria-controls="example2" data-dt-idx="3"
                                                    tabIndex="0" className="page-link">3</a>
                                            </li>
                                            <li className="paginate_button page-item ">
                                                <a href="/" aria-controls="example2" data-dt-idx="4"
                                                    tabIndex="0" className="page-link">4</a>
                                            </li>
                                            <li className="paginate_button page-item ">
                                                <a href="/" aria-controls="example2" data-dt-idx="5"
                                                    tabIndex="0" className="page-link">5</a>
                                            </li>
                                            <li className="paginate_button page-item ">
                                                <a href="/" aria-controls="example2" data-dt-idx="6"
                                                    tabIndex="0" className="page-link">6</a>
                                            </li>
                                            <li className="paginate_button page-item next" id="example2_next"><a href="/"
                                                aria-controls="example2" data-dt-idx="7" tabIndex="0" className="page-link">Next</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="teams" role="tabpanel"
                            aria-labelledby="teams-tab">
                            <TeamMembers addNewTeamMembers={addNewTeamMembers}/>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default ProjectDetails;