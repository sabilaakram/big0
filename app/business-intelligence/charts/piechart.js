import {  Pie } from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto'
function PieChart({BarchartData}){
    return(
        <Pie data={BarchartData}
        //  options= {indexAxis: 'y'}

          
          />
    )
}
export default PieChart;