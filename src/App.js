import React from 'react';
import './App.css';
import Chart from 'chart.js';
import * as io from 'socket.io-client';

import ChartLine from './components/ChartLine';

import PowerShell from './components/Powershell/index';
//import PowerShell from './components/PowerShell';

import Footer from './components/Footer';
import Jumbotron from './components/Jumbotron';
import { Switch, Route, NavLink } from 'react-router-dom';
import Overview from './components/Overview';
import Results from './components/Results';
import Signup from './components/SignUp';
import Login from './components/Login';

// const baseUrl = 'http://172.20.10.2:3000'
const baseUrl = 'http://localhost:3001';
const commandMap = {

	'get-process':
		'Get-Process | Sort-Object -Descending CPU | Select-Object -First 40 -Property Id, Handles, Handle, Name, Description, CPU, NPM, PM, SI, VM, WS, Size, Path | ConvertTo-Json -Compress',
	'get-memory': 'Get-WmiObject -class "Win32_PhysicalMemoryArray"',
	'get-cpu': 'Get-WmiObject -Class Win32_Processor | Select-Object -Property Name, Number',
	'get-wifi': 'ipconfig',
	'get-gpu': 'foreach($gpu in Get-WmiObject Win32_VideoController) {Write-Host $gpu.Description}',
	'get-dns': 'ipconfig /displaydns',
	'get-network': 'Get-NetIPConfiguration',
	'get-chrome': 'Start-Process "chrome.exe" "www.bootcampspot.com',
	'get-vscode': 'Start-Process "code"',
	'get-slack': 'Start-Process "slack"',
	'get-custom': null,
	'get-restart': 'Computer-Restart',
	'get-network': 'ipconfig',
	'get-device': 'get-localuser'
};

Chart.defaults.global.defaultFontFamily = 'Roboto, sans-serif';

class App extends React.Component {
	state = {
		powerShellResponse: '',
		computerNames: [],
		computers: [],
		command: ''
	};

	constructor(props) {
		super(props);

		this.computers = [];
		this.selectedComputers = new Set();

		this.socket = io(baseUrl);
		this.socket.on('commandStream', (event) => {
			let res;
			try {
				res = JSON.parse(event);
			} catch (err) {
				console.warn(err);
				res = event;
			}

			this.setState({ powerShellResponse: res });
		});

		this.socket.on('computer:loggedIn', (computer) => {
			console.log('computer', computer);
			const found = this.computers.find((comp) => comp.name === computer.name);
			if (!found) {
				this.computers.push(computer);
			}
			this.setState({ computers: this.computers });
		});

		this.socket.on('computer:disconnected', (computer) => {
			console.info('computer connected', computer);
			// this.
		});
	}

	computerChecked = (event) => {
		const { checked, id, value } = event.target;
		console.log(checked);
		console.log(value);
		console.log(id);
		if (checked) {
			this.selectedComputers.add(id);
		} else {
			this.selectedComputers.has(id) && this.selectedComputers.delete(id);
		}

		console.log(this.selectedComputers);
		this.setState({ computerNames: Array.from(this.selectedComputers) });

		// this.selectedComputers.add()
	};

	handleCommandChange = (event) => {
		const key = event.target.dataset.command;
		const command = commandMap[key];
		console.log(command);
		this.setState({ command: command });
	};

