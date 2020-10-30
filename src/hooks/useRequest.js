/**
 * Inspired from https://medium.com/thepolarlab/fetch-data-with-loading-and-error-state-in-react-hooks-a341706a6ffe
 */
import { useState, useEffect } from 'react';
import axios from 'axios';

const useRequest = (initUrl) => {
  const [data, setData] = useState({
    loading: false,
    ipData: [],
    error: null,
  });
  useEffect(() => {
    const fetchProduct = async () => {
      setData((prev) => ({
        ...prev,
        loading: true,
      }));
      try {
        const response = await axios(initUrl);
        setData((prev) => ({
          ...prev,
          ipData: response.data,
        }));
      } catch (err) {
        setData((prev) => ({
          ...prev,
          error: err,
        }));
      }
      setData((prev) => ({
        ...prev,
        loading: false,
      }));
    };
    fetchProduct();
  }, [initUrl]);

  return { data, setData };
};

export default useRequest;
