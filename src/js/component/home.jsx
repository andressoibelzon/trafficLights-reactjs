import React, {useState} from "react";



//create your first component
const Home = () => {
	const [activeRed, setActiveRed] = useState("opacity-100");
	const [activeYellow, setActiveYellow] = useState("opacity-25");
	const [ActiveGreen, setActiveGreen] = useState("opacity-25");

	//ternario ? :

	const changeColorRed = () => {
		if (activeRed === "opacity-25") {
			setActiveRed("opacity-100")
			setActiveYellow("opacity-25")
			setActiveGreen("opacity-25")
		}
	}

	const changeColorYellow = () => {
		if (activeYellow === "opacity-25") {
			setActiveYellow("opacity-100")
			setActiveRed("opacity-25")
			setActiveGreen("opacity-25")
		}
	}

	
	const changeColorGreen = () => {
		if (ActiveGreen === "opacity-25") {
			setActiveGreen("opacity-100")
			setActiveRed("opacity-25")
			setActiveYellow("opacity-25")
		}
	}


	return (
		<div className="container d-flex justify-content-center flex-column align-items-center rounded">
			<div className={"rounded-circle btn btn-danger "  + activeRed} onClick={changeColorRed}></div>
			<div className={"rounded-circle btn btn-warning " + activeYellow} onClick={changeColorYellow}></div>
			<div className={"rounded-circle btn btn-success " + ActiveGreen} onClick={changeColorGreen}></div>
		</div>
	);
};

export default Home;
