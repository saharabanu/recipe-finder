import { Link } from "react-router-dom";


const NotFound = () => {
    return (
       <>
       <div className="bg-gray-200 h-screen">

       
      
        <div className="flex justify-center items-center m-auto container w-[400px]">
            <div className="mt-48 space-y-4">
                <h2 className="text-2xl ">Error Page</h2>
                <p className="">
                The page you are looking for doesn't exist. It may have been moved or removed altogether. Please try searching for some other page, or return to the website's homepage to find what you're looking for.
                </p>
                <button className="bg-orange-500 text-white px-6 py-3 rounded hover:bg-transparent  hover:text-orange-500 hover:border transition-all duration-150 delay-300  hover:border-orange-500" >
             <Link to='/'> Back to Home</Link>
            </button>
            </div>
            
        </div>
        </div>
        </>
    );
};

export default NotFound;