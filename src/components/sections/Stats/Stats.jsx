// TODO:
// https://github.com/chartjs/Chart.js

import React, { useState, useEffect } from 'react';
import fetchJsonp from 'fetch-jsonp';

const getWakaTimeJSON = (days, type) => {
  const url30DaysCodingActivity = 'https://wakatime.com/share/@VitFL/6e2b5c5e-3bec-40a2-95da-dccb71d68654.json';
  const url30DaysLanguages = 'https://wakatime.com/share/@VitFL/8e2b6e41-650e-47ae-9fd7-280befcb1176.json';
  const url30DaysEditors = 'https://wakatime.com/share/@VitFL/ec5f2393-5519-4570-a5c1-6e47b5ba353e.json';
  const url7DaysCodingActivity = 'https://wakatime.com/share/@VitFL/526a8991-5b00-4588-a66e-a9061ca8b2e9.json';
  const url7DaysLanguages = 'https://wakatime.com/share/@VitFL/8b089e32-de21-4921-806e-94b629f922c8.json';
  const url7DaysEditors = 'https://wakatime.com/share/@VitFL/af25948c-86f4-4632-b9d7-0582006e1ced.json';

  let requestURL;

  switch (days + type) {
    case '7coding':
      requestURL = url7DaysCodingActivity;
      break;
    case '7languages':
      requestURL = url7DaysLanguages;
      break;
    case '7editors':
      requestURL = url7DaysEditors;
      break;
    case '30coding':
      requestURL = url30DaysCodingActivity;
      break;
    case '30languages':
      requestURL = url30DaysLanguages;
      break;
    case '30editors':
      requestURL = url30DaysEditors;
      break;
    default:
      break;
  }

  return fetchJsonp(requestURL)
    .then(response => response.json())
    .then(json => json)
    .catch(() => false);
};

const Stats = () => {
  const [wakatimeJSON, setWakatimeJSON] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const result = await getWakaTimeJSON(7, 'coding');
      setWakatimeJSON(result.data);
    };
    fetchData();
  }, []);
  return JSON.stringify(wakatimeJSON);
};

export default Stats;
