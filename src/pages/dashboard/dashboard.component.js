import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ghanaImage from '../../assets/ghana.png';
import MonthlyBudgetChart from '../../charts/budget/monthly/monthly-budget-chart.component';
import AreaMap from '../../components/area-map/area-map.component';
import ProjectMonthlyStatistics from '../../charts/projects/monthly-statistics/monthly-statistics.component';


function Dashboard(props) {
    const [activeRegion, setActiveRegion] = useState('');
    const [showRegionProjectStatus, setShowRegionProjectStatus] = useState(false);

    const showProjectStatus = (region) => {
        setActiveRegion(region);
        setShowRegionProjectStatus(true);
    }

    return (
        <div className="content pt-2">
            <div className='row'>
                <div className='col-md-12'>
                    <div className='card'>
                        <div className='card-header mb-0'>
                            <h5 className='card-title text-bold'>Afram Plains Development Organization (APDO)</h5>
                            <div className="card-tools">
                                <Link to="/map-view" className='btn bg-gradient-success btn-sm mr-2'>
                                    <i className="fa fa-map-marked"></i>  Map View
                                </Link>
                                <Link to="/projects" className='btn bg-gradient-success btn-sm mr-2'>
                                    <i className="fa fa-list-squares"></i>  List View
                                </Link>
                            </div>
                        </div>
                        <div className='card-body'>
                            <div className='row'>

                                <div className='col-md-6'>
                                    <AreaMap showProjectStatus={showProjectStatus} />
                                </div>
                                <div className='col-md-6'>
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="small-box">
                                                <div className="inner">
                                                    <h3>10</h3>
                                                    <p className='m-0'>Total Projects</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="small-box ">
                                                <div className="inner">
                                                    <h3>4</h3>
                                                    <p className='m-0'>Active Projects</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="small-box">
                                                <div className="inner">
                                                    <h3>6</h3>
                                                    <p className='m-0'>Completed Projects</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="small-box">
                                                <div className="inner">
                                                    <h3>65</h3>

                                                    <p className='m-0'>Our Team</p>
                                                </div>
                                                <div className="icon">
                                                    <i className="ion ion-pie-graph"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {showRegionProjectStatus ? <ProjectMonthlyStatistics /> : null}
                            {showRegionProjectStatus ? <MonthlyBudgetChart region={activeRegion} /> : null}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;