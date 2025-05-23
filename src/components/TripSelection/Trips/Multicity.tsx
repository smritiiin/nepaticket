// components/trips/Multicity.tsx
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, ArrowLeftRight } from "lucide-react";

const Multicity = () => {
	const [cities, setCities] = useState<string[]>([]);

	// useEffect(() => {
	// 	fetch(
	// 		"https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/cities.json"
	// 	)
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			// Get first 100 cities or filter as needed
	// 			const cityNames = data?.slice(0, 100).map((city: any) => city.name);
	// 			setCities(cityNames);
	// 		})
	// 		.catch((err) => console.error("Failed to fetch cities", err));
	// }, []);

	return (
		<div className="bg-[#E6E6E6] p-3 rounded-3xl grid grid-cols-4 gap-2">
			<div className="flex ">
				<div className="rounded-2xl border border-black">
					<select className="p-2 rounded">
						<option>Leaving from</option>
						{/* {cities.map((city) => (
							<option key={city}>{city}</option>
						))} */}
					</select>
				</div>
				<ArrowLeftRight />

				<div className="rounded-2xl border border-black">
					<select className="p-2 rounded">
						<option>Going to</option>
						{/* {cities.map((city) => (
							<option key={city}>{city}</option>
						))} */}
					</select>
				</div>
			</div>
			<div className="rounded-2xl border border-black overflow-hidden">
				<Input type="number" min={1} placeholder="No. of travellers" />
			</div>
			<div className="rounded-2xl border border-black overflow-hidden">
				<Input type="date" placeholder="Date" />
			</div>
			<Button className="w-full rounded-3xl bg-[#16214D]">
				Search
				<Search />
			</Button>
		</div>
	);
};

export default Multicity;
