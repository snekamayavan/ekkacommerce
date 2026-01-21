import React from "react";
import NavBar from "../../helpers/Shares/NavBar";
import Footer from "../../helpers/Shares/Footer";
import Products from "../../components/ProductPage/Products";

const ProductsPage =()=>{
    return(
        <div >
            <div>
                <NavBar />
            </div>
            <div>
                <Products />
            </div>
            <div>
                <Footer />
            </div>
            
        </div>
    )
}

export default ProductsPage