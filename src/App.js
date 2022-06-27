import React, { useRef } from 'react';
import Monthly from './Monthly';
import Annually from './Annually';
import './App.css';
import imgs from './images/bg-top.svg';
import imgs2 from './images/bg-bottom.svg';

function App() {
	const inputEl = useRef(null);
	const showTarget = () => {
		if (inputEl.current.checked) {
			document.querySelectorAll('.price')[1].style.display = 'flex';
			document.querySelectorAll('.price')[0].style.display = 'none';
		} else {
			document.querySelectorAll('.price')[0].style.display = 'flex';
			document.querySelectorAll('.price')[1].style.display = 'none';
		}
	};

	return (
		<div className="App">
			
			<h2 className="heading">Our Pricing</h2>
			<div className="switch">
				<span className="btn" data-switch=".annually">
					Annually
				</span>
				<input type="checkbox" id="toggle" onChange={showTarget} ref={inputEl} />
				<label htmlFor="toggle">
					<div className="ball" />
				</label>
				<span className="btn" data-switch=".monthly">
					Monthly
				</span>
			</div>
			<div className="img-float">
				<img src={imgs} />
				<img src={imgs2} />
			</div>

			<Monthly />
			<Annually />
		</div>
	);
}

export default App;
