import React from "react";
import { Button } from "./ui/button";
import { Plane } from "lucide-react";
import TripSelection from "./TripSelection/TripSelection";

const Landing = () => {
	return (
		<div className="bg-[url(/Landing.png)] h-screen w-full bg-no-repeat flex-col items-center px-7 pt-7 ">
			<div>
				{/* Flight Button */}
				<Button className="border-black bg-slate-200 text-black rounded-3xl border-1 font-bold">
					<Plane className="w-4 h-4" />
					FLIGHTS
				</Button>
			</div>

			<div className="py-7">
				<TripSelection />
			</div>
		</div>
	);
};

export default Landing;
