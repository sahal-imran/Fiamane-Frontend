/**
 * Fetcher function for use with SWR
 * @param url - URL to fetch
 * @returns Promise of the fetched data
 */
const fetcher = <T>(url: string) =>
  fetch(url).then((res) => res.json()) as Promise<T>;

export default fetcher;
