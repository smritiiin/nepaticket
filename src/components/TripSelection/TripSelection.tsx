// TripSelection.tsx
import { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import OneWayTrip from "./Trips/Oneway";
import Roundtrip from "./Trips/Roundtrip";
import Multicity from "./Trips/Multicity";

const TripSelection = () => {
	const [tripType, setTripType] = useState("one-way");

	return (
		<div className="space-y-6">
			<ToggleGroup
				size="lg"
				type="single"
				value={tripType}
				onValueChange={(value) => value && setTripType(value)}
				className="border-2 border-black rounded-3xl bg-white overflow-hidden"
			>
				<ToggleGroupItem
					value="one-way"
					aria-label="One Way"
					className="border-r-2 border-black"
				>
					One-Way Trip
				</ToggleGroupItem>
				<ToggleGroupItem
					value="round-trip"
					aria-label="Round Trip"
					className="border-r-2 border-black"
				>
					Round Trip
				</ToggleGroupItem>
				<ToggleGroupItem value="multi-city" aria-label="Multi City">
					Multi-City Trip
				</ToggleGroupItem>
			</ToggleGroup>

			{tripType === "one-way" && <OneWayTrip />}
			{tripType === "round-trip" && <Roundtrip />}
			{tripType === "multi-city" && <Multicity />}
		</div>
	);
};

export default TripSelection;
