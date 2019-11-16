import React from "react";
//import logo from "./logo.svg";
import "./App.css";

import Chart from 'chart.js';
import { Line } from 'react-chartjs-2';

import processData from './processData.json';

//import serviceData from './serviceData.json';

const pData = processData; //array
//const sData = serviceData; //array - 268 results

console.log("process json: ", pData);
//console.log("service json: ", sData);

const pData = processData; //object
const sData = serviceData; //array - 268 results

//Data cleaning
//delete null values from pData DOES NOT DELETE NULL VALUES!!
function delet(obj) {
  console.log("obj is", obj);
  //console.log("obj.BasePriority is", obj.BasePriority);
  for (let prop in obj) {
    console.log("prop: ", prop);
    console.log("prop value: ", obj[prop]);
    if (obj.prop === null || obj.prop === undefined) {
      delete obj.prop;
    }
  }
  return obj;
}

const processesFiltered = delet(pData);

// const array_pData = Object.keys(pData).map(i => pData[i]);
// console.log("pData object is now ", array_pData);

//filter sData for services that can be shut down - 43 results
const servicesFiltered = sData.filter(function (item) {
  return item.CanShutdown === true;
})

console.log("process json coming in: ", pData);
console.log("service json coming in", sData);
console.log("processes filtered", processesFiltered);
console.log("services json Filtered: ", servicesFiltered);

Chart.defaults.global.defaultFontFamily = "Roboto, sans-serif";

function getData() {
  let data = [];

  data.push({
    title: 'Processes',
    data: processesFiltered
  });

  data.push({
    title: 'Services',
    data: servicesFiltered
  });

  return data;
}