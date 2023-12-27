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

export async function fetchRecipe(id){
    const url = `https://api.edamam.com/search?r=http://www.edamam.com/ontologies/edamam.owl%23${id}&app_id=${process.env.REACT_APP_EDAMAM_APP_ID}&app_key=${process.env.REACT_APP_EDAMAM_API_KEY}`
    
    const response = await fetch(url)
    
    const data = await response.json();
    
    return data[0];
    }