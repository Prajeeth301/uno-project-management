import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { USERS_MOCK } from '../../mocks/users.mock';

function Users(props) {

    // const tableRef = useRef(null);

    useEffect(() => {
        // $("#table").DataTable({
        //     "paging": true,
        //     "lengthChange": false,
        //     "searching": true,
        //     "ordering": true,
        //     "info": true,
        //     "autoWidth": false,
        //     "responsive": true,
        //   });
    })

    return (
        <section className="content pt-2">
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Users</h3>

                            <div className="card-tools">
                                <Link to="/users/add-user" className='btn bg-gradient-success btn-sm'>
                                <i className="fa fa-plus"></i> Add User
                                </Link>
                            </div>
                        </div>
                        <div className="card-body">
                            <table id='table' className="table table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Contact</th>
                                        <th>Role</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {USERS_MOCK.map((user) => (
                                        <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.contact}</td>
                                            <td>{user.role}</td>
                                            <td>{user.status}</td>
                                            <td>
                                                <Link className="btn btn-info btn-sm mr-1" to="/">
                                                    <i className="fas fa-pencil-alt mr-1">
                                                    </i>
                                                    Edit
                                                </Link>
                                                <Link className="btn btn-danger btn-sm mr-1" to="/">
                                                    <i className="fas fa-trash mr-1">
                                                    </i>
                                                    Delete
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Users;