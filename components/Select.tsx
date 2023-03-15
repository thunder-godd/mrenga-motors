import Image from "next/image";
import slf from "../public/images/slf.jpg";
import drv from "../public/images/drv.jpg";
const Select = () => {
	return (
		<div className="grid grid-cols-2 max-w-4xl mx-auto gap-4">
			<div className="relative">
				<Image src={slf} alt="image of a car" />
				<div className="absolute bg-gray text-center top-[50%] left-[50%] opacity-80  -translate-x-1/2 -translate-y-1/2 rounded-lg p-8">
					<p>Drive Yourself</p>
					<button> Self Drive</button>
				</div>
			</div>
			<div className="relative">
				<Image src={drv} alt="image of a car" />
				<div className="absolute bg-gray text-center top-[50%] left-[50%] opacity-80  -translate-x-1/2 -translate-y-1/2 rounded-lg p-8">
					<p>Hire A Professional Driver</p>
					<button> Hire Driver</button>
				</div>
			</div>
		</div>
	);
};

export default Select;
