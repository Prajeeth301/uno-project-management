import React from 'react';
import { Link } from 'react-router-dom';


function Dashboard(props) {

    return (
        <div className="content pt-2">
            <div className="row">
                <div className="col-lg-6">
                    <div className="card">
                        <div className="card-header border-0">
                            <div className="d-flex justify-content-between">
                                <h3 className="card-title">Project Statistics</h3>
                                <Link to="/reports">View Report</Link>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="d-flex">
                                <p className="d-flex flex-column">
                                    <span className="text-bold text-lg">820</span>
                                    <span>Project Spread</span>
                                </p>
                                <p className="ml-auto d-flex flex-column text-right">
                                    {/* <span className="text-success">
                                        <i className="fas fa-arrow-up"></i> 12.5%
                                    </span>
                                    <span className="text-muted">Since last week</span> */}
                                </p>
                            </div>

                            <div className="position-relative mb-4">
                                <canvas id="visitors-chart" height="200"></canvas>
                            </div>

                            <div className="d-flex flex-row justify-content-end">
                                <span className="mr-2">
                                    <i className="fas fa-square text-primary"></i> This Week
                                </span>

                                <span>
                                    <i className="fas fa-square text-gray"></i> Last Week
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="card">
                        <div className="card-header border-0">
                            <div className="d-flex justify-content-between">
                                <h3 className="card-title">Budget Report</h3>
                                <Link to="/reports">View Report</Link>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="d-flex">
                                <p className="d-flex flex-column">
                                    <span className="text-bold text-lg">$18,230.00</span>
                                    <span>Total Budget</span>
                                </p>
                                <p className="ml-auto d-flex flex-column text-right">
                                    {/* <span className="text-success">
                                        <i className="fas fa-arrow-up"></i> 33.1%
                                    </span>
                                    <span className="text-muted">Since last month</span> */}
                                </p>
                            </div>

                            <div className="position-relative mb-4">
                                <canvas id="sales-chart" height="200"></canvas>
                            </div>

                            <div className="d-flex flex-row justify-content-end">
                                <span className="mr-2">
                                    <i className="fas fa-square text-primary"></i> Allocated budget
                                </span>

                                <span>
                                    <i className="fas fa-square text-gray"></i> Budget released
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;