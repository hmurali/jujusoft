import React from "react";
//import logo from "./logo.svg";
import "./App.css";

import Chart from 'chart.js';
import { Line } from 'react-chartjs-2';

import processData from './processData.json';

const pData = processData;
console.log("process json: ", pData);

/**
 *
 *
 * @param {string} field
 * @param {Array} data
 */
function aggregateBy(field, data) {
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

    // console.log(process)
    // console.log(process.Name, newVal)
  })

  const names = []
  const values = []
  map.forEach((val, key) => {
    names.push(key)
    values.push(val)
  })

  return { names, values }
}

//hard-coding field name here need this.state.value to be an parameter for this function
const { names, values } = aggregateBy("VM", pData);
console.log("names is: ", names);
console.log("values is: ", values);

Chart.defaults.global.defaultFontFamily = "Roboto, sans-serif";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "CPU",
      data: {

        labels: names,
        datasets: [

          {
            label: "Processes",
            backgroundColor: "rgba(0, 255, 0, 0.75)",
            data: values
          }
        ]

      }
    }

    //this.aggregateBy = this.aggregateBy.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    //alert("You cho0se: " + this.state.value);
    this.aggregateBy(this.state.value, pData);
    //this.aggregateBy(names, values);
    event.preventDefault();
  }

  render() {
    // const pData = require("./processData.json");
    // console.log("pData is ", pData);

    return (
      <div style={{ position: 'relative', width: 600, height: 550 }}>
        <h3>Chart Samples</h3>
        <Line
          options={{
            responsive: true
          }}
          data={this.state.data}
        />
        <form onSubmit={this.handleSubmit}>
          <label>
            Show Me:
          <select value={this.state.value} onChange={this.handleChange}>

              <option value='CPU'>CPU</option>
              <option value='Handles'>Handles</option>
              <option value='VM'>Virtual Memory</option>
              <option value='PM'>Physical Memory</option>
            </select>
          </label>
          <input type='submit' value='Submit' />
        </form>
        <p>
          CPU(s): The amount of processor time that the process has used on all processors, in seconds.<br /><br />
          Handles: The number of handles that the process has opened. <br /><br />
          VM(M): The amount of virtual memory that the process is using, in megabytes. Virtual memory includes storage in the paging files on disk.<br /><br />
          PM(K): The amount of pageable memory that the process is using, in kilobytes.<br /><br />
        </p>


      </div>

    );
  }
}

export default App;