	render() {
		return (
			<div className="App">
				<nav className="navbar navbar-expand-lg navbar-light">
					<a href="/home">
						<img src="./img/logo.png" alt="HTML5 Icon" style={{ width: '300px', height: '50px' }} />
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item dropdown">
								<a
									className="nav-link dropdown-toggle"
									href="#"
									id="navbarDropdown"
									role="button"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false"
								>
									Processes
								</a>
								<div className="dropdown-menu" aria-labelledby="navbarDropdown">

									<span
										className="dropdown-item"
										data-command="get-process"
										onClick={this.handleCommandChange}
									>
										Processes and Performance
									</span>
									{/* <a className="dropdown-item" href="signup.html"> */}
									<span
										className="dropdown-item"
										data-command="get-cpu"
										onClick={this.handleCommandChange}
									>
										CPU
									</span>
									{/* <a className="dropdown-item" href="signup.html"> */}
									<span
										className="dropdown-item"
										data-command="get-memory"
										onClick={this.handleCommandChange}
									>
										Memory
									</span>
									{/* <a className="dropdown-item" href="signup.html"> */}
									<span
										className="dropdown-item"
										data-command="get-wifi"
										onClick={this.handleCommandChange}
									>
										WiFi
									</span>
									{/* <a className="dropdown-item" href="signup.html"> */}
									<span
										className="dropdown-item"
										data-command="get-gpu"
										onClick={this.handleCommandChange}
									>

										GPU
									</span>
								</div>
							</li>
							<li className="nav-item dropdown">
								<a
									className="nav-link dropdown-toggle"
									href="#"
									id="navbarDropdown"
									role="button"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false"
								>
									WiFi and Network Data
								</a>
								<div className="dropdown-menu" aria-labelledby="navbarDropdown">

									<span
										className="dropdown-item"
										data-command="get-dns"
										onClick={this.handleCommandChange}
									>
										DNS History
									</span>

									{/* <a className="dropdown-item" href="signup.html"> */}
									<span
										className="dropdown-item"
										data-command="get-network"
										onClick={this.handleCommandChange}
									>

										Current Network
									</span>
								</div>
							</li>

							<li className="nav-item dropdown">
								<a
									className="nav-link dropdown-toggle"
									href="#"
									id="navbarDropdown"
									role="button"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false"
								>
									Start or Stop Common Processes
								</a>
								<div className="dropdown-menu" aria-labelledby="navbarDropdown">

									<span
										className="dropdown-item"
										data-command="get-chrome"
										onClick={this.handleCommandChange}
									>
										Chrome
									</span>
									{/* <a className="dropdown-item" href="signup.html"> */}
									<span
										className="dropdown-item"
										data-command="get-vscode"
										onClick={this.handleCommandChange}
									>
										Visual Studio Code
									</span>

									<span
										className="dropdown-item"
										data-command="get-slack"
										onClick={this.handleCommandChange}
									>
										Slack
									</span>

									<span
										className="dropdown-item"
										data-command="get-custom"
										onClick={this.handleCommandChange}
									>
										Custom Script
									</span>

									<div className="dropdown-divider" />

									<span
										className="dropdown-item"
										data-command="get-restart"
										onClick={this.handleCommandChange}
									>
										Restart
									</span>
									<span
										className="dropdown-item"
										data-command="get-network"
										onClick={this.handleCommandChange}
									>
										Network
									</span>

								</div>
							</li>

							<li className="nav-item dropdown">
								<a
									className="nav-link dropdown-toggle"
									href="#"
									id="navbarDropdown"
									role="button"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false"
								>
									Device
								</a>
								<div className="dropdown-menu" aria-labelledby="navbarDropdown">
									{/* <a className="dropdown-item" href="signup.html">
								 */}

									<span
										className="dropdown-item"
										data-command="get-device"
										onClick={this.handleCommandChange}
									>
										View, Add or Delete Devices
									</span>

									{/*
                        <!-- <a className="dropdown-item" href="signup.html">Home</a> --> */}
								</div>
							</li>
						</ul>
					</div>
					<button type="button" className="btn btn-outline-secondary">
						<NavLink style={{ textDecoration: 'none', color: '#000' }} to="/signup">
							Sign Up
						</NavLink>
						{/* <Link to="/signup">Sign Up</Link> */}
					</button>
					<button type="button" className="btn btn-outline-secondary">
						<NavLink style={{ textDecoration: 'none', color: '#000' }} to="/login">
							Login
						</NavLink>
					</button>
				</nav>
				<Jumbotron />
				<Switch>

					<Route path="/" component={Overview} exact />
					<Route path="/results" component={Results} exact>
						<PowerShell selectedComputers={this.state.computerNames} command={this.state.command} />
						<hr />

						<div>
							<ul className="flex-row">
								{this.state.computers.map((comp) => (
									<li>
										<input
											type="checkbox"
											id={comp.name}
											value={comp.ip}
											onChange={this.computerChecked}
										/>
										<label htmlFor={comp.name}>{comp.name}</label>
									</li>
								))}
							</ul>

							<ChartLine data={this.state.powerShellResponse} />
						</div>

						<textarea value={JSON.stringify(this.state.powerShellResponse, undefined, 2)} rows={50} />
					</Route>
					<Route path="/signup" component={Signup} exact />

					<Route path="/login" component={Login} exact />

				</Switch>

				<Footer />
			</div>
		);
	}
}

export default App;
