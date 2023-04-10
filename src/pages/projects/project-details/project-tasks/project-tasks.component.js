import React from 'react';
import { TASK_STATUS_CONFIG } from '../../../../config/task-status.config';
import { TASK_SEVERITY_CONFIG } from '../../../../config/task-severity.config';

function ProjectTasks({ tasks }) {
    return (
        <div>
            <div className='d-flex justify-content-end mb-3'>
                <button className="btn btn-success btn-sm"><i class="fa fa-plus me-1"></i> Add New Task</button>
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



                    {/*                 
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

                    </tr> */}

                </tbody>
            </table>
            {/* <div className="row">
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
            </div> */}
        </div>
    );
}

export default ProjectTasks;