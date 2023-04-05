import { Bar } from "react-chartjs-2";
import {CategoryScale} from 'chart.js'; 
import Chart from 'chart.js/auto';
Chart.register(CategoryScale);

function ActiveUsersChart() {
return (
	<div>
    <h2>Daily Active Users</h2>
	<div style={{ maxWidth: "100%" }}>
		<Bar
		data={{
			// Name of the variables on x-axies for each bar
			labels: ["Jan", "Feb", "Mar", "Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
			datasets: [
			{
				// Label for bars
				// label: "total count/value",
				// Data or value of your each variable
				data: [1300, 800, 1300, 800,1300, 800, 1300, 800,1300, 800, 1300, 800],
				// Color of each bar
				backgroundColor: ["orange", "blue"],
				// Border color of each bar
				borderWidth: 0.5,
			},
			],
		}}
		// Height of graph
		height={400}
		options={{
			maintainAspectRatio: false,
			scales: {
			yAxes: [
				{
				ticks: {
					// The y-axis value will start from zero
					beginAtZero: true,
				},
				},
			],
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



