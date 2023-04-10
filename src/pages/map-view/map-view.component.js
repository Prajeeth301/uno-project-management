import React from 'react';
import Maps from '../../components/maps/maps.component';
import { GHANA_REGIONS } from '../../mocks/regions.mock';
import { PROJECTS_MOCK } from '../../mocks/projects.mock';

function MapView(props) {
    let allProjects = [...PROJECTS_MOCK.ongoingProjects, ...PROJECTS_MOCK.upcomingProjects]


    return (
        <div className='content pt-2'>
            <div className="row">
                <div className="col-lg-12">
                    <div className='card'>
                        <div className='card-body'>
                            {/* GHANA_REGIONS */}
                            <h6 className='text-muted'>Filter By:</h6>
                            <div className='row'>
                                <div className='col-md-3'>
                                    <div className="form-group">
                                        <label>Project Name</label>
                                        <select className="form-control">
                                            {
                                                allProjects.map((project, index) => <option key={index}>{project.name}</option>)
                                            }
                                        </select>
                                    </div>

                                </div>
                                <div className='col-md-3'>

                                    <div className="form-group">
                                        <label>Project Type</label>
                                        <select className="form-control">
                                            {
                                                allProjects.map((project, index) => <option key={index}>{project.type}</option>)
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className='col-md-3'>

                                    <div className="form-group">
                                        <label>Region</label>
                                        <select className="form-control">
                                            {
                                                GHANA_REGIONS.map((region, index) => <option key={index}>{region}</option>)
                                            }
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <Maps />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MapView;