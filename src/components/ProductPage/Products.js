import { Avatar, Box, Button, Card, Checkbox, Divider, Grid, Paper, Typography, } from "@mui/material";
import React, { useEffect, useState } from "react";
import GridViewIcon from '@mui/icons-material/GridView';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RepeatIcon from '@mui/icons-material/Repeat';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Link } from "react-router-dom";
import Rating from '@mui/material/Rating';
import { useDispatch, useSelector } from "react-redux";
import actions from "../../redux/main/action";


const Products =()=>{

  const dispatch = useDispatch();
  const {getProducts} = useSelector(state => state.ekkaEcommerceReducer);
  console.log(getProducts)
  useEffect(() => {
    loadTask();
  },[]);
  const loadTask =()=>{
    console.log("loadTask")
    dispatch({type:actions.GET_PRODUCT_START})
  }

  const [productGrid, setProductGrid] = useState(true);
  const productOpen =()=>{
    setProductGrid(!productGrid);
  }
  const [productList , setProductList] = useState();
  const productListOpen =()=>{
    setProductList(!productList);
  }


  const [open , setOpen] = useState(false);
  const handleOpen =()=>{
    setOpen(!open);
  };
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
     {
      img:"https://ozmobiles.com.au/cdn/shop/files/iphone-11-apple-by-ozmobiles-3_600x.jpg?v=1727158376",
      topic:"Mobile",
      linethrough:"$20.00",
      price:"$25.00",
      para : "Lorem lpsum is simply dummy text of the printing and typesetting industy, Lorem lpsum is simply dummy text ever since the 1500s, When an unknown parinter took a galley",
      icon1 : <AddBusinessIcon />,
      icon2 : <FavoriteBorderIcon />,
      icon3 : <RepeatIcon />,
      icon4 : <RemoveRedEyeIcon />,
    },
     {
      img:"https://shop.timexindia.com/cdn/shop/files/TWTXW803T_3_500x.jpg?v=1745232872",
      topic:"Smart Watch",
      linethrough:"$20.00",
      price:"$25.00",
      para : "Lorem lpsum is simply dummy text of the printing and typesetting industy, Lorem lpsum is simply dummy text ever since the 1500s, When an unknown parinter took a galley",
      icon1 : <AddBusinessIcon />,
      icon2 : <FavoriteBorderIcon />,
      icon3 : <RepeatIcon />,
      icon4 : <RemoveRedEyeIcon />,
      
    },
     {
      img:"https://www.jiomart.com/images/product/original/492573487/lenovo-tab-k10-26-16-cm-10-3-inch-tablet-4-gb-ram-64-gb-abyss-blue-tb-x6c6x-digital-o492573487-p590910745-0-202111270119.jpeg?im=Resize=(420,420)",
      topic:"Lenovo-tab",
      linethrough:"$20.00",
      price:"$25.00",
      para : "Lorem lpsum is simply dummy text of the printing and typesetting industy, Lorem lpsum is simply dummy text ever since the 1500s, When an unknown parinter took a galley",
      icon1 : <AddBusinessIcon />,
      icon2 : <FavoriteBorderIcon />,
      icon3 : <RepeatIcon />,
      icon4 : <RemoveRedEyeIcon />,
      
    },
     
  ])



  return(
    <div>
      <div style={{padding:"50px 80px"}}>
        <Grid container spacing={5}>
          <Grid size={3}>
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
                      <Box>
                        <div>
                          <Typography variant="h6" style={{fontWeight:600}}>Color</Typography>
                        </div>
                          <Button><Avatar style={{backgroundColor:"red" , color:"red" , width:"25px" , height:"25px"}}/></Button>
                          <Button><Avatar style={{backgroundColor:"green" , color:"green" , width:"25px" , height:"25px"}}/></Button>
                          <Button><Avatar style={{backgroundColor:"skyblue" , color:"skyblue" , width:"25px" , height:"25px"}}/></Button>
                          <Button><Avatar style={{backgroundColor:"pink" , color:"pink" , width:"25px" , height:"25px"}}/></Button>
                          <Button><Avatar style={{backgroundColor:"black" , color:"black" , width:"25px" , height:"25px"}}/></Button>
                          <Button><Avatar style={{backgroundColor:"orange" , color:"orange" , width:"25px" , height:"25px"}}/></Button>
                          <Button><Avatar style={{backgroundColor:"blue" , color:"blue" , width:"25px" , height:"25px"}}/></Button>
                          <Button><Avatar style={{backgroundColor:"violet" , color:"violet" , width:"25px" , height:"25px"}}/></Button>
                          <Button><Avatar style={{backgroundColor:"yellow" , color:"yellow" , width:"25px" , height:"25px"}}/></Button>
                          <Button><Avatar style={{backgroundColor:"brown" , color:"brown" , width:"25px" , height:"25px"}}/></Button>
                      </Box>
                  </Paper>
              </div>
          </Grid>
          <Grid size={9}>
            <div style={{paddingBottom:"30px",}}>
                <Paper style={{border:"0.1rem solid skyblue" , borderRadius:"5px" ,backgroundColor:"skyblue",padding:'8px 0'}}>
                    <div style={{display:'flex',gap:'10px',padding:'0 10px'}}> 
                      <Button onClick={() => productOpen()}><GridViewIcon style={{border:"0.1rem solid white" , backgroundColor:"white" , color:"black"}}/></Button>
                      <Button onClick={() => productListOpen()}><FormatListBulletedIcon style={{border:"0.1rem solid white" , backgroundColor:"white" , color:"black"}}/></Button>
                      </div>
                    
                </Paper>
            </div>
            {productGrid && (
              <div>
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
            )}
            {productList && (
              <div>
                {products.map(product =>(
                  <div style={{display:'flex',gap:'10px',padding:'15px 0'}} >
                    <img style={{width:'auto',maxWidth:"250px",height:'auto',maxHeight:"350px",border:"0.1rem solid gray"}} src={product.img} />
                      <div style={{paddingTop:'10px'}}>
                          <div>
                            <Typography variant="h6">{product.topic}</Typography>
                          </div>
                          <div>
                            <Rating name="read-only"  readOnly />
                          </div>
                          <div>
                            <Typography style={{color:'gray'}} variant="body1">{product.para}</Typography>
                          </div>
                          <div style={{display:'flex',gap:'10px',padding:'10px 0'}}>
                              <Typography variant="body1" style={{textDecoration:"line-through",color:'gray'}}>{product.linethrough}</Typography>
                              <div>
                                <Typography variant="body1">{product.price}</Typography>
                              </div>
                            </div>
                            <div>
                            <div style={{display:"flex" , gap:"10px",padding:'8px 0'}}>
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
                  </div>
                ))}
              </div>
            )}
          </Grid>
        </Grid>
      </div> 
      
    </div>
  )
}


export default Products;

