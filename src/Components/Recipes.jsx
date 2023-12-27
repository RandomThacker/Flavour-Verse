import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import Loading from "./Loading";
import SearchBar from "./SearchBar";
import RecipeCard from "./RecipeCard";
import { fetchRecipes } from "../utils";
import Button from "./Button";

function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("Vegan");
  const [limit, setLimit] = useState(32);
  const [loading, setLoading] = useState(false);

  const showMore = ()=>{
    setLoading(true)
    setLimit((prev)=>prev+12)
    getRecipes()
  }

  const handleSearch=async(e)=>{
      e.preventDefault()
      setLimit(32)
      getRecipes()
  }

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const getRecipes = async () => {
    try{
      const data = await fetchRecipes({search, limit})
    setRecipes(data)
    setLoading(false)
    }
    catch(error){
      console.log(error);
    }
    finally{
      setLoading(false)
    }
  }

useEffect(()=>{
    setLoading(true)
    getRecipes()
},[])

  if (loading) {
    return (
        <Loading />
    );
  } 
    return (
      <div className="w-full">
        <div className="w-full flex items-center justify-center pt-10 pb-5 px-0 md:px-10">
          <form className="w-full lg:w-2/4" onSubmit={handleSearch}>
            <SearchBar
              placeholder="Tasty Food"
              handleInputChange={handleChange}
              rightIcon={<BsSearch className="text-gray-600" onClick={handleSearch} />}
            />
          </form>
        </div>
        {
        recipes?.length>0?(
            <>
            <div className="w-full flex align-center justify-center flex-wrap gap-10 px-0 lg:px-10 py-10">
            {
                recipes?.map((item,index) => (
                    <RecipeCard recipe = {item} key={index} />
                ))
            }
            </div>

            <div className="flex w-full items-center justify-center py-10">

              <Button title="Show More" containerStyle="bg-green-800 text-white px-3 py-1 rounded-full text-sm" handleClick={showMore}/> 
              </div>
            </>
        ): <div className="text-white w-full items-center justify-center py-10">
            <p className="text-center">No recipe found</p>
        </div>
        }
      </div>
    );
  }
export default Recipes;
