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






}
