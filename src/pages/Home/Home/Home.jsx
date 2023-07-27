import Footer from "../../shared/Footer";
import Category from "../Category/Category";
import Features from "../Features/Features";
import HeroSection from "../HeroSection/HeroSection";
import Services from "../Services/Services";



const Home = () => {
    return (
        <>
         <HeroSection></HeroSection>
         <Services></Services>
         <Category></Category>
         <Features></Features>
         <Footer></Footer>
        </>
    );
};

export default Home;