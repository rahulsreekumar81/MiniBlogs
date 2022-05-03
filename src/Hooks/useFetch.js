import { useState, useEffect } from "react";

const useFetch = (url) => {
  //Passing the URL as a argument to the hook foer code reuseability
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortController.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not fetch the data from the server");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsLoading(false);
          setError(null);
        })
        .catch((error) => {
          if (error.name === "AbortError") {
            console.log("Fetch Aborted");
          } else {
            setError(error.message);
            setIsLoading(false);
          }
        });
    }, 2000);
    return () => abortController.abort();
  }, [url]);
  //URL is also added as an dependency in the useEffect Hooks
  //Whenever the url change the useEffect will run.

  // Returning the data from the hook
  return { data, isLoading, error };
};

export default useFetch;
