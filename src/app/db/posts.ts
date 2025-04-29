import { Post } from "../interfaces/post.interface";

export const posts: Post[] = [
	{
		id: 1,
		title: "Exploring the Alps",
		brief:
			"Discover the breathtaking beauty of the Alps and the best hiking trails.",
		text: "The Alps are a stunning mountain range that spans across several European countries. This guide will take you through the most scenic hiking trails, charming villages, and must-visit spots for an unforgettable adventure.",
		author: "John Doe",
		imageUrl:
			"https://plus.unsplash.com/premium_photo-1688655246851-1d2dadffd92f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		category: "Adventure",
		publicationDate: new Date("2023-01-15"),
	},
	{
		id: 2,
		title: "A Weekend in Paris",
		brief: "Experience the charm of Paris in just two days.",
		text: "Paris, the city of love, offers a unique blend of history, art, and culture. This guide will help you make the most of your weekend with recommendations for iconic landmarks, cozy cafes, and hidden gems.",
		author: "Jane Smith",
		imageUrl:
			"https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		category: "City Breaks",
		publicationDate: new Date("2023-02-10"),
	},
	{
		id: 3,
		title: "Safari Adventure in Kenya",
		brief: "Get up close with wildlife on a thrilling safari in Kenya.",
		text: "Kenya is home to some of the most diverse wildlife on the planet. This article explores the best safari destinations, tips for spotting the Big Five, and how to make your trip eco-friendly.",
		author: "Alice Johnson",
		imageUrl:
			"https://images.unsplash.com/photo-1494783367193-149034c05e8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		category: "Adventure",
		publicationDate: new Date("2023-03-05"),
	},
	{
		id: 4,
		title: "Relaxing in the Maldives",
		brief: "Unwind on the pristine beaches of the Maldives.",
		text: "The Maldives is a tropical paradise known for its crystal-clear waters, luxurious resorts, and serene beaches. Learn about the best islands to visit, activities to try, and tips for a relaxing getaway.",
		author: "Robert Brown",
		imageUrl:
			"https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		category: "Luxury",
		publicationDate: new Date("2023-04-20"),
	},
	{
		id: 5,
		title: "Cultural Journey through Japan",
		brief: "Immerse yourself in the rich culture and traditions of Japan.",
		text: "Japan offers a unique blend of ancient traditions and modern innovation. This guide covers everything from historic temples and tea ceremonies to bustling cities and culinary delights.",
		author: "Emily Davis",
		imageUrl:
			"https://plus.unsplash.com/premium_photo-1664368832403-38da21a65fed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		category: "Culture",
		publicationDate: new Date("2023-05-15"),
	},
	{
		id: 6,
		title: "Road Trip Across the USA",
		brief:
			"Explore the diverse landscapes of the United States on an epic road trip.",
		text: "The USA is a vast country with diverse landscapes, from deserts and mountains to forests and coastlines. This guide provides tips for planning your route, must-see destinations, and how to make the most of your road trip.",
		author: "Michael Wilson",
		imageUrl:
			"https://images.unsplash.com/photo-1741209488962-4294c0b48d4a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		category: "Road Trips",
		publicationDate: new Date("2023-06-10"),
	},
	{
		id: 7,
		title: "Discovering Ancient Egypt",
		brief: "Step back in time and explore the wonders of Ancient Egypt.",
		text: "Ancient Egypt is a land of mystery and history, with iconic landmarks like the Pyramids of Giza and the Sphinx. This guide delves into the rich culture, fascinating myths, and must-visit sites of this ancient civilization.",
		author: "Sophia Carter",
		imageUrl:
			"https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		category: "History",
		publicationDate: new Date("2023-07-01"),
	},
	{
		id: 8,
		title: "Island Hopping in Greece",
		brief: "Experience the charm of Greece through its stunning islands.",
		text: "Greece is home to some of the most beautiful islands in the world. This guide highlights the best islands to visit, from Santorini’s iconic sunsets to Mykonos’ vibrant nightlife.",
		author: "Liam Johnson",
		imageUrl:
			"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		category: "Beach",
		publicationDate: new Date("2023-08-10"),
	},
	{
		id: 9,
		title: "Exploring the Amazon Rainforest",
		brief:
			"Dive into the heart of the Amazon and discover its incredible biodiversity.",
		text: "The Amazon Rainforest is a natural wonder, teeming with unique wildlife and lush vegetation. This guide provides tips for eco-friendly exploration and highlights the best spots for adventure.",
		author: "Olivia Martinez",
		imageUrl:
			"https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		category: "Nature",
		publicationDate: new Date("2023-09-05"),
	},
	{
		id: 10,
		title: "The Magic of New Zealand",
		brief: "Discover the stunning landscapes and culture of New Zealand.",
		text: "New Zealand is a land of breathtaking beauty, from its majestic mountains to its serene beaches. This guide explores the best hiking trails, cultural experiences, and adventure activities.",
		author: "Ethan Brown",
		imageUrl:
			"https://images.unsplash.com/photo-1741209488962-4294c0b48d4a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		category: "Adventure",
		publicationDate: new Date("2023-10-15"),
	},
	{
		id: 11,
		title: "Foodie Tour in Italy",
		brief: "Indulge in the culinary delights of Italy.",
		text: "Italy is a paradise for food lovers, offering a rich variety of dishes and flavors. This guide takes you through the best regions for authentic Italian cuisine, from pasta and pizza to gelato and wine.",
		author: "Isabella Rossi",
		imageUrl:
			"https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		category: "Food",
		publicationDate: new Date("2023-11-20"),
	},
];
