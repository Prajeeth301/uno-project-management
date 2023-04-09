import React from 'react';
import './stepper-timeline.styles.css';

function StepperTimeLine({step}) {
    console.log(step);
    return (
        <ul className="h-timeline">
            <li className="timeline-item">
                <div className={`list-item ${step === 1 ? 'active' : ''}`} id="item1">
                    <div className="step-icon"><i className="fas fa-sticky-note"></i></div>
                </div>
            </li>
            <li className="timeline-item">
                <div className={`list-item ${step === 2 ? 'active' : ''}`} id="item2">
                    <div className="step-icon"><i className="fas fa-users"></i></div>
                </div>
            </li>
            <li className="timeline-item">
                <div className={`list-item ${step === 3 ? 'active' : ''}`} id="item3">
                    <div className="step-icon"><i className="fas fa-cash-register"></i></div>
                </div>
            </li>
            <li className="timeline-item">
                <div className={`list-item ${step === 4 ? 'active' : ''}`} id="item4">
                    <div className="step-icon"><i className="fas fa-paperclip"></i></div>
                </div>
            </li>
        </ul>
    );
}

export default StepperTimeLine;