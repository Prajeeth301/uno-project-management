import React from 'react';
import './projects.styles.css';
import { Link } from 'react-router-dom';
import { PROJECTS_MOCK } from '../../mocks/projects.mock';
import { PROJECT_STATUS_CONFIG } from '../../config/project-status.config';


function Projects(props) {
    const { ongoingProjects, upcomingProjects } = PROJECTS_MOCK;
    return (
        <section className="content pt-2">

            <div className="card">
                <div className="card-header">
                    <h3 className="card-title">Projects</h3>
                    <div className="card-tools">
                        <Link to="/projects/create-new" className='btn bg-gradient-success btn-sm'>
                            <i className="fa fa-plus"></i>  Create New Project
                        </Link>
                    </div>
                </div>

                <div className="card-body">
                    <h5 className='text-muted my-3'>Ongoing Projects</h5>
                    <table className="table projects table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>Project Name</th>
                                <th>Project Type</th>
                                <th>Status</th>
                                <th>Budget</th>
                                <th>Progress</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ongoingProjects.map((project, index) => (
                                <tr key={index}>
                                    <td>
                                        <Link to={`/projects/${project.slug}`}>{project.name}</Link>
                                        <br />
                                        <small>
                                            Created {project.createDate}
                                        </small>
                                    </td>
                                    <td>{project.type}</td>
                                    <td>
                                        <span className={`badge badge-${PROJECT_STATUS_CONFIG[project.status]}`}>{project.status}</span>
                                    </td>
                                    <td>{project.budget}</td>
                                    <td className="project_progress">
                                        <div className="progress progress-sm">
                                            <div className="progress-bar bg-green" role="progressbar" aria-valuenow={project.progress} aria-valuemin="0" aria-valuemax="100" style={{ "width": `${project.progress}%` }}>
                                            </div>
                                        </div>
                                        <small>
                                            {project.progress}% Completed
                                        </small>
                                    </td>
                                    <td className="project-actions">
                                        <Link to={`/projects/${project.slug}`} className="btn btn-primary btn-sm mr-1">
                                            <i className="fas fa-folder mr-1">
                                            </i>
                                            View
                                        </Link>
                                        <a className="btn btn-info btn-sm mr-1" href="/">
                                            <i className="fas fa-pencil-alt mr-1">
                                            </i>
                                            Edit
                                        </a>
                                        <a className="btn btn-danger btn-sm mr-1" href="/">
                                            <i className="fas fa-trash mr-1">
                                            </i>
                                            Delete
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <h5 className='text-muted my-3'>Upcoming Projects</h5>
                    <table className="table projects table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>Project Name</th>
                                <th>Project Type</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>Budget</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {upcomingProjects.map((project, index) => (
                                <tr key={index}>
                                    <td>{project.name}</td>
                                    <td>{project.type}</td>
                                    <td>{project.startDate}</td>
                                    <td>{project.endDate}</td>
                                    <td>{project.budget}</td>
                                    <td className="project-actions">
                                        <Link to={`/projects/${project.slug}`} className="btn btn-primary btn-sm mr-1">
                                            <i className="fas fa-folder">
                                            </i>
                                            View
                                        </Link>
                                        <a className="btn btn-info btn-sm mr-1" href="/">
                                            <i className="fas fa-pencil-alt">
                                            </i>
                                            Edit
                                        </a>
                                        <a className="btn btn-danger btn-sm mr-1" href="/">
                                            <i className="fas fa-trash">
                                            </i>
                                            Delete
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}

export default Projects;