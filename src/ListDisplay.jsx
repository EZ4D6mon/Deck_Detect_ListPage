import React from 'react';
import { List, ListItem, ListItemText, ImageList, ImageListItem, Typography, ImageListItemBar } from '@mui/material';

const ListDisplay = ({ images }) => {
  const totalQuantity = images.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div>
      <Typography variant="h6">List</Typography>
      
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
