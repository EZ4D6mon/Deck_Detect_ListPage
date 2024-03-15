import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ListDisplay from './ListDisplay';
import './ConstantList.css'

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const ConstantList = () => {
  const [images, setImages] = useState([]);
  const query = useQuery();
  const token = query.get('token');
  console.log(token);

  useEffect(() => {
    // Assuming you have the logic to fetch list ID using token and then fetch images
    const fetchImages = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8765/api/constantList/decode_token?token=${token}`);
        const imagesData = await response.json();
        setImages(imagesData.results); 
        console.log(imagesData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (token) {
      fetchImages();
    }
  }, [token]);

  return (
    <div className='Userlist'>
      <ListDisplay images={images} />
    </div>
  );
};

export default ConstantList;
