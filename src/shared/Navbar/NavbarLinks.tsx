import { useState } from "react";
import { links } from "./MyLinks";
import { Link } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { LinkItem, SubLink, SubMenu } from "../../types/globaltypes";

const NavbarLinks = () => {
  const [heading, setHeading] = useState<string>("");
  const [subHeading, setSubHeading] = useState<string>("");
  return (
    <>
      {links.map((link: LinkItem, index: number) => (
        <div key={index}>
          <div className="px-3 text-left md:cursor-pointer group text-sm">
            <h1
              className="py-7 flex justify-between items-center md:pr-0 pr-5 group hover:text-orange-500 transition-all duration-150 delay-300 "
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
              <span className="text-xl md:hidden inline">
                {heading === link.name   ? <IoIosArrowDown /> : ""}
                {/* <IoIosArrowUp/> */}
              </span>
              <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                {link.sublinks ? <IoIosArrowDown /> : ""}
              </span>
            </h1>
            {link.submenu && (
              <div>
                <div className="absolute top-12 hidden group-hover:md:block hover:md:block">
                  <div className="py-3">
                    <div
                      className="w-4 h-4 left-3 absolute 
                      mt-1 bg-white rotate-45"
                    ></div>
                  </div>
                  <div className="bg-white shadow-lg p-5 grid grid-cols-1 gap-10">
                    {link?.sublinks?.map(
                      (mysublinks: SubMenu, index: number) => (
                        <div key={index}>
                          <h1 className="text-sm font-semibold">
                            {mysublinks.Head}
                          </h1>
                          {mysublinks.sublink.map(
                            (slink: SubLink, index: number) => (
                              <li
                                className="text-sm hover:text-orange-500 transition-all duration-150 delay-300 my-2.5"
                                key={index}
                              >
                                <Link
                                  to={slink.link}
                                  className="hover:hover:text-orange-500"
                                >
                                  {slink.name}
                                </Link>
                              </li>
                            )
                          )}
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Mobile menus */}
          <div
            className={`
              ${heading === link.name ? "md:hidden" : "hidden"}
            `}
          >
            {/* sublinks */}
            {link?.sublinks?.map((slinks: SubMenu, index: number) => (
              <div key={index}>
                <div>
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center "
                  >
                    {slinks.Head}

                    <span className="text-xl md:mt-1 md:ml-2 inline">
                      {subHeading === slinks.Head ? (
                        <IoIosArrowUp />
                      ) : (
                        <IoIosArrowDown />
                      )}
                    </span>
                  </h1>
                  <div
                    className={`${
                      subHeading === slinks.Head ? "md:hidden" : "hidden"
                    }`}
                  >
                    {slinks.sublink.map((slink: SubLink, index: number) => (
                      <li className="py-3 pl-14" key={index}>
                        <Link to={slink.link}>{slink.name}</Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavbarLinks;
