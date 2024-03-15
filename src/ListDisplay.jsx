import React from 'react';
import { List, ListItem, ListItemText, ImageList, ImageListItem, Typography, ImageListItemBar, Grid, Item } from '@mui/material';

const ListDisplay = ({ images }) => {
  const totalQuantity = images.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={10}>
        <img src="./Deck-Detect-3-15-2024.png" alt="Deck Detect" style={{ height: '100%', width: '30%' }} />
        
        </Grid>
        <Grid item xs={2}>
        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '20px' }}>
          <a href="URL_FOR_DOWNLOAD_1">
            <img src="./1.png" alt="Apple" style={{ cursor: 'pointer', marginBottom: '10px', width: '50px', height: 'auto' }} />
          </a>
          <a href="URL_FOR_DOWNLOAD_2">
            <img src="./2.png" alt="Android" style={{ cursor: 'pointer', width: '50px', height: 'auto' }} />
          </a>
        </div>
        </Grid>
      </Grid>
        
      
      <ImageList sx={{ width: 1300 }} cols={6} rowHeight={300}>
        {images.map((item) => (
          <ImageListItem key={item.image_url}>
            <img
              src={`${item.image_url}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.image_url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item["card name"]}
              loading="lazy"
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
