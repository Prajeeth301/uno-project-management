import React, { useState } from 'react';
import UploadZone from '../../../../components/upload-zone/upload-zone.component';

function AddReportsAndDocs({ values, onSubmit, onPrevious }) {
    const [reportsAndDocs, setReportsAndDocs] = useState(values.reportsAndDocs ? values.reportsAndDocs : []);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ ...values, reportsAndDocs });
    };

    const handleFiles = (files) => {
        if (files.length) {
            setReportsAndDocs(files);
        }
    }

    const removeFile = (fileIndex) => {
        let updatedReportsAndDocs = [...reportsAndDocs].filter((file, index) => index !== fileIndex);
        setReportsAndDocs(updatedReportsAndDocs);
    }


    return (
        <div>
            <div className='text-center'>
                <h5>Attached Files</h5>
                <small>Upload Attached Files</small>
            </div>
            <form onSubmit={handleSubmit}>
                <UploadZone handleFiles={handleFiles} />
                {
                    [...reportsAndDocs].map((item, index) => (
                        <div className='d-flex justify-content-between align-items-center my-2 p-2 border' key={index} >
                            <small className='text-muted'><strong>{item.name}</strong></small>

                            <div onClick={() => removeFile(index)}>
                                <span class="btn btn-light btn-sm">
                                    <i class="fas fa-trash"></i>
                                </span>
                            </div>
                        </div>
                    ))
                }
                <div className='d-flex justify-content-between mt-4'>
                    <button className='btn btn-primary btn-sm' onClick={onPrevious} >Prev</button>
                    <button className='btn btn-success btn-sm' type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default AddReportsAndDocs;