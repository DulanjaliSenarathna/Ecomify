import "./Products.scss";
import Product from "./Product/Product";

const Products = ({innerPage}) => {
    return <div className="products-container">
        {!innerPage && <div className="section-heading"> Section Heading</div>}
        <div className="products">
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </div>
    </div>;
};

export default Products;
