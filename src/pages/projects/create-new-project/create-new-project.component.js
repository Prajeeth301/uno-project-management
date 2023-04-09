import React, { useEffect, useState } from 'react';
import StepperTimeLine from './stepper-timeline/stepper-timeline.component';
import GeneralProjectDetails from './general-project-details/general-project-details.component';
import AddProjectMembers from './add-project-members/add-project-members.component';
import AddReportsAndDocs from './add-reports-docs/add-reports-docs.component';
import ProjectBudget from './project-budget/project-budget.component';

function CreateNewProject(props) {
    const [step, setStep] = useState(1);
    const [values, setValues] = useState({});

    const handleNext = (values) => {
        setStep(step + 1);
        setValues({ ...values });
    };

    const handlePrevious = () => {
        setStep(step - 1);
        setValues({ ...values });
    };

    const handleSubmit = (values) => {
        console.log(values);
        setValues({ ...values });
    };

    useEffect(() => {
        console.log(values);
    })

    return (
        <section className="content pt-2">
            <div className='row'>
                <div className='col-md-10 offset-md-1'>
                    <div className='card'>
                        <div className='card-header'>
                            <h5 className='text-muted text-center'>Create Project</h5>
                        <StepperTimeLine step={step} />
                        </div>
                        <div className='card-body'>
                            {step === 1 ? <GeneralProjectDetails values={values} onNext={handleNext} /> : null}
                            {step === 2 ? <AddProjectMembers values={values} onPrevious={handlePrevious} onNext={handleNext} /> : null}
                            {step === 3 ? <ProjectBudget values={values} onPrevious={handlePrevious} onNext={handleNext} /> : null}
                            {step === 4 ? <AddReportsAndDocs values={values} onPrevious={handlePrevious} onSubmit={handleSubmit} /> : null}
                        </div>
                    </div>
                </div>

            </div>
        </section >
    );
}

export default CreateNewProject;