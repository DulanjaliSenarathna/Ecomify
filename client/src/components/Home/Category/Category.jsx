import {useNavigate} from "react-router-dom"

import "./Category.scss";

const Category = ({categories}) => {
    const navigate = useNavigate();
    return <div className="shop-by-category">
        <div className="categories">
            {categories?.data?.map((item) => ( // ? = Elvis Operator (optional chaining)-used while accessing some property on an object to avoid null or undefined errors
                <div key={item.id} className="category" onClick={()=> navigate(`/category/${item.id}`)}>
                    <img src={process.env.REACT_APP_DEV_URL + item.attributes.img.data.attributes.url} alt="Category1" />
                </div>
            )
            )}      
        </div>
    </div>;
};

export default Category;
