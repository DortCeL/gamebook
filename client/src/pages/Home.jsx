import React, { useState, useEffect } from "react";
import Feed from "../components/Feed";
import Leftbar from "../components/Leftbar";
import Navbar from "../components/Navbar";
import Rightbar from "../components/Rightbar";
import Footer from "../components/Footer";

function Home() {
	const username = "Current User";

	return (
		<>
			<Navbar username={username} />
			<div className='w-full flex flex-row justify-between'>
				<Leftbar username={username} />
				<Feed />
				<Rightbar />
			</div>
			<Footer />
		</>
	);
}

export default Home;
