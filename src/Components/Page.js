import React from "react";
import img1 from "./img/img1.jpeg";
import img2 from "./img/img2.jpeg";
import img3 from "./img/img3.jpeg";
import img4 from "./img/img4.jpeg";
import img5 from "./img/img5.jpeg";
import img6 from "./img/img6.jpeg";

function Page({
	index,
	dates = [1, 2, 3, 4, 5, 6],
	quote = "People do not decide their futures, they decide their habits and their habits decide their future.",
	month = "january",
}) {
	const images = [img1, img2, img3, img4, img5, img6];
	const getImage = () => {
		return images[index % 5];
	};
	return (
		<section className="sheet padding-10mm flex flex-col items-center justify-center text-center content-center">
			{/* <img className="h- absolute rounded-full opacity-20" src={getImage()} /> */}
			<div className="basis-1/4 flex flex-col gap-2 justify-centre items-center mt-4">
				<div className="border border-black w-full"></div>
				<h1 className="underline underline-offset-4 uppercase font-bold text-4xl">
					{month + " 2022"}
				</h1>
				<p className=" font-semibold text-xl">"{quote}"</p>
			</div>
			<div className="basis-3/4 grid grid-cols-3 gap-2 h-full w-full">
				{dates.map((date, index) => {
					return (
						<div key={index} className="flex flex-col text-center border border-black">
							<h1 className="basis-1/6 text-3xl border border-b-black">{date}</h1>
							<div className="basis-2/6 h-full w-full"></div>
						</div>
					);
				})}
			</div>
		</section>
	);
}

export default Page;
