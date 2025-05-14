import { useEffect, useState } from "react";

// Custom hook to fetch data
//Make the code reusable by passing the fetch function and the initial value
export function useFetch(fetchFn, initialValue) {
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();
  const [fetchedData, setFetchedData] = useState(initialValue);

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);

      try {
        const data = await fetchFn();
        console.log(data);
        setFetchedData(data);
      } catch (error) {
        setError({
          message: error.message || "Failed to fetch data",
        });
      } finally {
        setIsFetching(false);
      }
    }

    fetchData();
  }, [fetchFn]);

  return { isFetching, error, fetchedData, setFetchedData };
}
