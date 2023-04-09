import React, { useState } from 'react';
import './upload-zone.styles.css';


const UPLOAD_ZONE_ACTIVE = true;
const UPLOAD_ZONE_INACTIVE = false;

function UploadZone({ handleFiles }) {
    const [isUploadZoneActive, setUploadZoneStatus] = useState(UPLOAD_ZONE_INACTIVE);

    const handleOnDragOver = (e) => {
        e.preventDefault();
        setUploadZoneStatus(UPLOAD_ZONE_ACTIVE);
    }

    const handleOnDragLeave = (e) => {
        e.preventDefault();
        setUploadZoneStatus(UPLOAD_ZONE_INACTIVE);
    }

    const handleOnDropFiles = (e) => {
        e.preventDefault();
        setUploadZoneStatus(UPLOAD_ZONE_INACTIVE);
        handleFiles(e.dataTransfer.files)
        console.log(e.dataTransfer.files);
    }

    return (
        <div className='upload-zone'>
            <div className={`upload-zone__container ${isUploadZoneActive ? 'active' : ''}`}
                onDragOver={handleOnDragOver}
                onDragLeave={handleOnDragLeave}
                onDrop = {handleOnDropFiles}
            >
                <p className='text'>Drag & Drop</p>
            </div>
        </div>
    );
}

export default UploadZone;