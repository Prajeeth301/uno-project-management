import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import './monthly-statistics.styles.css';

import { PROJECT_REPORT_MONTHLY } from '../../../mocks/project-report-monthly.mock';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

function ProjectMonthlyStatistics(props) {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: `Project Statistics`,
            },
        },
    };

    const labels = PROJECT_REPORT_MONTHLY.map(i => i.month);

    const data = {
        labels,
        datasets: [
            {
                label: 'Last Year',
                data: PROJECT_REPORT_MONTHLY.map(i => i.last_week),
                backgroundColor: '#ea5455',
            },
            {
                label: 'This Year',
                data: PROJECT_REPORT_MONTHLY.map(i => i.this_week),
                backgroundColor: '#57BC90',
            },
        ],
    };
    return (
        <div className='mb-5'>
            <Line options={options} data={data} />;
        </div>
    );
}

export default ProjectMonthlyStatistics;