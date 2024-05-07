import React from 'react';

const Home = () => {
return (
    <div>
    <h1>Welcome to My Website</h1>
    <p>This is the homepage of my Real Estate application.</p>
    <img src="https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Cityscape" />
    <section>
        <h2>About Us</h2>
        <p>We are a leading real estate agency dedicated to helping you find the perfect property.</p>
    </section>
    <section>
        <h2>Services</h2>
        <ul>
        <li>Property Buying</li>
        <li>Property Selling</li>
        <li>Property Rentals</li>
        <li>Property Management</li>
        </ul>
    </section>
    <section>
        <h2>Featured Properties</h2>
        <div className="property-list">
        {
        }
        </div>
    </section>
    <section>
        <h2>Contact Us</h2>
        <p>If you have any questions or need assistance, feel free to contact us.</p>
    </section>
    </div>
    );
};

export default Home;
