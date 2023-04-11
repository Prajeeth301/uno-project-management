import React from 'react';
import ghanaMap from '../../assets/ghana.png';
import './area-map.styles.css';

function AreaMap({ showProjectStatus }) {
    return (
        <div className='map-view'>
            <img src={ghanaMap} alt='ghana-map'></img>
            <div className='pins'>
                <span className='pin' id='savannah-region' onClick={() => showProjectStatus('001 - Zero Hunger')} title="001 - Zero Hunger"><i className="fas fa-map-pin fa-2x"></i></span>
                <span className='pin' id='northern' onClick={() => showProjectStatus('002 -  Clean Water and Sanitation')} title="002 -  Clean Water and Sanitation"><i className="fas fa-map-pin fa-2x"></i></span>
                <span className='pin' id='north-east' onClick={() => showProjectStatus('003 - Good Health and Well-being')} title="003 - Good Health and Well-being"><i className="fas fa-map-pin fa-2x"></i></span>
                <span className='pin' id='bond-east' onClick={() => showProjectStatus('005 - Climate Action')} title="005 - Climate Action"><i className="fas fa-map-pin fa-2x"></i></span>
            </div>
        </div>
    );
}

export default AreaMap;