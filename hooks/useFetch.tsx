import fetcher from "lib/fetcher";
import useSWR from "swr";

/**
 * Fetch data from an API
 * @param url - URL to fetch
 * @returns Data, isLoading and isError
 */
export default function useFetch<Data = any, Error = any>(url: string) {
  const { data, error } = useSWR<Data, Error>(url, fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}
