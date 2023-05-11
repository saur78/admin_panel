import { Bar } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import axios from "axios";
import { useEffect, useState } from "react";

Chart.register(CategoryScale);

function ActiveUsersChart() {
	const [apiData, setApiData] = useState([]);

	function getMonthName(monthNumber) {
		const date = new Date();
		date.setMonth(monthNumber - 1);
		return date.toLocaleString('en-US', {
		  month: 'short',
		});
	  }
  
	useEffect(() => {
	  const fetchData = async () => {
		try {
		  const response = await axios.post("https://pihukzd54m.execute-api.ap-southeast-2.amazonaws.com/live/dailyactiveusers", {
			method: "dailyactiveusers",
			company_id: 1,
		  }, {
			headers: {
			  "x-api-key": "Dt0LK0aaHv3eDtAHuE5Fy7OK8hmIj7Nu1CkTpCmr",
			},
		  });
		  setApiData(response.data);
		} catch (error) {
		  console.log(error);
		}
	  };
	  fetchData();
	}, []);
  
	const data = apiData.map((d) => d.count);
	const labels = apiData.map((d) => `${getMonthName(d.month)}`);
  
	return (
	  <div>
		<div style={{ maxWidth: "95%" }}>
		  <Bar
			data={{
			  labels: labels,
			  datasets: [
				{
				  data: data,
				  backgroundColor: ["orange", "blue"],
				  label: "Active Users",
				  borderRadius: 25,
				  barThickness: 30,
				},
			  ],
			}}
			height={300}
			options={{
			  maintainAspectRatio: false,
			  scales: {
				x: {
				  grid: {
					display: false,
				  },
				},
				y: {
				  grid: {
					display: false,
				  },
				},
			  },
			  plugins: {
				legend: {
				  display: false,
				},
			  },
			  annotation: {
				annotations: [],
			  },
			}}
		  />
		</div>
	  </div>
	);
  }
  
  export default ActiveUsersChart;