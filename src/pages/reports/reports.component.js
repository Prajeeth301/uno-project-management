import React from 'react';
import { REPORTS_MOCK } from '../../mocks/reports.mock';
import './reports.styles.css';

function Reports(props) {
    let { documents } = REPORTS_MOCK;
    return (
        <div className='content pt-2'>
            <div className='row'>

            {
                documents.map((item, index) => (
                    <div className='col-md-3'>

                    <div className='card report'>
                        <div className='card-body' key={index} >

                            <small className='text-muted'><strong>{item.name}</strong></small>
                        </div>
                        <div className="card-footer d-flex justify-content-center">
                                <button type="submit" className="btn btn-primary btn-sm">preview</button>
                        </div>
                    </div>
                    </div>
                ))
            }
            </div>

        </div>
    );
}

export default Reports;