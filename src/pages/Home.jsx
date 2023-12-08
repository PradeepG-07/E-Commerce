import React from 'react';
import Navbar from '../components/GlobalComponents/Navbar';
import Announcement from '../components/GlobalComponents/Announcement';
import Slider from '../components/HomeComponents/Slider';
import Products from '../components/HomeComponents/Products';
import Footer from '../components/GlobalComponents/Footer';

function Home() {

	return (
		<>
			<Navbar />
			<Announcement />
			<Slider />
			<Products />
			<Footer />
		</>
	)
}

export default Home;