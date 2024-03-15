import React from 'react';
import { List, ListItem, ListItemText, ImageList, ImageListItem, Typography, ImageListItemBar, useMediaQuery, useTheme } from '@mui/material';
import './ListDisplay.css'
const ListDisplay = ({ images }) => {
  const totalQuantity = images.reduce((acc, curr) => acc + curr.quantity, 0);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Determine the number of columns based on whether the device is mobile

  const imageSize = isMobile ? '33.3%' : '100%';
  const cols = isMobile ? 3 : 6;
  const rowHeight = isMobile ? 200 : 300
  // Function to determine the number of columns based on the screen width
  // const getNumCols = () => {
  //   const screenWidth = window.innerWidth;
  //   if (screenWidth >= 1300) {
  //     return 6;
  //   } else if (screenWidth >= 900) {
  //     return 4;
  //   } else if (screenWidth >= 600) {
  //     return 3;
  //   } else {
  //     return 2;
  //   }
  // };

  return (
    <div className='Listdisplay'>
      <Typography variant="h6">List</Typography>
      
      <ImageList sx={{ width: isMobile ? '95%': 1300, height: isMobile ? 950 : 1000 }} cols={cols} rowHeight={rowHeight}>
        {images.map((item) => (
          <ImageListItem key={item.image_url}
          //                sx={{
          //   width: isMobile ? '33.3%' : 'auto', // Smaller width for ImageListItem on mobile
          //   height: 'auto',
          //   '& img': { // Targeting the image tag directly for additional style control
          //     width: '100%', // Ensure the image fills the container
          //     height: 'auto'  // Maintain aspect ratio
          //   }
          // }}
          >
            <img
              src={`${item.image_url}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.image_url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item["card name"]}
              loading="lazy"
              // style={{ width: imageSize, height: 'auto' }} // Apply dynamic width here

            />
            <ImageListItemBar
              title={`${item.quantity}`}
              sx={{
                // Adjust styles to place the quantity number on the right bottom
                // background:
                //   'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Typography variant="body1">totalQuantity: {images.length}</Typography>
    </div>
  );
};

export default ListDisplay;
