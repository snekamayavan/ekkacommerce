import React from "react";
import { Grid, Typography ,Box , Paper, Rating, Button} from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Height } from "@mui/icons-material";


const GroceryItem = () =>{
    const details =([
        {
            img:"https://png.pngtree.com/png-vector/20241030/ourmid/pngtree-nuts-dry-fruit-isolate-on-transparent-background-png-image_14181748.png",
            title:'Grain, Breakfast, Fresh',
            topic:"Diry Fruits",
            sellingprice:'₹85.00',
            offerprice:"₹65.00",
        },
        {
            img:"https://bakerpedia.com/wp-content/uploads/2020/03/Egg_baking-ingredients-e1584136402126.jpg",
            title:'Grain, Breakfast, Fresh',
            topic:"Egg",
            sellingprice:"₹30.00",
            offerprice:"₹20.00",

        },
        {
            img:"https://tiimg.tistatic.com/fp/1/003/816/carbonated-soft-drink-795.jpg",
            title:'Grain, Breakfast, Fresh',
            topic:"Soft Drinks",
            sellingprice:"₹85.00",
            offerprice:"₹56.00",
        },
        {
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcTLU-iChwyrQ6oqNcGrcb4Xo_I_y1Kb3Qhw&s",
            title:'Grain, Breakfast, Fresh',
            topic:"Organic Pickle",
            sellingprice:"₹88.00",
            offerprice:"₹65.00",
            
        },
    ])
    return(
        <div style={{padding:"60px 50px" , backgroundColor:"#BBFCF9"}}>
            <Box style={{textAlign:'center'}}>
                <Typography variant="h4" style={{fontWeight:'600px'}}>Featured Grocery Item</Typography>
                <Typography variant="body2" style={{color:'gray'}}>Browse the Collection Top Products</Typography>
            </Box>
            <Grid container spacing={1}>
                {details.map(detail => (
                    <Grid size={3} style={{padding:"30px",color:"gray"}}>
                        <Paper style={{width:'250px', height:'380px',padding:'10px 10px'}}>
                            <Box style={{textAlign:'center',paddingTop:'10px'}}>
                                <img style={{width:"150px",border:'0.1rem solid E7FEF7',paddingTop:'10px',borderRadius:'5px'}} src={detail.img} />
                            </Box>
                            <Box style={{paddingTop:"20px"}}>
                                <Typography variant="body2" style={{color:'gray'}}>{detail.title}</Typography>
                            </Box>
                            <Box style={{paddingTop:"20px"}}>
                                <Typography variant="h6" style={{fontWeight:'700'}}>{detail.topic}</Typography>
                            </Box>
                            <Box style={{display:'flex',justifyContent:'space-between',paddingTop:"20px"}}>
                                <Box style={{display:'flex',gap:'20px'}}>
                                    <Typography style={{textDecoration:'line-through' , color:"brown",}} variant="body2">{detail.sellingprice}</Typography>
                                    <Typography variant="body2"  style={{color:'gray'}}>{detail.offerprice}</Typography>
                                </Box>
                                <Rating defaultValue={4} />
                            </Box>
                            <Box style={{display:'flex',justifyContent:"space-between",paddingTop:'30px'}}>
                                <Button style={{width:'100px',backgroundColor:"green",color:"white"}} variant="outlined">Add to</Button>
                                <Button variant="outlined" style={{color:'green'}}> <FavoriteBorderIcon/> </Button>
                                <Button variant="outlined" style={{color:'green'}}> <VisibilityIcon/> </Button>
                            </Box>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </div>
    )


}
export default GroceryItem;