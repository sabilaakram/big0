// "use client"
// import React from 'react'
// import { useState } from 'react'
// import BarChart from '@/app/business-intelligence/charts/barchart'
// import { UserData } from '@/app/business-intelligence/charts/data'

// const BarGraph = () => {
// const [userData, setUserData] = useState({
//   labels: UserData.map((data) => data.year),
//   datasets: [{
//     label: "UserGained",
//     data: UserData.map((data) => data.userGain),
//     backgroundColor: ["#02AFBB", "#0885F3", "#FAB13F", "#005EB7", "#808080"],
//     axis: 'y',

//   }],
// })

//     return (
//       <div style={{width:500}}>
//           <BarChart BarchartData={userData}/>
//           </div>
//     )
//   }

// export default BarGraph


// DynamicChart.tsx
import React from 'react';
import BarChart from '@/app/business-intelligence/charts/barchart';
import LineChart from '@/app/business-intelligence/charts/linechart';
import PieChart from '@/app/business-intelligence/charts/piechart';
import DoughnutChart from '@/app/business-intelligence/charts/dounut';
import ScatterChart from '@/app/business-intelligence/charts/scatter';
import ConnectivityChart from '@/app/business-intelligence/charts/bubble';
import RadarChart from '@/app/business-intelligence/charts/raddarchart';
import { UserData } from '../charts/data';
import PolarAreaChart from '@/app/business-intelligence/charts/polarareachart';


type ChartType = 'bar' | 'linechart' | 'piecharts' | 'donutcharts' | "connectivitycharts" | 'scatterplots' | 'polarchart' | 'radarchart' | string;
interface Props {
  chartType: ChartType;
}
const DynamicChart: React.FC<Props> = ({ chartType }) => {
  const chartData = {
    labels: UserData.map(data => data.year),
    datasets: [{
      label: "Users",
      data: UserData.map(data => data.userGain),
      backgroundColor: ["#02AFBB", "#0885F3", "#FAB13F", "#005EB7", "#808080"],
    }],
  };

  switch (chartType) {
    case 'linechart':
      return <LineChart/>;
    case 'piecharts':
      return <PieChart BarchartData={chartData} />;
      case 'donutcharts':
        return <DoughnutChart BarchartData={chartData} />;
      case 'connectivitycharts':
        return <ConnectivityChart/>;
      case 'scatterplots':
        return <ScatterChart/>;
      case 'polarchart':
        return <PolarAreaChart/>;     
      case 'radarchart':
        return <RadarChart/>;     
    case 'bar':
    default:
      return <BarChart />;
  }
};

export default DynamicChart;
