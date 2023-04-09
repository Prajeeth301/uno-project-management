import React, { useState } from 'react';

function ProjectBudget({ values, onNext, onPrevious }) {
    const [estimatedBudget, setEstimatedBudget] = useState(values.estimatedBudget ? values.estimatedBudget : 0);
    const [totalAmountSpent, setTotalAmountSpent] = useState(values.totalAmountSpent ? values.totalAmountSpent : 0);
    const [estimatedDuration, setEstimatedDuration] = useState(values.estimatedDuration ? values.estimatedDuration : 0);

    const handleSubmit = (e) => {
        e.preventDefault();
        onNext({ ...values, estimatedBudget, totalAmountSpent, estimatedDuration });
    };

    const handleEstimatedBudgetChange = (event) => {
        setEstimatedBudget(event.target.value);
    };

    const handleTotalAmountSpentChange = (event) => {
        setTotalAmountSpent(event.target.value);
    };

    const handleEstimatedDurationChange = (event) => {
        setEstimatedDuration(event.target.value);
    };


    return (
        <div>
            <div className='text-center'>
                <h5>Project Budget</h5>
                <small>Allocate project budget</small>
            </div>
            <form onSubmit={handleSubmit}>

                <div className="form-group">
                    <label htmlFor="estimatedBudget">Estimated budget</label>
                    <input
                        type="number"
                        id="estimatedBudget"
                        className="form-control"
                        value={estimatedBudget}
                        onChange={handleEstimatedBudgetChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="spentBudget">Total amount spent</label>
                    <input
                        type="number"
                        id="spentBudget"
                        className="form-control"
                        value={totalAmountSpent}
                        onChange={handleTotalAmountSpentChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="estimatedDuration">Estimated project duration</label>
                    <input
                        type="number"
                        id="estimatedDuration"
                        className="form-control"
                        value={estimatedDuration}
                        onChange={handleEstimatedDurationChange}
                    />
                </div>

                <div className='d-flex justify-content-between mt-4'>
                    <button className='btn btn-primary btn-sm' onClick={onPrevious} >Prev</button>
                    <button className='btn btn-primary btn-sm' type="submit">Next</button>
                </div>
            </form>
        </div>
    );
}

export default ProjectBudget;