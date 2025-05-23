import React from "react";
import { Button } from "./ui/button";
import { Plane } from "lucide-react";
import FlightSelection from "./FlightTypeSelection/FlightTypeSelection";
import TripSelection from "./TripSelection/TripSelection";


const Landing = () => {
	return (
		<div className="bg-[url(/landing.png)] h-screen w-full bg-no-repeat flex-col items-center px-7">
			<div>
				<Button className="border-black bg-slate-200 text-black rounded-3xl border-1 font-bold">
					<Plane className="w-4 h-4" />
					FLIGHTS
				</Button>
			</div>

			<div className="flex">
				<TripSelection />
				<FlightSelection />
			</div>

			
		</div>
	);
};

export default Landing;
