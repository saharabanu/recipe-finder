import { useState } from "react";
import { data } from "../../data/recipes";
import { Recipe } from "../../types/globaltypes";
import Button from "../Button";
import SingleRecipe from "./SingleRecipe";

const AllRecipes = () => {

    const [currentCategory, setCurrentCategory] = useState<string | null>(null);

    const handleCategoryClick = (category: string | null) => {
      setCurrentCategory(category === currentCategory ? null : category);
    };
  
    const filteredData = currentCategory ? data?.filter(item => item.category === currentCategory) : data;


  return (
    <div className="lg:mx-14 mx-5 z-20">
      <div className=" flex justify-center items-center mb-8">
 
 <div className="">
 <h2 className="text-2xl text-orange-500 uppercase text-center">Start using your kitchen</h2>

 <div className="lg:flex flex-wrap space-x-3 space-y-3">
            <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-transparent hover:text-orange-500 hover:border transition-all duration-150 delay-300 lg:h-10 lg:mt-4" onClick={() => handleCategoryClick(null)}>
              All
            </button>
            <Button title="MAIN DISH" onClick={() => handleCategoryClick("MAIN DISH")} />
            <Button title="CEREALS" onClick={() => handleCategoryClick("CEREALS")} />
            <Button title="RAW FOOD" onClick={() => handleCategoryClick("RAW FOOD")} />
            <Button title="MEAT" onClick={() => handleCategoryClick("MEAT")} />
            <Button title="SNACKS" onClick={() => handleCategoryClick("SNACKS")} />
            <Button title="DESSERTS" onClick={() => handleCategoryClick("DESSERTS")} />
          </div>


 </div>

      </div>

      <div className="lg:grid grid-cols-4 gap-4 ">
        {filteredData?.map((item: Recipe) => (
          <div key={item?.id}>
            <SingleRecipe item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllRecipes;
