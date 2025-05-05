import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const FlightSelection = () => {
	return (
		<div>
			<ToggleGroup
				size={"lg"}
				type="multiple"
				className="border-2 border-black rounded-3xl bg-white overflow-clip "
			>
				<ToggleGroupItem
					value="bold"
					aria-label="Toggle bold"
					className=" border-r-2 border-black"
				>
				International
				</ToggleGroupItem>
				<ToggleGroupItem
					value="italic"
					aria-label="Toggle italic"
				>
					National
				</ToggleGroupItem>
				
			</ToggleGroup>
		</div>
	);
};

export default FlightSelection;
