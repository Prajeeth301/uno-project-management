import React, { useState } from 'react';

function GeneralProjectDetails({ values, onNext }) {
    const [projectName, setProjectName] = useState(values.projectName ? values.projectName : '');
    const [projectDescription, setProjectDescription] = useState(values.projectDescription ? values.projectDescription : '');

    const handleProjectNameChange = (event) => {
        setProjectName(event.target.value);
    };

    const handleProjectDescriptionChange = (event) => {
        setProjectDescription(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onNext({ ...values , projectName, projectDescription });
    };

    return (
        <div>
            <div className='text-center'>
                <h5>Project Information</h5>
                <small>Fill all information below</small>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="projectName">Project Name</label>
                    <input
                        type="text"
                        id="projectName"
                        className="form-control"
                        value={projectName}
                        onChange={handleProjectNameChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="projectDescription">Project Description</label>
                    <textarea id="projectDescription" className="form-control" rows="4" value={projectDescription} onChange={handleProjectDescriptionChange}></textarea>
                </div>


                <div className='d-flex justify-content-between mt-4'>
                    <span></span>
                    <button className='btn btn-primary btn-sm' type="submit">Next</button>
                </div>
            </form>
        </div>
    );
}

export default GeneralProjectDetails;