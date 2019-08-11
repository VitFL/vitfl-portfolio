import { useState, useEffect } from 'react';

const initialData = {
  labels: [],
  datasets: [
    {
      data: [],
      backgroundColor: [
        '#4dc9f6',
        '#f67019',
        '#f53794',
        '#537bc4',
        '#acc236',
        '#166a8f',
        '#00a950',
        '#58595b',
        '#8549ba',
      ],
    },
  ],
};

const initialOptions = {};

const usePieChartDataGenerator = (wakatimeJSON, options = null) => {
  const [chartData, setChartData] = useState(false);
  const [chartOptions, setChartOptions] = useState(false);
  useEffect(() => {
    const nextData = { ...initialData };
    Object.keys(wakatimeJSON).forEach((index) => {
      nextData.labels = [...nextData.labels, wakatimeJSON[index].name];
      nextData.datasets[0].data = [...nextData.datasets[0].data, wakatimeJSON[index].percent];
    });

    const nextOptions = options || { ...initialOptions };
    nextOptions.tooltips = {
      callbacks: {
        title(tooltipItem, data) {
          return data.labels[tooltipItem[0].index];
        },
        label(tooltipItem, data) {
          const tooltipData = data.datasets[0].data[tooltipItem.index];
          return `${tooltipData}%`;
        },
      },
      backgroundColor: '#FFF',
      titleFontSize: 16,
      titleFontColor: '#0066ff',
      bodyFontColor: '#000',
      bodyFontSize: 14,
      displayColors: true,
    };
    setChartData(nextData);
    setChartOptions(nextOptions);
  }, [wakatimeJSON, options]);
  return { chartData, chartOptions };
};

export default usePieChartDataGenerator;
