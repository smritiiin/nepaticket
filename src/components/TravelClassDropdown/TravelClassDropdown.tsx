import { useState } from "react";
import { ChevronDown } from "lucide-react";

const classes = ["Economy", "Business"];

const TravelClassDropdown = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [selected, setSelected] = useState("Economy");

	return (
		<div className="relative">
			{/* Toggle */}
			<div
				className={`w-32 flex justify-between items-center px-4 py-2 bg-white border-2 border-black cursor-pointer transition-all duration-200 ${
					isOpen ? "rounded-t-2xl border-b-0" : "rounded-2xl"
				}`}
				onClick={() => setIsOpen((prev) => !prev)}
			>
				<span className="text-black font-medium">{selected}</span>
				<ChevronDown
					className={`w-4 h-4 transition-transform duration-100 ${
						isOpen ? "rotate-180" : ""
					}`}
				/>
			</div>

			{/* Dropdown */}
			<div
				className={`absolute z-10 left-0 w-32 bg-white border-x-2 border-b-2 border-black overflow-hidden transition-all duration-200 ${
					isOpen ? "max-h-40 opacity-100 rounded-b-2xl" : "max-h-0 opacity-0"
				}`}
				style={{ top: "100%" }}
			>
				{classes.map((item) => (
					<div
						key={item}
						className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
						onClick={() => {
							setSelected(item);
							setIsOpen(false);
						}}
					>
						{item}
					</div>
				))}
			</div>
		</div>
	);
};

export default TravelClassDropdown;
