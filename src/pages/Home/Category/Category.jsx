import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import useProduct from '../../../hooks/useProduct';
import ProductCard from '../../../components/Card/ProductCard';

const Category = () => {
    const [products] = useProduct();
    const categoryItems = products.filter(product => product.category)
    console.log(categoryItems)
    return (
        <div className='my-con'>
            <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
                clickable: true,
            }}
            breakpoints={{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                },
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            {
                    products.map(product =><SwiperSlide key={product._id} >
                        <ProductCard product={product}></ProductCard>
                    </SwiperSlide>)
                }
            

        </Swiper>
        </div>
    );
};

export default Category;