import React, { Component } from 'react'
import { Line } from 'react-chartjs-2';


import processData from '../../processData.json';
const pData = processData;

export default class ChartLine extends Component {
    constructor(props) {
        super(props);

        this.names = []
        this.values = []

        this.state = {
            value: "CPU",
            data: {
                labels: this.names,
                datasets: [

                    {
                        label: "Processes",
                        backgroundColor: "rgba(0, 255, 0, 0.75)",
                        data: this.values,
                    }
                ]

            }
        }

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
        const filteredData = data.filter(p => p[field])
        const map = new Map()
        filteredData.forEach(process => {
            if (!map.get(process.Name)) {
                map.set(process.Name, process[field])
                return
            }
            const prev = map.get(process.Name)
            const newVal = prev + process[field]
            map.set(process.Name, newVal)
        })

        const names = []
        const values = []
        map.forEach((val, key) => {
            names.push(key)
            values.push(val)
        })

        console.log("names are: ", names);
        console.log("values are: ", values);

        return { names, values }

    }

    handleChange(event) {
        this.setState({ value: event.target.value });

        const { names, values } = this.aggregateBy(this.state.value, pData);
        this.names = names;
        this.values = values;
        this.setState({
            data: {
                labels: this.names,
                datasets: [{
                    label: "Processes",
                    backgroundColor: "rgba(0, 255, 0, 0.75)",
                    data: this.values,
                }]
            }
        })
    }

    render() {
        return (
            <div>
                <h3>Chart Samples</h3>
                <Line
                    options={{
                        responsive: true
                    }}
                    data={this.state.data}
                />
                <form>
                    <label>
                        View:
                <select onChange={this.handleChange}>

                            <option value='CPU'>CPU</option>
                            <option value='Handles'>Handles</option>
                            <option value='VM'>Virtual Memory</option>
                            <option value='PM'>Physical Memory</option>
                        </select>
                    </label>
                    <input type='submit' value='Submit' />
                </form>


            </div>


        );
    }






}
