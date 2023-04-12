import React, { useState } from 'react';
// import Maps from '../../components/maps/maps.component';
import { GHANA_REGIONS } from '../../mocks/regions.mock';
import { PROJECTS_MOCK } from '../../mocks/projects.mock';
import { PROJECT_CATEGORIES } from '../../config/project-categories.config';
import { DEVELOPMENT_PARTNERS } from '../../mocks/development-partners.mock';
import AreaMap from '../../components/area-map/area-map.component';
import { DISTRICTS_MOCK } from '../../mocks/districts.mock';
import { SDG_WISE_PROJECTS } from '../../mocks/sdg-wise-projects.mock';

function MapView(props) {
    const [activeSDG, setActiveSDG] = useState('No Poverty');
    const [projects, setProjects] = useState(SDG_WISE_PROJECTS['No Poverty']);

    const handleSdgChange = (e) => {
        setActiveSDG(e.target.value);
        let projects = SDG_WISE_PROJECTS[e.target.value];
        if(!!projects){
            setProjects(projects);
        }else{
            setProjects([]);
        }
    }

    const showProjectStatus = (region) => {
        console.log(region);
    }

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
                                <label>Development Partner</label>
                                <select className="form-control">
                                    {
                                        DEVELOPMENT_PARTNERS.map((developmentPartner, index) => <option key={index}>{developmentPartner}</option>)
                                    }
                                </select>
                            </div>
                        </div>

                        <div className='col-md-3'>

                            <div className="form-group">
                                <label>SDG</label>
                                <select className="form-control" onChange={handleSdgChange} value={activeSDG}>
                                    {
                                        PROJECT_CATEGORIES.map((category, index) => <option key={index}>{category}</option>)
                                    }
                                </select>
                            </div>
                        </div>
                        <div className='col-md-3'>

                            <div className="form-group">
                                <label>Project Number</label>
                                <select className="form-control">
                                    {
                                        allProjects.map((project, index) => <option key={index}>{project.projectId}</option>)
                                    }
                                </select>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className="form-group">
                                <label>Project Name</label>
                                <select className="form-control">
                                    {
                                        projects.map((project, index) => <option key={index}>{project}</option>)
                                    }
                                </select>
                            </div>

                        </div>
                        
                        <div className='col-md-3'>

                            <div className="form-group">
                                <label>Region</label>
                                <select className="form-control">
                                    {
                                        GHANA_REGIONS.map((region, index) => <option key={index} selected={region === "Northern Region"}>{region}</option>)
                                    }
                                </select>
                            </div>
                        </div>
                        <div className='col-md-3'>

                            <div className="form-group">
                                <label>District</label>
                                <select className="form-control">
                                    {
                                        DISTRICTS_MOCK.map((district, index) => <option key={index}>{district}</option>)
                                    }
                                </select>
                            </div>
                        </div>
                    </div>
                            {/* <Maps /> */}
                            <div className='row'>
                                <div className=' col-md-8'>
                                    <AreaMap showProjectStatus={showProjectStatus} />
                                </div>
                                <div className=' col-md-4'>
                                    <div className='card-body'>
                                        
                                        <div className='small-box'>
                                        <div className='inner'>
                                        <h4>2M $</h4>
                                        <p>Budget Contribution</p>
                                        </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MapView;