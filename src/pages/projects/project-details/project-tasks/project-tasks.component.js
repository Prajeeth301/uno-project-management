import React from 'react';
import { TASK_STATUS_CONFIG } from '../../../../config/task-status.config';
import { TASK_SEVERITY_CONFIG } from '../../../../config/task-severity.config';

function ProjectTasks({ tasks }) {
    return (
        <div>
            <div className='d-flex justify-content-end mb-3'>
                <button className="btn btn-success btn-sm"><i className="fa fa-plus me-1"></i> Add New Activity</button>
            </div>
            <table id="example2" className="table table-bordered table-hover dataTable dtr-inline"
                aria-describedby="example2_info">
                <thead>
                    <tr>
                        <th className="sorting sorting_asc" tabIndex="0" aria-controls="example2" rowSpan="1"
                            colSpan="1" aria-sort="ascending"
                            aria-label="Rendering engine: activate to sort column descending">Id
                        </th>
                        <th className="sorting" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1"
                            aria-label="Browser: activate to sort column ascending">Activities</th>
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

                    {!!tasks && tasks.length !== 0 && tasks.map((task, index) => {
                        return (
                        <tr key={index}>
                            <td className="dtr-control sorting_1" tabIndex="0">{task.id}</td>
                            <td>{task.task_name}</td>
                            <td><span className={`badge badge-${TASK_STATUS_CONFIG[task.status]}`}>{task.status}</span></td>
                            <td><span>{task.end_date}</span></td>
                            
                            <td><span className={`badge badge-${TASK_SEVERITY_CONFIG[task.severity]}`}>{task.severity}</span></td>
                            <td>{task.assignee}</td>
                        </tr>
                    )}
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default ProjectTasks;