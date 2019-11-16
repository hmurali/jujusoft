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






}
