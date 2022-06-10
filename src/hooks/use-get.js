import { useEffect, useState } from "react";

const useGet = (store, fetching, init) => {
  const [data, setData] = useState(init);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (fetching) {
      setIsLoading(true);
      fetch(`https://portfolio-f4722-default-rtdb.firebaseio.com/${store}.json`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsLoading(false);
          return data;
        })
        .catch((err) => {
          let error = "Somthing went wrong";
          if (err && err.message) {
            error = err.message;
          }
          setError(error);

          setIsLoading(false);
        });
    }
  }, [fetching]);

  return { data, isLoading, error };
};
export default useGet;
