import React from 'react';
import './App.css';
import Chart from 'chart.js';
import ChartLine from './components/ChartLine';
import Footer from './components/Footer';
import Jumbotron from './components/Jumbotron';
import 'bootstrap/dist/css/bootstrap.min.css';

import processData from './processData.json';

const pData = processData;

Chart.defaults.global.defaultFontFamily = 'Roboto, sans-serif';

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
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
			<ChartLine />

			{/* <WhateverReactUseAsRouter /> */}

			<Footer />
		</div>;
	}
}

export default App;
