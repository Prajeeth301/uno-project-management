import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import './monthly-budget-chart.styles.css';
import { BUDGET_REPORT_MONTHLY } from '../../../mocks/budget-monthly.mock';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

function MonthlyBudgetChart({ region }) {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: `Budget Report of ${region.toUpperCase()}`,
            },
        },
    };

    const labels = BUDGET_REPORT_MONTHLY.map(i => i.month);

    const data = {
        labels,
        datasets: [
            {
                label: 'Allocated budget',
                data: BUDGET_REPORT_MONTHLY.map(i => i.allocated_budget),
                backgroundColor: '#ea5455',
            },
            {
                label: 'Budget released',
                data: BUDGET_REPORT_MONTHLY.map(i => i.released_budget),
                backgroundColor: '#57BC90',
            },
        ],
    };
    return (
        <div>
            <Bar options={options} data={data} />
        </div>
    );
}

export default MonthlyBudgetChart;