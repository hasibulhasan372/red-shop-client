import Footer from "../../shared/Footer";
import Category from "../Category/Category";
import Features from "../Features/Features";
import HeroSection from "../HeroSection/HeroSection";
import NewProducts from "../NewProducts/NewProducts";
import Services from "../Services/Services";



const Home = () => {
    return (
        <>
         <HeroSection></HeroSection>
         <Services></Services>
         <Category></Category>
         <Features></Features>
         <NewProducts></NewProducts>
         <Footer></Footer>
        </>
    );
};

export default Home;