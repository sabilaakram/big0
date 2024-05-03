import {  Bar } from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto'
function BarChart(){
    const data = {
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        datasets: [
            {
                label: 'Work load',
                data: [100, 200, 400, 900, 300, 400, 500],

            }
        ]
    }
const options = {
    indexAxis: 'y'
}

    return(
        <Bar data={data}
        options= {options}/>
    )
}
export default BarChart;