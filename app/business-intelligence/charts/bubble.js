import {  Bubble } from 'react-chartjs-2';
function ConnectivityChart(){
    const data = {
        datasets: [{
          label: 'First Dataset',
          data: [{
            x: 20,
            y: 30,
            r: 15
          }, {
            x: 40,
            y: 10,
            r: 10
          }],
          backgroundColor: 'rgb(255, 99, 132)'
        }]
      };
    return(
        <Bubble data={data}/>
    )
}
export default ConnectivityChart;