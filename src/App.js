import React from 'react';
import './App.css';
import Chart from 'chart.js';
import * as io from 'socket.io-client';

import ChartLine from './components/ChartLine';
import PowerShell from './components/PowerShell';

import Footer from './components/Footer';
import Jumbotron from './components/Jumbotron';
import { Switch, Route } from 'react-router-dom';
import Overview from './components/Overview';

// const baseUrl = 'http://172.20.10.2:3000'
const baseUrl = 'http://localhost:3001';

Chart.defaults.global.defaultFontFamily = 'Roboto, sans-serif';

class App extends React.Component {
	state = {
		powerShellResponse: '',
		computerNames: [],
		computers: []
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

	render() {
		return (
			<div className="App">
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
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
									<a className="dropdown-item" href="signup.html">
										Processes and Performance
									</a>
									<a className="dropdown-item" href="signup.html">
										CPU
									</a>
									<a className="dropdown-item" href="signup.html">
										Memory
									</a>
									<a className="dropdown-item" href="signup.html">
										WiFi
									</a>
									<a className="dropdown-item" href="signup.html">
										GPU
									</a>
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
									<a className="dropdown-item" href="signup.html">
										DNS History
									</a>
									<a className="dropdown-item" href="signup.html">
										Current Network
									</a>
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
									<a className="dropdown-item" href="signup.html">
										Chrome
									</a>
									<a className="dropdown-item" href="signup.html">
										Visual Studio Code
									</a>
									<a className="dropdown-item" href="signup.html">
										Slack
									</a>
									<a className="dropdown-item" href="signup.html">
										Custom Script
									</a>

									<div className="dropdown-divider" />
									<a className="dropdown-item" href="signup.html">
										Restart Computer
									</a>
									<a className="dropdown-item" href="signup.html">
										Network
									</a>
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
									<a className="dropdown-item" href="signup.html">
										View, Add or Delete Devices
									</a>
									{/*
                        <!-- <a className="dropdown-item" href="signup.html">Home</a> --> */}
								</div>
							</li>
						</ul>
					</div>
					<button type="button" className="btn btn-outline-secondary">
						Sign Up
					</button>
					<button type="button" className="btn btn-outline-secondary">
						Login
					</button>
				</nav>
				<Jumbotron />

				<PowerShell selectedComputers={this.state.computerNames} />
				<hr />

				<div>
					<ul className="flex-row">
						{this.state.computers.map((comp) => (
							<li>
								<input type="checkbox" id={comp.name} value={comp.ip} onChange={this.computerChecked} />
								<label htmlFor={comp.name}>{comp.name}</label>
							</li>
						))}
					</ul>

					<ChartLine data={this.state.powerShellResponse} />
				</div>

				{/* <WhateverReactUseAsRouter /> */}

				<textarea value={JSON.stringify(this.state.powerShellResponse, undefined, 2)} rows={50} />
				<Footer />
			</div>
		);
	}
}

export default App;
