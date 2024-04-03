import AllRecipes from "../components/ui/AllRecipes";
import Banner from "../components/ui/Banner";

import Form from "../components/ui/Form";
import Gallery from "../components/ui/Gallery";
import Footer from "../layouts/Footer";


const Home = () => {
    return (
        <>
           <Banner/>
           <AllRecipes/>

          
           <Form/>
           <Gallery/>
           <Footer/>
        </>
    );
};

export default Home;