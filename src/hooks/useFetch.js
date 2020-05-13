import { useEffect, useState } from "react";

const useFetch = (initialUrl) => {
  const [data, setData] = useState(null);
  const [apiError, setApiError] = useState(null);
  const [waiting, setWaiting] = useState(false);
  const [apiUrl, setApiUrl] = useState(initialUrl);

  useEffect(() => {
    if (!apiUrl) return;
    setWaiting(true);
    setData(null);
    fetch(apiUrl)
      .then((r) => r.json())
      .then((data) => {
        setWaiting(false);
        if (data.cod >= 400) {
          setApiError(data.message);
          return;
        }
        setData(data);
      })
      .catch((error) => {
        setWaiting(false);
        setApiError(error);
      });
  }, [apiUrl]);

  return { data, apiError, waiting, setApiUrl };
};

export default useFetch;
