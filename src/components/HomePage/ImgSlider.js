import React from "react";
import { Box, Typography, Paper, Rating, Button ,Grid} from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityIcon from '@mui/icons-material/Visibility';





const ImgSlider = () =>{

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
        <div style={{padding:'180px 50px 30px 50px'}}>
            <div style={{display:'flex',justifyContent:'space-between'}}>
                <Box style={{paddingLeft:"30px"}}>
                    <Typography style={{fontWeight:"700"}} variant="h5">Special Offers <span style={{color:"green"}}>Of the Week!</span></Typography>
                    <Box style={{paddingTop:'10px'}}>
                    <Typography variant="body2">Lorem lpsum is simply dummy text of the printing and typesetting industry</Typography>
                    <Typography variant="body2">lorem lpsum when for srembled it to make a type Splcemen book.</Typography>
                </Box>
                </Box>
                <div style={{display:"flex",padding:'10px',backgroundColor:"green",width:'300px',gap:'10px',color:"white",borderRadius:'10px'}}>
                <div style={{textAlign:'center'}}>
                    <Typography variant="h3">01</Typography>
                    <Typography variant="body2">Days</Typography>
                </div>
                <Typography style={{paddingTop:"15px"}} variant="h5">:</Typography>
                <div>
                    <Typography variant="h3">23</Typography>
                    <Typography variant="body2">Hours</Typography>
                </div>
                <Typography style={{paddingTop:"15px"}} variant="h5">:</Typography>
                <div>
                    <Typography variant="h3">59</Typography>
                    <Typography variant="body2">Mins</Typography>
                </div>
                <Typography style={{paddingTop:"15px"}} variant="h5">:</Typography>
                <div>
                    <Typography variant="h3">00</Typography>
                    <Typography variant="body2">Secs</Typography>
                </div>
            </div>
        </div>
            
            <Box>
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

            </Box>

        </div>
    )
}
export default ImgSlider;