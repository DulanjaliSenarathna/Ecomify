import { useState } from "react";
import "./SingleProduct.scss";
import {FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaPinterest, FaCartPlus} from "react-icons/fa";
import RelatedProducts from './RelatedProducts/RelatedProducts';
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
    const [quantity,setQuantity] = useState(1);
    const {id} = useParams();
    const {data} = useFetch(`/api/products?populate=*&[filters][id]=${id}`);//*-all images, &-filter

    const increment = () =>{
        setQuantity((prevState) => prevState + 1)
    }

    const decrement = () =>{
        setQuantity((prevState) => {
            if(prevState === 1) return 1
            return prevState - 1
        })
    }

    if(!data) return;
    const product = data.data[0].attributes;
    return <div className="single-product-main-content">
        <div className="layout">
            <div className="single-product-page">
                <div className="left">
                    <img src={process.env.REACT_APP_DEV_URL+ product.img.data[0].attributes.url} alt="Product1" />
                </div>
                <div className="right">
                    <span className="name">{product.title}</span>
                    <span className="price">&#8360; {product.price}</span>
                    <span className="desc">{product.desc}</span>

                    <div className="cart-buttons">
                        <div className="quantity-buttons">
                            <span onClick={decrement}>-</span>
                            <span>{quantity}</span>
                            <span onClick={increment}>+</span>
                        </div>
                        <button className="add-to-cart-button">
                            <FaCartPlus size={20}/>
                            ADD TO CART
                        </button>
                    </div>

                    <span className="divider"/>

                    <div className="info-item">
                        <span className="text-bold">
                            Category: &nbsp;
                            <span>{product.categories.data[0].attributes.title}</span>
                        </span>
                        <span className="text-bold">
                            Share:
                            <span className="social-icons">
                                <FaFacebookF size={16}/>
                                <FaTwitter size={16}/>
                                <FaInstagram size={16}/>
                                <FaLinkedin size={16}/>
                                <FaPinterest size={16}/>
                            </span>
                        </span>
                        
                    </div>
                </div>
            </div>
            <RelatedProducts/>
        </div>
    </div>;
};

export default SingleProduct;
