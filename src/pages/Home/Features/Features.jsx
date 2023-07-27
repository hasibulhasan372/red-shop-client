
import ProductCard from "../../../components/Card/ProductCard";
import useProduct from "../../../hooks/useProduct";
import SectionTitle from "../../shared/SectionTitle";


const Features = () => {
    const [products] = useProduct();

    return (
        <div className="my-con py-20">
            <SectionTitle title="Featured Products" subTitle="Must have products with the best deal never to miss."></SectionTitle>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                {
                    products.slice(0,10).map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                }
            </div>
            
        </div>
    );
};

export default Features;