import React, { useState } from "react";
import LabTabs from "../../components/HomePage/Product.details/ProductTabs";
import { Grid, Typography , Avatar ,Button , Checkbox , Divider , Box ,Paper} from "@mui/material";
import ProductDetails from "../../components/HomePage/Product.details/ProductDetails";
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import NavBar from "../../helpers/Shares/NavBar";
import Footer from "../../helpers/Shares/Footer";
import SuggestionProduct from "../../components/HomePage/Product.details/SuggestionProduct";

const ProductDetailsPage =()=>{

    const [open , setOpen] = useState(false);
    const handleOpen =()=>{
        setOpen(!open)
    }

    return(
        <div style={{padding:'0 20px'}}>
            <NavBar />
            <Grid container spacing={2}>
                <Grid size={3} >
                   <div style={{position:'sticky',top:"10px"}}>
                        <div style={{border:"0.1rem solid lightgray" , borderRadius:"2px" ,backgroundColor:"#F7F7F7" , marginBottom:"30px",}}>
                            <Typography style={{fontWeight:600 , padding:"10px 0" , textAlign:"center"}} variant="h6">Filter Products by</Typography>
                        </div>
                        <Paper style={{ padding:"0 12px"}}>
                            <div>
                                <div style={{padding:'5px 10px'}}>
                                <Typography variant="h6" style={{fontWeight:600}}>Category</Typography>
                                </div>
                                <Checkbox />Clothes
                                <div>
                                <Checkbox />Bags
                                </div>
                                <Checkbox />Shoes
                                <div>                   
                                <Checkbox />Cosmetics
                                </div>
                                {open && (
                                    <div>
                                        <Checkbox />Electrics
                                        <Box>
                                        <Checkbox />Phone
                                        </Box>
                                        <Box>
                                            <Checkbox />Watch
                                        </Box>
                                        <Box>
                                            <Checkbox />cap
                                        </Box>
                                    </div>
                                )}
                                <Button onClick={() => handleOpen()} style={{color:"black"}}> {open ? <IndeterminateCheckBoxIcon style={{paddingRight:"10px" , color:"red"}}/> : <AddBoxIcon  style={{paddingRight:"10px" , color:"green"}}/> } more Category</Button>
                            </div>
                            <Divider />
                            <div style={{padding:'5px 10px'}}>
                                <Typography variant="h6" style={{fontWeight:600}}>Size</Typography>
                            </div>
                            <Checkbox /> S
                            <div>
                                <Checkbox /> M
                            </div>
                            <Checkbox /> L
                            <div>
                                <Checkbox /> XL
                            </div>
                            <Checkbox /> XXL
                            <div>
                                <Divider style={{padding:"10px 0"}}/>
                            </div>
                         </Paper>
                    </div>
                </Grid>
                <Grid size={9} >
                    <Grid container spacing={2}>
                        <Grid size={6} >
                            <LabTabs />
                        </Grid>
                        <Grid size={6}>
                            <ProductDetails />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <div style={{padding:"30px 0"}}>
                <SuggestionProduct />
            </div>
            <Footer />
        </div>
    )
}

export default ProductDetailsPage;