import React, { useState } from 'react';

const Search = () => {
const [searchTerm, setSearchTerm] = useState('');

const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    /////////////
    };

return (
    <div>
    <h2>Search Properties</h2>
    <input type="text" value={searchTerm} onChange={handleSearchChange} placeholder="Search by location, price, etc." />
    </div>
    );
};

export default Search;