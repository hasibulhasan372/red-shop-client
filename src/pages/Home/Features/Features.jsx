
import ProductCard from "../../../components/Card/ProductCard";
import useProduct from "../../../hooks/useProduct";


const Features = () => {
    const [products] = useProduct();

    return (
        <div className="my-con py-20">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {
                    products.slice(0,8).map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                }
            </div>
            
        </div>
    );
};

export default Features;