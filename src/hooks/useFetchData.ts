import { useState, useEffect } from 'react'

interface FetchData {
  endpoint: string
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
  body?: any
  headers?: HeadersInit
}


function useFetchData({ endpoint, method = 'GET', body = null, headers = { 'Content-Type': 'application/json'}}: FetchData) {
  const [data, setData] = useState<[] | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(endpoint, { 
          method,
          body,
          headers 
        });
        if (!response.ok) {
          throw new Error(`Response error: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.log(error)
      }
    };

    fetchData();
  }, [endpoint, method]);

  return [ data ];
}

export default useFetchData