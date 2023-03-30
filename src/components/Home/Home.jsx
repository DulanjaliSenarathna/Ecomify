import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Product from "../Products/Products";

const Home = () => {
    return <div>
        <Banner/>
        <div className="main-content">
            <div className="layout">
            <Category/>
            <Product/>
            </div>
        </div>   
    </div>;
};

export default Home;
