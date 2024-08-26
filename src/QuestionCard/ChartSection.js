import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the necessary components
ChartJS.register(ArcElement, Tooltip, Legend);

function ChartSection() {
    const data = {
        labels: ['Correct', 'Wrong', 'Skipped'],
        datasets: [
            {
                label: 'My First Dataset',
                data: [300, 50, 100],
                backgroundColor: [
                    '#06b403',
                    '#ffc300',
                    '#f54747'
                ],
                borderColor: [
                    '#06b403',
                    '#ffc300',
                    '#f54747'
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        // responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    font: {
                        size: 23,
                        weight: '400',
                        color: 'black',
                    },
                },
            },
            title: {
                display: true,
                text: 'Doughnut Chart Example',
                font: {
                    size: 24,
                    weight: 'bold',
                    color: 'black', // Change this value to set the font color of the title
                },
            },
        },
    };

    return (<>
            <Doughnut data={data} options={options} />
            </>
    );
}

export default ChartSection;
