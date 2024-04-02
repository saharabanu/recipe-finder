import {  SingleRecipeProps } from "../../types/globaltypes";

import { BiLike } from "react-icons/bi";
import { MdOutlineWatchLater } from "react-icons/md";



const SingleRecipe: React.FC<SingleRecipeProps> = ({item}) => {
    const {title,img, category} = item;
    return (
        <div className="  shadow-md h-[400px] ">
            <div className=" overflow-hidden">
                <img src={img} alt="recipe img" className="h-60 w-full mb-3  transform hover:scale-125 cursor-pointer transition-all duration-300 delay-300 " />
            </div>
            <div className="px-3 space-y-3 mb-3">
                 <p className="text-orange-500 ">{category}</p>
                 <h4 className=" font-semibold">{title}</h4>
                 {/* <p>{desc.slice(0,50)}</p> */}
            </div>

            <hr />

            <div className="flex justify-between items-center mt-2 px-3 text-gray-500">
               <div className="flex items-center ">
               <span className="pr-3"><MdOutlineWatchLater /></span>
           <p> 60 minutes</p>
               </div>
               <div className="flex items-center ">
               <span className="pr-3"><BiLike /></span>
                <p> Easy</p>
               </div>
            </div>
          
        </div>
    );
};

export default SingleRecipe;