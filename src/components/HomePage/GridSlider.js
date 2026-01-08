import { Height, Padding } from "@mui/icons-material";
import { Grid, Typography,Box, Button, Rating, Paper } from "@mui/material";
import React from "react";




const GridSlider = () =>{

    const details =([
        {
            img : "https://png.pngtree.com/png-clipart/20241016/original/pngtree-fruit-and-vegetable-png-image_16343587.png",
            title : "Vegetables & Fruit",
        },
        {
            img : "https://png.pngtree.com/png-vector/20240420/ourmid/pngtree-dairy-and-eggs-still-life-png-image_12302345.png",
            title : "Dairy & Eggs",
        },
        {
            img : "https://i.pinimg.com/736x/63/43/89/63438957404bbc5b8a88da0332db4015.jpg",
            title : "Beverage"
        },
        {
            img : "https://img.freepik.com/premium-vector/birthday-cake-cartoon-illustration-isolated-white-background_911137-108.jpg",
            title : "Bakery"
        },
        {
            img : "https://img.pikbest.com/png-images/qiantu/vector-hand-drawn-cartoon-vegetable-salad_2724160.png!sw800",
            title : "Salad"
        },
        {
            img : "https://img.pikbest.com/png-images/qianku/cartoon-food-shopping-basket-illustration_2058372.png!sw800",
            title : "Grocery & Stables"
        },

    ])

    return(
        <div>
            <Grid container spacing={2} style={{padding:"80px 0"}}>
                {details.map(detail =>(
                    <Grid size={2}>
                    <Paper style={{border:"0.1rem solid whitesmoke",width:"200px",height:"150px",textAlign:"center"}}>
                        <img style={{width:"100px",paddingTop:'10px'}} src={detail.img}/>
                        <Typography style={{color:"gray"}} variant="body2">{detail.title}</Typography>
                    </Paper>
                </Grid> 
                ))}
                 
            </Grid>
        

        </div>
    )




}
export default GridSlider;