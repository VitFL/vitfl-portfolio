import { useState, useEffect } from 'react';
import fetchJsonp from 'fetch-jsonp';
import * as statsConsts from '@constants/stats';

const getRequestURL = (type) => {
  let requestURL;
  switch (type) {
    case statsConsts.CODING_ACTIVITY_7DAYS:
      requestURL = statsConsts.URL_CODING_ACTIVITY_7DAYS;
      break;
    case statsConsts.LANGUAGES_7DAYS:
      requestURL = statsConsts.URL_LANGUAGES_7DAYS;
      break;
    case statsConsts.EDITORS_7DAYS:
      requestURL = statsConsts.URL_EDITORS_7DAYS;
      break;
    case statsConsts.CODING_ACTIVITY_30DAYS:
      requestURL = statsConsts.URL_CODING_ACTIVITY_30DAYS;
      break;
    case statsConsts.LANGUAGES_30DAYS:
      requestURL = statsConsts.URL_LANGUAGES_30DAYS;
      break;
    case statsConsts.EDITORS_30DAYS:
      requestURL = statsConsts.URL_EDITORS_30DAYS;
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

const useWakaTimeJSON = (type) => {
  const [wakatimeJSON, setWakatimeJSON] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const result = await getWakaTimeJSON(type);
      setWakatimeJSON(result.data);
    };
    fetchData();
  }, [type]);
  return wakatimeJSON;
};

export default useWakaTimeJSON;
