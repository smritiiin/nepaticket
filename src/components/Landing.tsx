// import React from "react";
// import { Button } from "./ui/button";
// import { Plane } from "lucide-react";
// import FlightSelection from "./FlightTypeSelection/FlightTypeSelection";
// import TripSelection from "./TripSelection/TripSelection";

// const Landing = () => {
// 	return (
// 		<div
// 			className="relative h-screen w-full bg-cover bg-center bg-no-repeat"
// 			style={{ backgroundImage: "url('/Landing.png')" }}
// 		>
// 			{/* Top FLIGHTS Button */}
// 			<div className="absolute top-6 left-6">
// 				<Button className="border border-black bg-slate-200 text-black rounded-3xl px-4 py-2 font-bold shadow">
// 					<Plane className="w-4 h-4 mr-2" />
// 					FLIGHTS
// 				</Button>
// 			</div>

// 			{/* Centered Content */}
// 			<div className="flex flex-col items-center justify-center h-full space-y-6 px-4 md:px-10">
// 				{/* Trip Toggle Group (One-way, Round-Trip, Multi-city) */}
// 				<p className="text-sm font-semibold mt-4 mb-2">Trip Type</p>
// 				<TripSelection />

// 				{/* Flight Type Toggle Group (International, Domestic) */}
// 				<p className="text-sm font-semibold mt-4 mb-2">Flight Type</p>
// 				<FlightSelection />

// 				{/* Tagline */}
// 				<h1 className="font-semibold text-3xl md:text-4xl italic text-[#6B6B6B] font-[cursive]">
// 					Your Gateway to the Airway...
// 				</h1>
// 			</div>
// 		</div>
// 	);
// };

// export default Landing;

import React from "react";
import { Button } from "./ui/button";
import { Plane } from "lucide-react";
import TripSelection from "./TripSelection/TripSelection";

const Landing = () => {
	return (
		<div className="bg-[url(/Landing.png)] h-screen w-full bg-no-repeat flex-col items-center px-7 ">
			<div>
				{/* Flight Button */}
				<Button className="border-black bg-slate-200 text-black rounded-3xl border-1 font-bold">
					<Plane className="w-4 h-4" />
					FLIGHTS
				</Button>
			</div>

			<div className="p-3">
				<TripSelection />
			</div>
		</div>
	);
};

export default Landing;
