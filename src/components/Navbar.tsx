"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "./ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Menu } from "lucide-react";

const Navbar = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<nav className="flex items-center justify-between bg-[#E6E6E6] px-4 py-3 md:px-8">
			{/* Logo */}
			<div className="flex-shrink-0">
				<Image
					src="/logo.png"
					alt="NepaTickets Logo"
					height={40}
					width={70}
					className="h-10 w-auto"
				/>
			</div>

			{/* Desktop Navigation */}
			<div className="hidden md:flex items-center space-x-6">
				<a href="/" className="text-[#16214D] hover:text-sky-950">
					Events
				</a>
				<a href="/" className="text-[#16214D] hover:text-sky-950">
					About
				</a>
			</div>

			{/* Right-side items */}
			<div className="flex items-center space-x-4">
				{/* Language Switcher */}
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button
							variant="ghost"
							className="text-[#16214D] hover:bg-transparent hover:text-sky-950"
						>
							EN
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent className="min-w-[120px]">
						<DropdownMenuItem>English (EN)</DropdownMenuItem>
						<DropdownMenuItem>नेपाली (NE)</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>

				{/* Sign In Button */}
				<Button className="bg-[#16214D] hover:bg-sky-950 rounded-3xl hidden md:block">
					Sign In
				</Button>

				{/* Mobile Menu Button */}
				<Button
					variant="ghost"
					className="md:hidden p-2"
					onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
				>
					<Menu className="h-6 w-6 text-[#16214D]" />
				</Button>
			</div>

			{/* Mobile Menu */}
			{mobileMenuOpen && (
				<div className="absolute top-16 left-0 right-0 bg-[#E6E6E6] shadow-md md:hidden p-4 space-y-4">
					<a
						href="/events"
						className="block text-[#16214D] hover:text-sky-950"
						onClick={() => setMobileMenuOpen(false)}
					>
						Events
					</a>
					<a
						href="/about"
						className="block text-[#16214D] hover:text-sky-950"
						onClick={() => setMobileMenuOpen(false)}
					>
						About
					</a>
					<Button
						className="w-full bg-[#16214D] hover:bg-sky-950 rounded-3xl"
						onClick={() => setMobileMenuOpen(false)}
					>
						Sign In
					</Button>
				</div>
			)}
		</nav>
	);
};

export default Navbar;

// import Image from "next/image";
// import React from "react";
// import { Button } from "./ui/button";

// const Navbar = () => {
// 	return (
// 		<div className="flex bg-[#E6E6E6]">
// 			<div>
// 				<Image src="/logo.png" alt="LOGO" height={40} width={70}></Image>
// 			</div>
// 			<div>
// 				<div>
// 					<Button className="bg-[#16214D] hover:bg-sky-950 rounded-3xl">
// 						Sign Up
// 					</Button>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Navbar;
