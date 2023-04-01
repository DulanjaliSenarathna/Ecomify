import "./Category.scss";
import cat1 from "../../../assets/category/cat-1.jpg";
import Home from "../Home";

const Category = ({categories}) => {
    return <div className="shop-by-category">
        <div className="categories">
            {categories?.data?.map((item) => ( // ? = Elvis Operator (optional chaining)-used while accessing some property on an object to avoid null or undefined errors
                <div key={item.id} className="category">
                    <img src={process.env.REACT_APP_DEV_URL + item.attributes.img.data.attributes.url} alt="Category1" />
                </div>
            )
            )}      
        </div>
    </div>;
};

export default Category;
