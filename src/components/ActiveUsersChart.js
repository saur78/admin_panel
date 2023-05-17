import React, { useEffect, useMemo, useState } from "react";
import Select from 'react-select'
import { Bar } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import axios from "axios";
import '../css/DailyActiveUser.css'

Chart.register(CategoryScale);

function ActiveUsersChart() {
  const [apiData, setApiData] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [filteredData, setFilteredData] = useState([]);

  //calculating the month name
  function getMonthName(monthNumber) {
    const date = new Date();
    date.setMonth(monthNumber - 1);
    return date.toLocaleString('en-US', {
      month: 'short',
    });
  }


  //fetching the data from api
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



  const data = filteredData.map((d) => d.count);
  const labels = filteredData.map((d) => `${getMonthName(d.month)}`);
  const years = apiData.map((d) => d.year);


  //selecting the years from the options of select
  useEffect(() => {
    if (selectedOption) {
      const filteredData = apiData.filter((d) => d.year === selectedOption.value);
      setFilteredData(filteredData);
    }
  }, [selectedOption, apiData]);


  //setting the years in the option of select
  const options = years.map((year) => ({
    value: year,
    label: year.toString(),
  }));

//getting the current year
  const currentYear = useMemo(() => {
    const year = new Date().getFullYear();
    return {
      value: year,
      label: year.toString(),
    };
  }, []);


//select year to display the chart accordingly
  const handleOptionChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

//making the current year as a default year
  useEffect(() => {
    setSelectedOption(currentYear);
  }, [currentYear]);


  const customStyles = {
    control: (provided) => ({
      ...provided,
      width: '120px',
      minHeight: '10px',
      height: '40px',
      borderRadius: '10px',
      border: '1px solid black',
      boxShadow: 'none',
      fontSize: '12px',
    }),
    menu: (provided) => ({
      ...provided,
      width: '120px',
      borderRadius: '5px',
    }),
  };


  return (
    <div>
      <div className='chartHeader'>
        <h2>Daily Active Users</h2>
        <div className='select'>
          <Select
            options={options}
            styles={customStyles}
            value={selectedOption}
            onChange={handleOptionChange}
          />
        </div>
      </div>
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
