import { useState, useEffect } from "react";
import { UseFetchOptions, UseFetchResult } from "../types/hooks";

export const useFetch = <T = unknown>(
  url: string,
  options: UseFetchOptions = {},
): UseFetchResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async (signal?: AbortSignal) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(url, { ...options, signal });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result: T = await response.json();
      if (signal?.aborted) return;
      setData(result);
    } catch (err) {
      if (signal?.aborted) return;
      setError(err as Error);
    } finally {
      if (!signal?.aborted) setLoading(false);
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    fetchData(controller.signal);
    return () => controller.abort();
  }, [url, JSON.stringify(options)]);

  const refetch = () => {
    fetchData();
  };

  return { data, loading, error, refetch };
};
