import { Bar } from "react-chartjs-2";
import {CategoryScale} from 'chart.js'; 
import Chart from 'chart.js/auto';
Chart.register(CategoryScale);

function ActiveUsersChart() {
return (
	<div>
	<div style={{ maxWidth: "95%" }}>
		<Bar
		data={{
			labels: ["Jan", "Feb", "Mar", "Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
			datasets: [
			{
				
				data: [1300, 800, 1300, 800,1300, 800, 1300, 800,1300, 800, 1300, 800],
				backgroundColor: ["orange", "blue"],
				borderRadius:25,
				barThickness:30,
			},
			],
		}}
		height={300}
		
		options={{			
			maintainAspectRatio: false,
				scales: {
					yAxes: [{
					  gridLines: {
						display: false
					  }
					}],
					xAxes: [{
					  gridLines: {
						display: false
					  }
					}]
				  },

			legend: {
			labels: {
				fontSize: 15,
			},
			},
		}}
		/>
	</div>
	</div>
);
}

export default ActiveUsersChart;



