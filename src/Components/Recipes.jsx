import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import Loading from "./Loading";
import SearchBar from "./SearchBar";
import RecipeCard from "./RecipeCard";

function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [searh, setSearch] = useState("Pizza");
  const [limit, setLimit] = useState(30);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  } else {
    return (
      <div className="w-full">
        <div className="w-full flex items-center justify-center pt-10 pb-5 px-0 md:px-10">
          <form className="w-full lg:w-2/4">
            <SearchBar
              placeholder="Tasty Food"
              handleInputChange={handleChange}
              rightIcon={<BsSearch className="text-gray-600" />}
            />
          </form>
        </div>
        {
        recipes?.length>0?(
            <>
            <div className="w-full flex flex-wrap gap-10 px-0  lg:px-10 py-10">
            {
                recipes?.map((recipes,index) => (
                    <RecipeCard recipes = {recipes} key={index} />
                ))
            }
            </div>
            </>
        ): <div className="text-white w-full items-center justify-center py-10">
            <p className="text-center">No recipe found</p>
        </div>
        }
      </div>
    );
  }
}
export default Recipes;
