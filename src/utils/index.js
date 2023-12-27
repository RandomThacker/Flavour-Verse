const REACT_APP_EDAMAM_APP_ID = "2c968f05";
const REACT_APP_EDAMAM_API_KEY = "bedcb096a4e465536e3db1374c58aa7b";

export async function fetchRecipes(filter) {
  const { search, limit } = filter;

  const url = `https://api.edamam.com/search?q=${search}&app_id=${REACT_APP_EDAMAM_APP_ID}&app_key=${REACT_APP_EDAMAM_API_KEY}&from=0&to=${limit}&`;

  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data?.hits;
}
