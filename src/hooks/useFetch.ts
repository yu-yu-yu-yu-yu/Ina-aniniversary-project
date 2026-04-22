import { useState, useEffect } from 'react';
import { UseFetchOptions, UseFetchResult } from '../types/hooks';

export const useFetch = <T = unknown>(
  url: string,
  options: UseFetchOptions = {}
): UseFetchResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result: T = await response.json();
      setData(result);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url, JSON.stringify(options)]);

  const refetch = () => {
    fetchData();
  };

  return { data, loading, error, refetch };
};