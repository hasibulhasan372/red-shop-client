import ProductCard from "../../../components/Card/ProductCard";
import useProduct from "../../../hooks/useProduct";
import SectionTitle from "../../shared/SectionTitle";


const NewProducts = () => {
    const [products] = useProduct()
    return (
        <div className="my-con pb-20">
            <SectionTitle title="New Products" subTitle="Select from the hottest new products with the best prices."></SectionTitle>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-4 sm:gap-x-5 ">
                {
                    products.slice(0,5).map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                }
            </div>
            
        </div>
    );
};

export default NewProducts;