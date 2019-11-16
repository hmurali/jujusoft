import React from "react";
import "./App.css";
import Chart from 'chart.js';
import ChartLine from './components/ChartLine'
import processData from './processData.json';

const pData = processData;

Chart.defaults.global.defaultFontFamily = "Roboto, sans-serif";

class App extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {

    return (
      <ChartLine />
    )
  }
}

export default App;