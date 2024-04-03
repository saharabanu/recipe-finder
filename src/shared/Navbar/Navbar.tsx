import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import NavbarLinks from "./NavbarLinks";
import { IoMenuSharp, IoClose } from "react-icons/io5";


const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
      <nav className="bg-white border-b shadow-lg sticky top-0 z-50">
        <div className="flex items-center font-medium justify-around text-sm">
          <div className="z-50 p-5 md:w-auto w-full flex justify-between">
            {/* <img src="" alt="logo" className="md:cursor-pointer h-9" /> */}
            <h1 className="cursor-pointer hover:text-orange-500 transition-all duration-150 delay-300 text-xl">  Food Recipe</h1>
            <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
              
              {open ? <IoClose /> :  <IoMenuSharp />  }
            </div>
          </div>
          <ul className="md:flex hidden uppercase items-center gap-8 ">
            <li>
              <Link to="/" className="py-7 px-3 inline-block hover:text-orange-500 transition-all duration-150 delay-300">
                Home
              </Link>
            </li>
            <NavbarLinks />
          </ul>
          <div className="md:block hidden">
            <Button  title="Login"/>
          </div>
          {/* Mobile nav */}
          <ul
            className={`
          md:hidden bg-white   fixed w-full top-10 overflow-y-auto bottom-0  pl-4 z-5
          duration-500 ${open ? "left-0" : "left-[-100%]"}
          `}
          >
            <li>
              <Link to="/" className="py-7 px-3 inline-block ">
                Home
              </Link>
            </li>
            <NavbarLinks />
            <div className="py-5">
              <Button title="Login"/>
            </div>
          </ul>
        </div>
      </nav>
    );
};

export default Navbar;