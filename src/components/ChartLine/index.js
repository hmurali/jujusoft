import React, { Component } from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';

// import processData from '../../processData.json';
// const pData = processData;

export default class ChartLine extends Component {
	constructor(props) {
		super(props);
		console.log(props);
		console.log(this.props);

		this.names = [];
		this.values = [];

		this.state = {
			chartType: 'bar',
			options: [],
			value: 'CPU',
			data: {
				labels: this.names,
				datasets: [
					{
						label: 'Processes',
						backgroundColor: 'rgba(0, 255, 0, 0.75)',
						data: this.values
					}
				]
			}
		};

		this.aggregateBy = this.aggregateBy.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	/**
     *
     *
     * @param {string} field
     * @param {Array} data
     */
	aggregateBy(field, data) {
		const filteredData = data.filter((p) => p[field]);
		const map = new Map();
		filteredData.forEach((process) => {
			if (!map.get(process.Name)) {
				map.set(process.Name, process[field]);
				return;
			}
			const prev = map.get(process.Name);
			const newVal = prev + process[field];
			map.set(process.Name, newVal);
		});

		const names = [];
		const values = [];
		map.forEach((val, key) => {
			names.push(key);
			values.push(val);
		});

		console.log('names are: ', names);
		console.log('values are: ', values);

		return { names, values };
	}

	getOptions() {
		try {
			const testItem = this.props.data[0];
			const options = Object.keys(testItem).filter((key) => {
				console.log(key);
				const found = !Number.isNaN(Number(testItem[key])) && testItem[key];
				console.log(key, testItem[key], found);
				return found;
			});
			return options;
		} catch (err) {
			console.warn(err);
			return [];
		}
	}

	handleChange(event) {
		if (event) {
			this.setState({ value: event.target.value });
		}
		const { names, values } = this.aggregateBy(this.state.value, this.props.data || []);
		this.names = names;
		this.values = values;
		const options = this.getOptions();
		console.log(options);
		this.setState({
			options,
			data: {
				labels: this.names,
				datasets: [
					{
						label: event && event.target && event.target.value,
						backgroundColor: 'rgba(0, 255, 0, 0.75)',
						data: this.values
					}
				]
			}
		});
	}
	refresh = (ev) => {
		ev.preventDefault();
		this.handleChange();
	};
	changeChartType = (event) => {
		this.setState({ chartType: event.target.value });
	};

	render() {
		// this.handleChange()
		console.log(this.props.data);
		return (
			<div>
				<h3>Chart Samples</h3>
				<select onChange={this.changeChartType}>
					<option value="line">Line</option>
					<option value="bar" selected>
						Bar
					</option>
					<option value="pie">Pie</option>
				</select>
				{this.state.chartType === 'bar' && <Bar options={{ responsive: true }} data={this.state.data} />}
				{this.state.chartType === 'line' && <Line options={{ responsive: true }} data={this.state.data} />}
				{this.state.chartType === 'pie' && <Pie options={{ responsive: true }} data={this.state.data} />}

				<form>
					<label>
						View:
						<select onChange={this.handleChange}>
							{this.state.options.map((opt) => <option value={opt}>{opt}</option>)}

							<option value="">none</option>
						</select>
						<button onClick={this.refresh}>refresh</button>
					</label>
				</form>
			</div>
		);
	}
}
