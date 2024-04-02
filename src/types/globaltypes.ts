// for navbar array links type

export type Sublink = {
    name: string;
    link: string;
  };
  
  export type Submenu = {
    Head: string;
    sublink: Sublink[];
  };
  
   export type Link = {
    name: string;
    submenu?: boolean;
    sublinks?: Submenu[];
  };

//   for navabr map type

export type SubLink = {
    name: string;
    link: string;
  };
  
  export type SubMenu = {
    Head: string;
    sublink: Sublink[];
  };
  
  export type LinkItem = {
    name: string;
    submenu?: boolean;
    sublinks?: Submenu[];
  };