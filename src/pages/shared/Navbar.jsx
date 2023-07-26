import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { BiX } from "react-icons/bi";
import { useState } from "react";


const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className="primary-bg-color z-30">
            <div className="my-con">
                <div className={`flex flex-row-reverse md:flex-row pl-2 md:pl-0 pr-0 md:pr-6 lg:pr-0 gap-x-6 items-center justify-between lg:justify-normal duration-500 ${open ? "mb-[231px]" : "mb-0"}`}>
                    <div
                        className="flex  justify-between items-center px-6 sm:px-4 lg:px-6 bg-gradient-to-r from-[#2da8de] to-[#238ab7] gap-x-20 leading-[50px] font-semibold ">
                        <h2 className="text-white"> All Categories </h2>
                        <FaBars className="text-white hidden sm:block"></FaBars>
                    </div>
                    <div className="">
                        <button className="md:hidden text-white text-xl" onClick={()=>setOpen(!open)} >{open ? <BiX className="text-3xl"></BiX> : <FaBars className="text-lg"></FaBars>}</button>

                        <ul 
                        className={`flex flex-col gap-y-2 md:gap-y-0 bg-slate-200  md:bg-transparent py-2 md:py-0 w-full pl-4 sm:pl-6 md:px-0 md:flex-row text-slate-700  md:text-white justify-center md:gap-x-6 lg:gap-x-12 font-semibold absolute md:static z-20 duration-500 ${open ? "top-12 right-0"  : "-top-60 right-0"}`}>
                            <li><NavLink to="/" className="hover:text-[#49c3f9]">Home</NavLink></li>
                            <li><NavLink to="/" className="hover:text-[#49c3f9]">About</NavLink></li>
                            <li><NavLink to="/" className="hover:text-[#49c3f9]">Products</NavLink></li>
                            <li><NavLink to="/" className="hover:text-[#49c3f9]">Services</NavLink></li>
                            <li><NavLink to="/" className="hover:text-[#49c3f9]">Blog</NavLink></li>
                            <li><NavLink to="/" className="hover:text-[#49c3f9]">Pages</NavLink></li>
                            <li><NavLink to="/" className="hover:text-[#49c3f9]">Contact</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;