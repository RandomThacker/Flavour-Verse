import React, { useState } from 'react'
import {BsSearchAlt2} from 'react-icons/bs'

function Recipes() {
    const[recipes, setRecipes] = useState([]);
    const[searh, setSearch] = useState("Pizza");
    const[limit, setLimit] = useState(30)
    const[loading, setLoading] = useState("false");
    
  return (
    <div>
      recipes
    </div>
  )
}

export default Recipes
