import { useState, useEffect } from 'react';
import axios from 'axios';

const useGithubRepoMetaData = (repoURL) => {
  const [metaData, setMetaData] = useState(false);

  useEffect(() => {
    axios.get(repoURL).then((response) => {
      // setMetaData(getMetaData(response));
      console.log(response);
    });
  }, [repoURL]);

  return metaData;
};

export default useGithubRepoMetaData;
