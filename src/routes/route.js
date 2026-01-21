import {BrowserRouter , Routes , Route} from "react-router-dom"
// import NavBar from "../components/HomePage/NavBar";
// import SliderImage from "../components/HomePage/SliderImage";
import HomePage from "../pages/HomePage.js/HomePage"
import AchievementPage from "../components/HomePage/AchievementPage"
import ProductsPage from "../pages/ProductPage/ProductsPage"
// import ProductDetails from "../components/HomePage/Product.details/ProductDetails"
import ProductDetailsPage from "../pages/ProductDetailsPage/ProductDetailsPage"





const AppRouter = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<HomePage/>} />
            {/* <Route exact path="/page" element={<AchievementPage />} /> */}
            <Route exact path="/productspage" element={<ProductsPage />} />
            {/* <Route exact path="/productdetails" element={<ProductDetails />} /> */}
            <Route exact path="/productdetailspage" element={<ProductDetailsPage />} />
        </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;