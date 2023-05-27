import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FetchDataComponent = () => {
  useEffect(() => {
    axios({
      method: 'GET',
      url: 'https://api-football-v1.p.rapidapi.com/v2/timezone',
      headers: {
        'x-rapidapi-key': import.meta.env.VITE_REACT_APP_API_KEY,
        'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
      }
    })
    .then(response => {
      console.log(response.data);
    })
    .catch(err => {
      console.error(err);
    });
  }, []);

  return (
    <div>
      {/* You can use fetched data here. */}
    </div>
  );
}

export default FetchDataComponent;
