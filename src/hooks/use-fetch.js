import { useState, useEffect } from "react";
import { getDownloadURL } from "firebase/storage";

const useFetch = (path) => {
  const [isLoading, setIsLoading] = useState(true);
  const [url, setUrl] = useState("");
  const [err, setErr] = useState(false);

  useEffect(() => {
    let isFetching = false;
    const getData = async () => {
      isFetching = true;
      setIsLoading(false);

      const res = await getDownloadURL(path);

      setUrl(res);
    };
    getData().catch((err) => {
      setIsLoading(false);
      setErr(true);
      console.log(err);
    });
    return () => {
      isFetching = false;
      return isFetching;
    };
  }, [path]);
  return {
    isLoading,
    url,
    err,
  };
};
export default useFetch;
