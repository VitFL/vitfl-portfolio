import { useState, useEffect } from "react";
import fetchJsonp from "fetch-jsonp";
import * as wakatime from "@constants/wakatime";

const getRequestURL = type => {
  let requestURL;
  switch (type) {
    case wakatime.CODING_ACTIVITY_7DAYS:
      requestURL = wakatime.URL_CODING_ACTIVITY_7DAYS;
      break;
    case wakatime.LANGUAGES_7DAYS:
      requestURL = wakatime.URL_LANGUAGES_7DAYS;
      break;
    case wakatime.EDITORS_7DAYS:
      requestURL = wakatime.URL_EDITORS_7DAYS;
      break;
    case wakatime.CODING_ACTIVITY_30DAYS:
      requestURL = wakatime.URL_CODING_ACTIVITY_30DAYS;
      break;
    case wakatime.LANGUAGES_30DAYS:
      requestURL = wakatime.URL_LANGUAGES_30DAYS;
      break;
    case wakatime.EDITORS_30DAYS:
      requestURL = wakatime.URL_EDITORS_30DAYS;
      break;
    default:
      break;
  }
  return requestURL || false;
};

const getWakaTimeJSON = type => {
  const requestURL = getRequestURL(type);
  if (!requestURL) return false;
  return fetchJsonp(requestURL)
    .then(response => response.json())
    .then(json => json)
    .catch(() => false);
};

const useWakaTimeJSON = type => {
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
