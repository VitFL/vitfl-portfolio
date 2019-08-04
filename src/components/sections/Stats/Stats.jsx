// TODO:
// https://github.com/chartjs/Chart.js

import React, { useState, useEffect } from 'react';
import fetchJsonp from 'fetch-jsonp';
import { Container } from 'reactstrap';
import SectionHeader from '@atoms/SectionHeader/SectionHeader';
import {
  CODING_ACTIVITY_7DAYS,
  LANGUAGES_7DAYS,
  EDITORS_7DAYS,
  CODING_ACTIVITY_30DAYS,
  LANGUAGES_30DAYS,
  EDITORS_30DAYS,
  URL_CODING_ACTIVITY_7DAYS,
  URL_LANGUAGES_7DAYS,
  URL_EDITORS_7DAYS,
  URL_CODING_ACTIVITY_30DAYS,
  URL_LANGUAGES_30DAYS,
  URL_EDITORS_30DAYS,
} from '@constants/stats';
import StatsContainer from './StatsContainer';

const getRequestURL = (type) => {
  let requestURL;
  switch (type) {
    case CODING_ACTIVITY_7DAYS:
      requestURL = URL_CODING_ACTIVITY_7DAYS;
      break;
    case LANGUAGES_7DAYS:
      requestURL = URL_LANGUAGES_7DAYS;
      break;
    case EDITORS_7DAYS:
      requestURL = URL_EDITORS_7DAYS;
      break;
    case CODING_ACTIVITY_30DAYS:
      requestURL = URL_CODING_ACTIVITY_30DAYS;
      break;
    case LANGUAGES_30DAYS:
      requestURL = URL_LANGUAGES_30DAYS;
      break;
    case EDITORS_30DAYS:
      requestURL = URL_EDITORS_30DAYS;
      break;
    default:
      break;
  }
  return requestURL || false;
};

const getWakaTimeJSON = (type) => {
  const requestURL = getRequestURL(type);
  if (!requestURL) return false;
  return fetchJsonp(requestURL)
    .then(response => response.json())
    .then(json => json)
    .catch(() => false);
};

const Stats = () => {
  const [wakatimeJSON, setWakatimeJSON] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const result = await getWakaTimeJSON(CODING_ACTIVITY_7DAYS);
      setWakatimeJSON(result.data);
    };
    fetchData();
  }, []);
  // JSON.stringify(wakatimeJSON);
  return (
    <>
      <Container className="section-container bg-primary">
        <SectionHeader title="My activity stats" />
        <StatsContainer />
      </Container>
    </>
  );
};

export default Stats;
