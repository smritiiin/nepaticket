import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const TripSelection = () => {
	return (
		<div>
			<ToggleGroup
				size={"lg"}
				type="multiple"
				className="border-2 border-black rounded-3xl bg-white overflow-hidden "
			>
				<ToggleGroupItem
					value="bold"
					aria-label="Toggle bold"
					className=" border-r-2 border-black"
				>
					One-Way Trip
				</ToggleGroupItem>
				<ToggleGroupItem
					value="italic"
					aria-label="Toggle italic"
					className=" border-r-2 border-black"
				>
					Round Trip
				</ToggleGroupItem>
				<ToggleGroupItem value="underline" aria-label="Toggle underline">
					Multi-City Trip
				</ToggleGroupItem>
			</ToggleGroup>
		</div>
	);
};

export default TripSelection;
