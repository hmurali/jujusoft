// import React from 'react';
// import ChartLine from './components/ChartLine';
// import PowerShell from './components/PowerShell';

import React, { Component } from 'react';
// import PowerShell from '../PowerShell';
// import ChartLine from '../ChartLine';

export default class Results extends Component {
	render() {
		return (
			<div>
				<h1>Display Results</h1>
			</div>
		);
	}
}

// export default function Results() {
// 	return (
// 		<div>
// 			<PowerShell selectedComputers={this.state.computerNames} />
// 			<hr />
// 			<div>
// 				{/* <ul className="flex-row"> */}
// 				<ul>
// 					{this.state.computers.map((comp) => (
// 						<li>
// 							<input type="checkbox" id={comp.name} value={comp.ip} onChange={this.computerChecked} />
// 							<label htmlFor={comp.name}>{comp.name}</label>
// 						</li>
// 					))}
// 				</ul>
// 				<ChartLine data={this.state.powerShellResponse} />
// 			</div>
// 			<textarea value={JSON.stringify(this.state.powerShellResponse, undefined, 2)} rows={50} />
// 		</div>
// 	);
// }
