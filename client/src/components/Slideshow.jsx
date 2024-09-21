import { useEffect, useState } from "react";

const images = [
	"game1.jpg",
	"game2.jpg",
	"game3.jpg",
	"game4.jpg",
	"game5.jpg",
];

const Slideshow = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
		}, 3000); // Change image every 3 seconds

		return () => clearInterval(interval);
	}, []);

	return (
		<div className='relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg'>
			<div
				className='flex transition-transform duration-500'
				style={{ transform: `translateX(-${currentIndex * 100}%)` }}
			>
				{images.map((image, index) => (
					<img
						key={index}
						src={image}
						alt={`Slide ${index + 1}`}
						className='w-full max-h-[500px] object-cover' // Increase max height
					/>
				))}
			</div>
			<div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2'>
				{images.map((_, index) => (
					<div
						key={index}
						className={`h-2 w-2 rounded-full ${
							currentIndex === index ? "bg-blue-600" : "bg-gray-300"
						}`}
					/>
				))}
			</div>
		</div>
	);
};

export default Slideshow;
