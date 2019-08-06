import React from "react";
import { Bar } from "react-chartjs-2";
import * as wakatime from "@constants/wakatime";
import useWakaTimeJSON from "@hooks/wakatime/useWakaTimeJSON";
import useChartDataGenerator from "@hooks/wakatime/useChartDataGenerator";

const StatsContainer = ({ width, height, options }) => {
  const wakaTimeJSON = useWakaTimeJSON(wakatime.CODING_ACTIVITY_7DAYS);
  const { chartData, chartOptions } = useChartDataGenerator(
    wakaTimeJSON,
    options
  );
  return (
    <Bar
      data={chartData || {}}
      width={width}
      height={height}
      options={chartOptions || {}}
    />
  );
};

export default StatsContainer;
