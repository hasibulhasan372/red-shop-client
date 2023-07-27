import { Rating } from "@mui/material";


const ProductCard = ({ product }) => {
    const { title, img, price, rating } = product;
    return (
        <div className="border px-8 py-3 text-center">
            <img src={img} alt="" className="" />
            <Rating
                name="read-only"
                value={rating}
                readOnly
                
            />
            <h1>{title}</h1>
            <h4 className="text-[#2ba9e1]">${price}</h4>
        </div>
    );
};

export default ProductCard;