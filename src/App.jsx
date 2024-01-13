import React, { useState, useEffect } from 'react';
import data from './data.json';
import './App.css'

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(data);
    console.log(data);
  }, []);

  const handleWebsiteClick = (url) => {
    window.location.href = `http://${url}`;
  };

  return (
    <div style={{display:'flex'}}>
      <div>
        {items.map(item => (
          <div className='Card' key={item.id}>
            <h1>Name: {item.name}</h1>
            <h2>Username: {item.username}</h2>
            <h2>Email: {item.email}</h2>
            <h2>City: {item.address.city}</h2>
            <h2>Street: {item.address.street}</h2>
            <h2>Suite: {item.address.suite}</h2>
            <h2>Zipcode: {item.address.zipcode}</h2>
            <h2>Phone: {item.phone}</h2>
            <h2>
              Website: <span
                style={{ color: 'blue', cursor: 'pointer', textDecoration: 'underline' }}
                onClick={() => handleWebsiteClick(item.website)}
              >
                {item.website}
              </span>
            </h2>
            <h2>company-name: {item.company.name}</h2>
          </div>
        ))}
      </div>
    </div>

  );
};

export default App;
