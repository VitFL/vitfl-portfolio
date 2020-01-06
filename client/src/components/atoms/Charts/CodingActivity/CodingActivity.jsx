import React from "react";
import { Bar } from "react-chartjs-2";
import * as wakatime from "@constants/wakatime";
import useWakaTimeJSON from "@hooks/wakatime/useWakaTimeJSON";
import useBarChartDataGenerator from "@hooks/wakatime/useBarChartDataGenerator";

const StatsContainer = ({ width, height, options }) => {
  const wakaTimeJSON = useWakaTimeJSON(wakatime.CODING_ACTIVITY_30DAYS);
  const { chartData, chartOptions } = useBarChartDataGenerator(
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
