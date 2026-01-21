import { Avatar, Box, Button, Card, Checkbox, Divider, Grid, Paper, Typography, } from "@mui/material";
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RepeatIcon from '@mui/icons-material/Repeat';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Link } from "react-router-dom";
import Rating from '@mui/material/Rating';


const SuggestionProduct = () =>{

    const products=([
    {
      img:"https://5.imimg.com/data5/AP/HE/MY-13283794/casual-shirt-500x500.jpg",
      topic:"Round Neck T-Shirt",
      linethrough:"$30.00",
      price:"$25.00",
      para : "Lorem lpsum is simply dummy text of the printing and typesetting industy, Lorem lpsum is simply dummy text ever since the 1500s, When an unknown parinter took a galley",
      s2 : "M",
      s3 : "L",
      s4 : "XL",
      c1 : "brown",
      c2 : 'yellow',
      c3 : "black",
      icon1 : <AddBusinessIcon />,
      icon2 : <FavoriteBorderIcon />,
      icon3 : <RepeatIcon />,
      icon4 : <RemoveRedEyeIcon />,
    },
     {
      img:"https://5.imimg.com/data5/AP/HE/MY-13283794/casual-shirt-500x500.jpg",
      topic:"Full Sleeve Shirt",
      linethrough:"$20.00",
      price:"$25.00",
      para : "Lorem lpsum is simply dummy text of the printing and typesetting industy, Lorem lpsum is simply dummy text ever since the 1500s, When an unknown parinter took a galley",
      s2 : "M",
      s3 : "L",
      s4 : "XL",
      c1 : "yellow",
      c3 : "black",
      icon1 : <AddBusinessIcon />,
      icon2 : <FavoriteBorderIcon />,
      icon3 : <RepeatIcon />,
      icon4 : <RemoveRedEyeIcon />,

    },
     {
      img:"https://5.imimg.com/data5/XO/QS/XD/SELLER-4156856/mens-reversible-jackets-500x500.jpg",
      topic:"Round Neck T-Shirt",
      linethrough:"$30.00",
      price:"$25.00",
      para : "Lorem lpsum is simply dummy text of the printing and typesetting industy, Lorem lpsum is simply dummy text ever since the 1500s, When an unknown parinter took a galley",
      s2 : "M",
      s3 : "L",
      s4 : "XL",
      c1 : "yellow",
      c2 : 'brown',
      c3 : "black",
      icon1 : <AddBusinessIcon />,
      icon2 : <FavoriteBorderIcon />,
      icon3 : <RepeatIcon />,
      icon4 : <RemoveRedEyeIcon />,

    },
    {
      img:"https://images-eu.ssl-images-amazon.com/images/I/61192vcVygL._AC_UL600_SR600,600_.jpg",
      topic: "Women College Bag",
      linethrough:"$20.00",
      price:"$25.00",
      para : "Lorem lpsum is simply dummy text of the printing and typesetting industy, Lorem lpsum is simply dummy text ever since the 1500s, When an unknown parinter took a galley",
      c1 : "pink",
      c3 : "black",
      icon1 : <AddBusinessIcon />,
      icon2 : <FavoriteBorderIcon />,
      icon3 : <RepeatIcon />,
      icon4 : <RemoveRedEyeIcon />,
    },
    {
      img:"https://images-static.nykaa.com/media/catalog/product/f/a/faf4f66DLAVAA00000126_1.jpg?tr=w-500",
      topic:"Travel Bag",
      linethrough:"$20.00",
      price:"$25.00",
      para : "Lorem lpsum is simply dummy text of the printing and typesetting industy, Lorem lpsum is simply dummy text ever since the 1500s, When an unknown parinter took a galley",
      c1 : "pink",
      c2 : "gray",
      c3 : "black",
      icon1 : <AddBusinessIcon />,
      icon2 : <FavoriteBorderIcon />,
      icon3 : <RepeatIcon />,
      icon4 : <RemoveRedEyeIcon />,
    },
    
    {
      img:"https://5.imimg.com/data5/ECOM/Default/2023/8/333134781/PM/EL/VY/9824821/a4c0ae4dd65e0620e0a1e8d255ddad9f-500x500.jpg",
      topic:"Women HandBag",
      linethrough:"$20.00",
      price:"$25.00",
      para : "Lorem lpsum is simply dummy text of the printing and typesetting industy, Lorem lpsum is simply dummy text ever since the 1500s, When an unknown parinter took a galley",
      c1 : "yellow",
      c3 : "black",
      icon1 : <AddBusinessIcon />,
      icon2 : <FavoriteBorderIcon />,
      icon3 : <RepeatIcon />,
      icon4 : <RemoveRedEyeIcon />,
    },
])

    return(
        <div>
          <Typography style={{paddingBottom:"20px"}} variant="h4">People's also viewed</Typography>
            <Grid container spacing={2}>
                {products.map (product =>(
                 <Grid size={4} style={{position:'relative'}}>
                  <Link to="/productdetailspage" style={{textDecoration:"none"}}>
                  <Card style={{padding:"20px" , marginTop:"15px" , backgroundColor:"white"}}>
                      <div>
                        <div style={{textAlign:"center"}} >
                          <img style={{width:'auto',maxWidth:"250px",height:'auto',maxHeight:"350px"}} src= {product.img}/>
                          <div style={{position:'absolute',top:'150px',left:'10px'}}>
                            {product.icon1 && (
                              <div>
                                <Link style={{color:"black"}}>{product.icon1}</Link>
                              </div>
                            )}
                            <div style={{padding:"10px 0"}}>
                              <Link style={{color:"black"}}>{product.icon2} </Link>
                            </div>
                            <div>
                              <Link style={{color:"black"}}>{product.icon3} </Link>
                            </div>
                            <div style={{padding:"10px 0"}}>
                              <Link style={{color:"black"}}>{product.icon4}</Link>
                            </div>

                          </div>
                        </div>
                      </div>
                      <div style={{paddingTop:'10px'}}>
                        <Typography variant="h6">{product.topic}</Typography>
                        <Rating name="read-only"  readOnly />
                        <div style={{display:'flex',gap:'10px'}}>
                          <Typography variant="body1" style={{textDecoration:"line-through",color:'gray'}}>{product.linethrough}</Typography>
                          <div>
                            <Typography variant="body1">{product.price}</Typography>
                          </div>
                        </div>
                            <div style={{display:'flex' , justifyContent:"space-between"}}>
                              <div style={{display:"flex" , gap:"10px"}}>
                                {product.c1 && (
                                  <Avatar style={{backgroundColor:product.c1 , color:product.c1 , width:"25px" , height:"25px"}}/>
                                )}                           
                                {product.c2 && (
                                  <Avatar style={{backgroundColor:product.c2 , color:product.c2 , width:"25px" , height:"25px"}}/>
                                )}
                                {product.c3 && (
                                  <Avatar style={{backgroundColor:product.c3 , color:product.c3 , width:"25px" , height:"25px"}}/>
                                )}
                                {product.c4 && (
                                  <Avatar style={{backgroundColor:product.c4 , color:product.c4 , width:"25px" , height:"25px"}}/>
                                )}
                              </div>
                              <div style={{display:"flex" , gap:"10px"}}>
                                {product.s1 && (
                                  <button style={{border:"none"}}>{product.s1}</button>
                                )}
                                {product.s2 && (
                                  <button style={{border:"none"}}>{product.s2}</button>
                                )}
                                {product.s3 && (
                                  <button style={{border:"none"}}>{product.s3}</button>
                                )}
                                {product.s4 && (
                                  <button style={{border:"none"}}>{product.s4}</button>
                                )}
                                {product.s5 && (
                                  <button style={{border:"none"}}>{product.s5}</button>
                                )}
                              </div>
                            </div>
                      </div>
                  </Card>
                  </Link>
              </Grid>
              ))}
            </Grid>
        </div>

    )
    

}
export default SuggestionProduct;