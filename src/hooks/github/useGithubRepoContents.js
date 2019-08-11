import { useState, useEffect } from 'react';
import axios from 'axios';

const decodeContent = encodedContent => window.atob(encodedContent);

const useGithubRepoContents = (reposList, path) => {
  if (!reposList) return false;
  const [repoContent, setrepoContent] = useState(false);
  const contentsUrl = reposList.contents_url;
  const instance = axios.create({
    // baseURL,
    timeout: 4000,
    headers: {
      Accept: 'application/vnd.github.v3+json',
      Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
    },
  });
  useEffect(() => {
    instance.get(contentsUrl.replace('{+path}', path)).then((response) => {
      const result = decodeContent(response.data.content);
      setrepoContent(result);
    });
  }, [contentsUrl, path]);
  return repoContent;
};

export default useGithubRepoContents;
