import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import NotFound from "../pages/NotFound";
import About from "../pages/About";
import Contact from "../pages/Contact";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:[
          {
              index: true,
              element: <Home />,
            },
            {
              path: '/about',
              element: <About />,
            },
            {
              path: '/contact',
              element: <Contact />,
            },
           
        ]
      },
    {
      path: "*",
      element: <NotFound/>,
    },
  ]);
  export default routes