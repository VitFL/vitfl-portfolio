import { useState, useEffect } from "react";

function secondsToTime(secs) {
  var hours = Math.floor(secs / (60 * 60));

  var divisor_for_minutes = secs % (60 * 60);
  var minutes = Math.floor(divisor_for_minutes / 60);

  var divisor_for_seconds = divisor_for_minutes % 60;
  var seconds = Math.ceil(divisor_for_seconds);

  var obj = {
    h: hours,
    m: minutes,
    s: seconds
  };
  return obj;
}

const initialData = {
  labels: [],
  datasets: [
    {
      backgroundColor: "#51d3f2",
      borderColor: "#20b4d6",
      borderWidth: 1,
      hoverBackgroundColor: "#20b4d6",
      hoverBorderColor: "#20b4d6",
      data: []
    }
  ]
};

const initialOptions = {};

const useBarChartDataGenerator = (wakatimeJSON, options = null) => {
  const [chartData, setChartData] = useState(false);
  const [chartOptions, setChartOptions] = useState(false);
  useEffect(() => {
    const nextData = { ...initialData };
    Object.keys(wakatimeJSON).forEach(index => {
      nextData.labels = [...nextData.labels, wakatimeJSON[index].range.date];
      nextData.datasets[0].data = [
        ...nextData.datasets[0].data,
        wakatimeJSON[index].grand_total.total_seconds
      ];
    });
    const nextOptions = options ? options : { ...initialOptions };
    nextOptions.scales = {
      yAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "Hours"
          },
          ticks: {
            stepSize: 3600,
            callback: function(label, index, labels) {
              const time = secondsToTime(label);
              return `${time.h}`;
            }
          }
        }
      ]
    };
    nextOptions.tooltips = {
      callbacks: {
        title: function(tooltipItem, data) {
          return data["labels"][tooltipItem[0]["index"]];
        },
        label: function(tooltipItem, data) {
          const time = secondsToTime(
            data["datasets"][0]["data"][tooltipItem["index"]]
          );
          return `Coding: ${time.h} hours ${time.m} minutes`;
        }
      },
      backgroundColor: "#FFF",
      titleFontSize: 16,
      titleFontColor: "#0066ff",
      bodyFontColor: "#000",
      bodyFontSize: 14,
      displayColors: false
    };

    setChartData(nextData);
    setChartOptions(nextOptions);
  }, [wakatimeJSON, options]);
  return { chartData, chartOptions };
};

export default useBarChartDataGenerator;
