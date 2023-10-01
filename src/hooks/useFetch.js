import axios from 'axios';
import { useEffect, useState } from 'react';

export const useFetch = (URL) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchData = async (URL) => {
    setIsLoading(true);
    try {
      const response = await axios.get(URL);
      setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(URL);
  }, [URL]);

  return { data, isLoading, isError };
};
