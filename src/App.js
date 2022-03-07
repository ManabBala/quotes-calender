import Page from "./Components/Page";

function App() {
	const quotes = [
		"Keep pursuing your goals whether you're alone, broke, tired or scared. Keep going",
		"Be silent, when you don't have all the fact.",
		"Addiction of person is more dangerous than Drug.",
		"Time will show you who deserve your heart.",
		"You still haven't met all the People who are going to Love You.",
		"I'm not talented, I'm obsessed.",
		"People do not decide their futures, they decide their habits and their habits decide their futures.",
		"Learn to trust the journey even if you don't understand it.",
		"The most intellectual person is the one who Listens, Thinks and Observes.",
		"Don't listen to people who tell you what to do. Listen to people who encourage you to do what you know in your heart is right.",
		"Without struggle, there is no Progress.",
		"If it makes you happy, it's not waste of time.",
		"The trouble is, You think you have Time.",
		"Enjoy life Today, yesterday is gone & tomorrow may never come.",
		"Don't stop until you are Proud.",
		"You are driver of your own Life, Don't let anyone seal your seat.",
		"Never Give Up.",
		"F**k an average life, Be Legendary.",
		"Don't climb mountains so that people can see you. Climb mountains so that you can see the World.",
		"Hard work Beats Talent, when Talent doesn't work Hard.",
		"You deserve someone who respects you when you are not around.",
		"Thinking is difficult, that's why most people judge.",
		"Dream so big that you feel uncomfortable talking about it with average people.",
		"You cannot make someone understand a message they are not ready to receive.",
		"Help others!! Even if you know they won't help you back.",
		"Never explain yourself to anyone...Because the person who likes you doesn't need it, and the person who dislikes you won't believe it.",
		"The best things in life aren't things.",
		"It's Easy to stand in a crowd. It takes courage to stand alone.",
		"Live you Life and Forget your Age.",
		"If it was easy, everyone would do it.",
	];
	const months = [];
	const firstDate = new Date("01/01/2022"); // 2,jan,2022

	//generating months name
	const incrementMonth = (oldDate, incrementBy = 1) => {
		const newDate = new Date();
		newDate.setMonth(oldDate.getMonth() + incrementBy);
		return newDate;
	};
	for (let i = 0; i <= 11; i++) {
		const month = incrementMonth(firstDate, i).toLocaleString("en-US", { month: "long" });
		// console.log(month);
		months.push(month);
	}
	console.log(months);
	console.log(quotes);

	const getQuotes = (index) => {
		const totalQuotes = quotes.length;
		// console.log("Total no of quotes:", totalQuotes);
		console.log(index % totalQuotes);
		return quotes[index % totalQuotes];
	};

	let pagesNo = 0;
	return (
		<div className=" flex flex-col justify-center items-center">
			{months.map((month, index) => {
				const pages = [];
				const startDate = new Date(`0${index + 1}/01/2022`);
				// console.log(startDate.getMonth());
				let dates = [];
				while (startDate.toLocaleString("en-US", { month: "long" }) === month) {
					// console.log(startDate.getDate());
					dates.push(startDate.getDate());
					startDate.setDate(startDate.getDate() + 1);
					// console.log(month);
				}
				console.log(dates);
				let datesForPage = [];
				let sliceNo = 1;
				let sliceStart = 0;
				let sliceEnd = 5;
				while (sliceNo <= 6) {
					sliceEnd = sliceNo * 6;
					datesForPage = dates.slice(sliceStart, sliceEnd);
					// console.log(datesForPage);
					sliceStart = sliceEnd;
					sliceNo++;
					if (datesForPage.length !== 0) {
						pages.push(
							<Page key={pagesNo} index={pagesNo} quote={getQuotes(pagesNo)} month={month} dates={datesForPage} />
						);
						pagesNo++;
					}
				}
				return pages;
			})}
		</div>
	);
}

export default App;
