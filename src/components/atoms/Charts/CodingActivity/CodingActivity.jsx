import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My Coding Activity',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [4, 5, 8, 8, 5, 5, 4],
    },
  ],
};
const StatsContainer = ({ width, height, options }) => (
  <Bar data={data} width={width} height={height} options={options} />
);

export default StatsContainer;
