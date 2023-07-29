import React from "react";
import propTypes from "prop-types";
import SimpleCounter from "./simpleCounter";
import calculateSeconds from "../libTime";

const Home = ({ counter }) => {
	return (
		<>
			<SimpleCounter 
				hundredThousandsDigit={calculateSeconds(counter, 100000)}
				tenThousandsDigit={calculateSeconds(counter, 10000)}
				thousandsDigit={calculateSeconds(counter, 1000)}
				hundredsDigit={calculateSeconds(counter, 100)}
				tensDigit={calculateSeconds(counter, 10)}
				onesDigit={calculateSeconds(counter, 1)}
			/>
		</>
	);
};

Home.propTypes = {
	counter: propTypes.number
}

export default Home;
