import Image from "next/image";
// import { Inter } from "next/font/google";
// import styles from "./page.module.css";
import Banner from "@/components/Banner";
import Select from "@/components/Select";
import New from "@/components/New";
// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<main className="">
			MRENGA MOTORS
			<Banner />
			<Select />
			<New />
			{/* banner- search-date-location
    latest cars
    available cars
  */}
		</main>
	);
}
