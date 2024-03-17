import React from 'react';
import { Typography, Grid, useMediaQuery, useTheme, ImageList, ImageListItem, ImageListItemBar, Box } from '@mui/material';
import './ListDisplay.css'

const ListDisplay = ({ images }) => {
  const totalQuantity = images.reduce((acc, curr) => acc + curr.quantity, 0);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const cols = isMobile ? 2 : 4;

  // Calculate row height dynamically based on the tallest image in each row
  const rowHeights = images.reduce((acc, curr, index) => {
    if (index % cols === 0) {
      acc.push(0);
    }
    acc[acc.length - 1] = Math.max(acc[acc.length - 1], curr.height);
    return acc;
  }, []);
  const rowHeight = Math.max(...rowHeights);

  // Calculate gap between rows and columns
  const gap = isMobile ? 8 : 16;

  // Adjust container width and gap for larger screens
  const containerWidth = isMobile ? '100%' : '90%';
  const largeScreenGap = isMobile ? gap : 24; // Larger gap for larger screens

  return (
  <div style={{ margin: '0 auto', width: containerWidth }}>
    <Box sx={{ mb: 4 }}>
<Typography variant={isMobile ? "h3" : "h2"} align="center" gutterBottom style={{ fontFamily: 'Thuast', color: 'white', marginTop: '20px', marginBottom: '0', padding: '0' }}>Deck Detect</Typography>
    </Box>


    <ImageList sx={{ width: '100%', height: 'auto' }} cols={cols} rowHeight={rowHeight} gap={isMobile ? gap : largeScreenGap}>
      {images.map((item) => (
        <ImageListItem key={item.image_url}>
          <img
            src={`${item.image_url}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.image_url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item["card name"]}
            loading="lazy"
            style={{ width: '100%', height: 'auto' }}
          />
          <ImageListItemBar
            title={`${item.quantity}`}
          />
        </ImageListItem>
      ))}
    </ImageList>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item>
        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '20px', marginRight: '10px', marginBottom: '0', paddingBottom: '0' }}>
          <a href="https://apps.apple.com/us/app/deck-detect/id6476965574?platform=iphone">
            <img src="./1.png" alt="Apple" style={{ cursor: 'pointer', marginTop: '10px', width: 'auto', height: '60px', marginBottom: '0', paddingBottom: '0' }} />
          </a>
        </div>
      </Grid>
      <Grid item>
        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px', marginRight: '20px', marginBottom: '0', paddingBottom: '0' }}>
          <a href="URL_FOR_DOWNLOAD_2">
            <img src="./2.png" alt="Android" style={{ cursor: 'pointer', marginTop: '10px', width: 'auto', height: '86px', marginBottom: '0', paddingBottom: '0' }} />
          </a>
        </div>
      </Grid>
    </Grid>
    {/*<Typography variant="body1">totalQuantity: {totalQuantity}</Typography>*/}
  </div>
);

};

export default ListDisplay;
