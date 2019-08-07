import React from "react";
import { Pie } from "react-chartjs-2";
import * as wakatime from "@constants/wakatime";
import useWakaTimeJSON from "@hooks/wakatime/useWakaTimeJSON";
import usePieChartDataGenerator from "@hooks/wakatime/usePieChartDataGenerator";

const StatsContainer = ({ width, height, options }) => {
  const wakaTimeJSON = useWakaTimeJSON(wakatime.LANGUAGES_7DAYS);
  const { chartData, chartOptions } = usePieChartDataGenerator(
    wakaTimeJSON,
    options
  );
  return (
    <Pie
      data={chartData || {}}
      width={width}
      height={height}
      options={chartOptions || {}}
    />
  );
};

export default StatsContainer;
