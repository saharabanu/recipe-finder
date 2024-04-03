import { SliderDesignProps } from "../../types/globaltypes";
import Button from "../Button";


const SliderDesign: React.FC<SliderDesignProps> = ({ text, img }) => {
    return (
       <div className=" bg-no-repeat bg-cover bg-center    ">
         <div className=" lg:mx-14 mx-5">
            <div className="flex items-center ">
                <div>
                    <h1 className="text-black font-bold lg:text-3xl text-2xl  pb-10">{text}</h1>
                    <Button title="Read More " />
                </div>
                <div className="">
                <img src={img} alt={text} className="rounded h-full w-full"/>
            </div>
            </div>
            

        </div>
       </div>
    );
};

export default SliderDesign;