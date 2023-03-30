import "./Category.scss";
import cat1 from "../../../assets/category/cat-1.jpg"

const Category = () => {
    return <div className="shop-by-category">
        <div className="categories">
            <div className="category">
                <img src={cat1} alt="Category1" />
            </div>
            <div className="category">
                <img src={cat1} alt="Category2" />
            </div>
            <div className="category">
                <img src={cat1} alt="Category3" />
            </div>
            <div className="category">
                <img src={cat1} alt="Category4" />
            </div>
        </div>
    </div>;
};

export default Category;
