import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import { Routes, Route, Outlet } from "react-router-dom";
import RecipeDetail from "./pages/RecipeDetail";
import Recipes from "./Components/Recipes";

function Layout(){
  return(
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default function App() {
  return (
    <div className="bg-black">
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="recipes" element = {<Recipes/>} />
        <Route path="recipes/:id" element = {<RecipeDetail/>} />
        </Route>
      </Routes>
      {/* <Navbar/> */}
    </div>
  )
}