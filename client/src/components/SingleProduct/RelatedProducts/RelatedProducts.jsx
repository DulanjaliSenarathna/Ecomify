import useFetch from "../../../hooks/useFetch";
import Products from "../../Products/Products"

const RelatedProducts = ({productId,categoryId}) => {
    const {data} = useFetch(`/api/products?populate=*&filters[id][$ne]=${productId}&filters[categories][id]=${categoryId}&pagination[start]=0&pagination[limit]=4`); //$ne - not equal to
    return <div className="related-products">
        <Products headingText="Related Products" products={data}/>
    </div>;
};

export default RelatedProducts;
