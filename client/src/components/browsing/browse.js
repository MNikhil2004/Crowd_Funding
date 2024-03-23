import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import axios from 'axios';

function FundraiserCard({ fundraiser }) {
  return (
    <div className="card">
      <h2>{fundraiser.name}</h2>
      <p>{fundraiser.description}</p>
      <div className="icons">
        <a href={`https://wa.me/${fundraiser.whatsapp}`} target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
        <a href={`https://www.instagram.com/${fundraiser.instagram}`} target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
      <button>Donate</button>
    </div>
  );
}

function App() {
  const [fundraisers, setFundraisers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('https://api.example.com/fundraisers')
      .then(response => {
        setFundraisers(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredFundraisers = fundraisers.filter(fundraiser =>
    fundraiser.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Fundraisers</h1>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="card-container">
        {filteredFundraisers.map(fundraiser => (
          <FundraiserCard key={fundraiser.id} fundraiser={fundraiser} />
        ))}
      </div>
    </div>
  );
}

export default App;
