import { useEffect } from "react";
import { useState } from "react";


const useProduct = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() =>{
        setLoading(true)
        fetch("http://localhost:5000/products")
        .then(res => res.json())
        .then(data =>{
            setProducts(data)
            setLoading(false)
        })
    },[])
    return [products, loading];
};

export default useProduct;
