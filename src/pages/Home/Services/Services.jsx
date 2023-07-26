import {FaTruck, FaGift} from "react-icons/fa"
import {GoSync} from "react-icons/go"
import {TfiHeadphoneAlt} from "react-icons/tfi"

const Services = () => {
    return (
        <div className="my-con py-11">
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 px-16 lg:px-0 gap-3">
                <div className="flex gap-x-8 items-center justify-center lg:justify-normal  border lg:border-none py-3">
                    <FaTruck className="text-3xl rotate-60 text-gray-500 "></FaTruck>
                    <div>
                        <h6 className="text-[#333333] text-[15px] font-semibold">Free Shipping</h6>
                        <p className="text-[#868686] text-sm ">For Order Above $50</p>
                    </div>
                </div>
                <div className="flex gap-x-8 items-center justify-center lg:justify-normal  border lg:border-none py-3">
                    <GoSync className="text-3xl rotate-60 text-gray-500"></GoSync>
                    <div>
                        <h6 className="text-[#333333] text-[15px] font-semibold">30 Days Return</h6>
                        <p className="text-[#868686] text-sm ">Get Money Back</p>
                    </div>
                </div>
                <div className="flex gap-x-8 items-center justify-center lg:justify-normal  border lg:border-none py-3">
                    <TfiHeadphoneAlt className="text-3xl rotate-60 text-gray-500"></TfiHeadphoneAlt>
                    <div>
                        <h6 className="text-[#333333] text-[15px] font-semibold">24/7 Support</h6>
                        <p className="text-[#868686] text-sm ">Online 24 Hours</p>
                    </div>
                </div>
                <div className="flex gap-x-8 items-center justify-center lg:justify-normal  border lg:border-none py-3">
                    <FaGift className="text-3xl rotate-60 text-gray-500"></FaGift>
                    <div>
                        <h6 className="text-[#333333] text-[15px] font-semibold">Lowest Price</h6>
                        <p className="text-[#868686] text-sm ">Best Deals</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Services;
