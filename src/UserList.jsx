import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ListDisplay from './ListDisplay';
import './UserList.css'

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const UserList = () => {
  const [images, setImages] = useState([]);
  const query = useQuery();
  const token = query.get('token');
  console.log(token);

  useEffect(() => {
    // Assuming you have the logic to fetch list ID using token and then fetch images
    const fetchListIdAndImages = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8765/api/userList/decode_token?token=${token}`);
        const data = await response.json();
        const listId = data.list_id;
        
        const imagesResponse = await fetch('http://127.0.0.1:8765/api/user/get_All_cards_in_list/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ list_id: listId }),
        });
        const imagesData = await imagesResponse.json();
        setImages(imagesData.results); // Assuming imagesData is the array of image objects
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (token) {
      fetchListIdAndImages();
    }
  }, [token]);

  return (
    <div className='Userlist'>
      <ListDisplay images={images} />
    </div>
  );
};

export default UserList;
