import { Link } from "react-router-dom";
import {MdKeyboardDoubleArrowRight} from "react-icons/md"


const HeroSection = () => {
    return (
        <div className="">
            <div className="carousel w-full"> 
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/WVKrzz6/head-Phone.jpg" className="w-full" />
                   <span className="bg-[#0000001d] absolute w-full h-full"></span>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-1 lg:left-5 right-1 lg:right-5 top-1/2 z-40">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                        
                    </div>
                    <div className=" absolute top-[40px] left-[40px] sm:left-1/4 md:top-1/3 md:left-1/3 text-center space-y-2 lg:space-y-6 ">
                        <h3 className=" lg:text-[#333333] font-semibold text-lg lg:text-xl">Focal Stellia HFX45-03</h3>
                        <h2 className=" text-2xl lg:text-5xl font-bold  lg:text-[#333333] lg-10 lg:pl-16">Sound is Life Enjoy the Life</h2>
                        <p className=" lg:text-[#333333] text-sm lg:pb-4 px-10 ">Get Exclusive sound bar with up to 50% discount</p>
                       <div className="w-[155px] mx-auto">
                       <Link to="/order" className="gradient-bg font-semibold text-[13px] py-2 lg:py-4 px-8 text-white rounded-[50px] flex items-center gap-x-2">Order Now <MdKeyboardDoubleArrowRight></MdKeyboardDoubleArrowRight></Link>
                       </div>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/DphZ5M7/style01.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default HeroSection;