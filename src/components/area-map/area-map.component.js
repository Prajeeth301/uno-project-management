import React from 'react';
import ghanaMap from '../../assets/ghana.png';
import './area-map.styles.css';

function AreaMap({ showProjectStatus }) {
    return (
        <div className='map-view'>
            <img src={ghanaMap} alt='ghana-map'></img>
            <div className='pins'>
                <span className='pin' id='savannah-region' onClick={() => showProjectStatus('Nutrition and Resilience')} title="Nutrition and Resilience"><i className="fas fa-map-pin fa-2x"></i></span>
                <span className='pin' id='northern' onClick={() => showProjectStatus('Food Security')} title="Food Security"><i className="fas fa-map-pin fa-2x"></i></span>
                <span className='pin' id='north-east' onClick={() => showProjectStatus('Promote Private Sector Engagement')} title="Promote Private Sector Engagement"><i className="fas fa-map-pin fa-2x"></i></span>
                <span className='pin' id='bond-east' onClick={() => showProjectStatus('Value and Supply Chains Enhancement')} title="Value and Supply Chains Enhancement"><i className="fas fa-map-pin fa-2x"></i></span>
            </div>
        </div>
    );
}

export default AreaMap;