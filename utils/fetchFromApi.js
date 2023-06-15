const FLAG_API = "https://restcountries.com/v3.1/all";

export const fetchFromApi = async (url) => {
  const response = await fetch(url);
  const data = await response.json();

  console.log(data);
};
