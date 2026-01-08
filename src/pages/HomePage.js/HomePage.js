import React from "react";
import NavBar from "../../helpers/Shares/NavBar";
import SliderImage from "../../components/HomePage/SliderImage";
import GridSlider from "../../components/HomePage/GridSlider";
import ImageFlex from "../../components/HomePage/ImageFlex";
import GroceryItem from "../../components/HomePage/GroceryItem";
import DeliveryDetails from "../../components/HomePage/DeliveryDetails";import { Typography , Box } from "@mui/material";
import ImgSlider from "../../components/HomePage/ImgSlider";
import AchievementPage from "../../components/HomePage/AchievementPage";
import Image from "../../components/HomePage/Image";
import VariationPages from "../../components/HomePage/VariationPages";
import Map from "../../components/HomePage/Map";
import Footer from "../../helpers/Shares/Footer";

const HomePage =()=>{
    return(
        <div>
            <div>
                <NavBar />
            </div>
            <div>
                <SliderImage />
            </div>
            <div>
                <GridSlider />
            </div>
            <div>
                <ImageFlex />
            </div>
            <div>
                <GroceryItem />
            </div>
            <div>
                <DeliveryDetails />
            </div>
            <div>
                <AchievementPage />
            </div>
            <div>
                <ImgSlider />
            </div>
            <div>
                <Image />
            </div>
            <div>
                <VariationPages />
            </div>
            <div>
                <Map />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default HomePage;