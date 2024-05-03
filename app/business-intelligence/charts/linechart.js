import {  Line } from 'react-chartjs-2';
function LineChart(){
    // const labels = Utils.months({count: 7});
const data = {
  labels: ["jan", "feb", "mar", "april", "may", "june", "july"],
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  },
  {
    label: 'My Second Dataset',
    data: [60, 99, 20, 45, 36, 54, 30],
    fill: false,
    borderColor: 'rgb(25, 199, 142)',
    tension: 0.2
  }
]
};
    return(
        <Line data={data} 
          />
    )
}
export default LineChart;