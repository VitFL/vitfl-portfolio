import { useState, useEffect } from 'react';
import axios from 'axios';
import * as GITHUB from '@constants/github';

const reposInfo = (responseJSON) => {
  const reposInfoArray = responseJSON.data.items.map(item => ({
    full_name: item.full_name,
    name: item.name,
    description: item.description,
    html_url: item.html_url,
    contents_url: item.contents_url,
    created_at: item.created_at,
    updated_at: item.updated_at,
  }));
  return reposInfoArray;
};

const useGithubRepos = (user, topic) => {
  const [reposList, setreposList] = useState(false);

  const instance = axios.create({
    baseURL: GITHUB.restEndpoint,
    timeout: 4000,
    headers: {
      Accept: 'application/vnd.github.v3+json',
      Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
    },
  });
  useEffect(() => {
    instance.get(`/search/repositories?q=user:${user}+topic:${topic}`).then((response) => {
      setreposList(reposInfo(response));
    });
  }, [user, topic]);

  return reposList;
};

export default useGithubRepos;
