import { useState, useEffect } from "react";
import axios, { AxiosResponse, AxiosRequestConfig } from "axios";

export const useAxios = (axiosParams: AxiosRequestConfig) => {
  const [response, setResponse] = useState<AxiosResponse>();
  //   const [error, setError] = useState<AxiosError | Error | unknown>();

  const fetchData = async (params: AxiosRequestConfig) => {
    try {
      const result = await axios.request(params);
      setResponse(result);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData(axiosParams);
  }, []);

  return { response };
};
