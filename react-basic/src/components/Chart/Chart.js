import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = props => {
    const dataPointValues = props.dataPoints.map(data => data.value);
    console.log(dataPointValues);
    const totalMaximum = Math.max(...dataPointValues);

    console.log('totalMaximum', totalMaximum);

    console.log('props.dataPoints', props.dataPoints);
  return <div className="chart">
      {props.dataPoints.map(dataPoint => 
      <ChartBar 
        key={dataPoint.label}
        value={dataPoint.value} 
        maxValue={totalMaximum} 
        label={dataPoint.label}
      />)}
  </div>
};


export default Chart;