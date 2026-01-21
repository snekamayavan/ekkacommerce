// import React  , {useState }from 'react';
// import Box from '@mui/material/Box';
// import Tab from '@mui/material/Tab';
// import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';

// export default function LabTabs() {
//   const [value, setValue] = React.useState('1');

//   const handleChange = (event , newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Box sx={{ width: '100%', typography: 'body1' }}>
//       <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
//           <TabList onChange={handleChange} aria-label="lab API tabs example">
//             <Tab label={<img style={{width:"50px",border:'0.1rem solid gray'}} src="https://images-eu.ssl-images-amazon.com/images/I/71CL3nsD6nL._AC_UL600_SR600,600_.jpg" />} value="1" />
//             <Tab label={<img style={{width:"50px",border:'0.1rem solid gray'}} src='https://5.imimg.com/data5/AP/HE/MY-13283794/casual-shirt-500x500.jpg' />} value="2" />
//             <Tab label={<img style={{width:"50px",border:'0.1rem solid gray'}} src='https://di2ponv0v5otw.cloudfront.net/posts/2025/10/27/690029c430122acba8bf9967/m_690029c52c9e44d391d6febc.jpeg'/>} value="3" />
//             <Tab label={<img style={{width:"50px",border:'0.1rem solid gray'}} src="https://images-na.ssl-images-amazon.com/images/I/71dRs9AxZ3L._AC_UL375_SR375,375_.jpg"/>} value="4" />
//           </TabList>
//         </Box>
//         <TabContext value={value}>
//           <TabPanel value="1"><img style={{width:'400px'}} src="https://images-eu.ssl-images-amazon.com/images/I/71CL3nsD6nL._AC_UL600_SR600,600_.jpg"/></TabPanel>
//           <TabPanel value="2"><img  src='https://5.imimg.com/data5/AP/HE/MY-13283794/casual-shirt-500x500.jpg' /></TabPanel>
//           <TabPanel value="3"><img style={{width:'400px'}} src='https://di2ponv0v5otw.cloudfront.net/posts/2025/10/27/690029c430122acba8bf9967/m_690029c52c9e44d391d6febc.jpeg'/> </TabPanel> 
//           <TabPanel value="4"><img  src="https://images-na.ssl-images-amazon.com/images/I/71dRs9AxZ3L._AC_UL375_SR375,375_.jpg"/></TabPanel>
//         </TabContext>
//     </Box>
//   );
// }

import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import SuggestionProduct from './SuggestionProduct';

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <TabPanel value="1"><img style={{width:'400px',height:'550px'}} src="https://images-eu.ssl-images-amazon.com/images/I/71CL3nsD6nL._AC_UL600_SR600,600_.jpg"/></TabPanel>
        <TabPanel value="2"><img style={{width:'400px',height:'550px'}}  src='https://sc04.alicdn.com/kf/H693c376dd75f4e8b822c071f3dfd887bn.png_250x250.png' /></TabPanel>
        <TabPanel value="3"><img style={{width:'400px',height:'550px'}} src='https://di2ponv0v5otw.cloudfront.net/posts/2025/10/27/690029c430122acba8bf9967/m_690029c52c9e44d391d6febc.jpeg'/> </TabPanel> 
        <TabPanel value="4"><img  style={{height:'550px',width:'400px'}} src="https://images-na.ssl-images-amazon.com/images/I/71dRs9AxZ3L._AC_UL375_SR375,375_.jpg"/></TabPanel>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label={<img style={{width:"50px",border:'0.1rem solid gray'}} src="https://images-eu.ssl-images-amazon.com/images/I/71CL3nsD6nL._AC_UL600_SR600,600_.jpg" />} value="1" />
            <Tab label={<img style={{width:"50px",border:'0.1rem solid gray'}} src='https://sc04.alicdn.com/kf/H693c376dd75f4e8b822c071f3dfd887bn.png_250x250.png' />} value="2" />             
            <Tab label={<img style={{width:"50px",border:'0.1rem solid gray'}} src='https://di2ponv0v5otw.cloudfront.net/posts/2025/10/27/690029c430122acba8bf9967/m_690029c52c9e44d391d6febc.jpeg'/>} value="3" />
            <Tab label={<img style={{width:"50px",border:'0.1rem solid gray'}} src="https://images-na.ssl-images-amazon.com/images/I/71dRs9AxZ3L._AC_UL375_SR375,375_.jpg"/>} value="4" />
          </TabList>
        </Box>
      </TabContext>
    </Box>
  );
}