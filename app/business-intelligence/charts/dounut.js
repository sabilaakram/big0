import {  Doughnut } from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto'
function DoughnutChart({BarchartData}){
    return(
        <Doughnut data={BarchartData}
        //  options= {indexAxis: 'y'}

          
          />
    )
}
export default DoughnutChart;