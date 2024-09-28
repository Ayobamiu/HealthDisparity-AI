// Function to set query parameters in the URL
export const setQueryParam = (key: string, value: string) => {
  const urlParams = new URLSearchParams(window.location.search);
  urlParams.set(key, value); // Set or update the key-value pair
  const newUrl = `${window.location.pathname}?${urlParams.toString()}`;
  window.history.pushState({}, "", newUrl); // Push the new URL state
};
// Function to get a query parameter value by key
export const getQueryParam = (key: string): string | null => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(key); // Returns the value or null if not found
};
