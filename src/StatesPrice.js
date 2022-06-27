import React, { Component } from 'react';
import {StatesPrices, StateBox,Type,Price,Line,Pra,Btn} from './style.js';
class StatesPrice extends Component {
	render() {
		
		return (
			<StatesPrices>
				<StateBox>
					<Type>Basic</Type>
					<Price>$19.99</Price>
					<Line />
					<Pra>500 GB Storage</Pra>
					<Line />
					<Pra>2 Users Allowed</Pra>
					<Line />
					<Pra>Send up to 3 GB</Pra>
					<Line />
					<Btn Lineef="#">Learn More</Btn>
				</StateBox>
				<StateBox className="puple">
					<Type>Professional</Type>
					<Price>$24.99</Price>
					<Line />
					<Pra>1 TB Storage</Pra>
					<Line />
					<Pra>5 Users Allowed</Pra>
					<Line />
					<Pra>Send up to 10 GB</Pra>
					<Line />
					<Btn Lineef="#">Learn More</Btn>
				</StateBox>
				<StateBox>
					<Type>Master</Type>
					<Price>$39.99</Price>
					<Line />
					<Pra>2 TB Storage</Pra>
					<Line />
					<Pra>10 Users Allowed</Pra>
					<Line />
					<Pra>Send up to 20 GB</Pra>
					<Line />
					<Btn Lineef="#">Learn More</Btn>
				</StateBox>
			</StatesPrices>
		);
	}
}

export default StatesPrice;
