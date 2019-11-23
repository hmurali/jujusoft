import React from 'react';
//import React from './node_modules/react';
//import * as io from 'socket.io-client';
//import * as axios from './node_modules/axios';
import * as axios from 'axios';

const baseUrl = 'http://localhost:3001';

class PowerShell extends React.Component {
	state = {
		command:
			'Get-Process | Sort-Object -Descending CPU | Select-Object -First 40 -Property Id, Handles, Handle, Name, Description, CPU, NPM, PM, SI, VM, WS, Size, Path | ConvertTo-Json -Compress',

		format: null
	};

	onChange = (event) => {
		const command = event.target.value;
		this.setState({ command });
	};

	sendCommand = () => {
		console.log(this.state.command);
		console.log(this.props.selectedComputers);
		if (this.state.command.toLowerCase().includes('convertto-html')) {
			this.setState({ format: 'html' });
		}
		if (this.state.command.toLowerCase().includes('convertto-json')) {
			this.setState({ format: 'json' });
		}

		const body = {
			command: this.state.command,
			computers: this.props.selectedComputers
		};
		console.log(body);
		axios.default.post(`${baseUrl}/command`, body).then((poshRes) => {
			console.log(poshRes);
		});
	};

	render() {
		return (
			<section>
				<textarea id="command-to-send" type="text" onChange={this.onChange}>
					{this.state.command}
				</textarea>
				<button id="send-command" onClick={this.sendCommand}>
					send command
				</button>
			</section>
		);
	}
}

export default PowerShell;
