import { data } from "../../data/recipes";
import { Recipe } from "../../types/globaltypes";
import Button from "../Button";
import SingleRecipe from "./SingleRecipe";

const AllRecipes = () => {
  return (
    <div className="lg:mx-14 mx-5 z-20">
      <div className=" flex justify-center items-center mb-8">
 
 <div className="">
 <h2 className="text-2xl text-orange-500 uppercase text-center">Start using your kitchen</h2>

 <div className="lg:flex flex-wrap space-x-3 space-y-3">
 <button className="bg-orange-500 text-white  px-6 py-2 rounded-full hover:bg-transparent hover:text-orange-500 hover:border  transition-all duration-150 delay-300   lg:h-10  lg:mt-4">
      All
    </button>
    
 <Button title="MAIN DISH"/>
 <Button title="CEREALS"/>
 <Button title="RAW FOOD"/>
 <Button title="MEAT"/>
 <Button title="SNACKS"/>
 <Button title="DESSERTS"/>
 </div>


 </div>

      </div>

      <div className="lg:grid grid-cols-4 gap-4 ">
        {data?.map((item: Recipe) => (
          <div key={item?.id}>
            <SingleRecipe item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllRecipes;
