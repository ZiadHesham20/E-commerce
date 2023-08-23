import React from 'react'
import Chart from 'chart.js/auto';
import { Line } from "react-chartjs-2";

const labels = ["January", "February", "March", "April", "May", "June"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgb(255, 216, 3,0.5)",
      borderColor: "rgb(255, 216, 5)",
      data: [0, 10, 5, 2, 20, 30, 45],
      pointStyle: 'circle',
      pointRadius: 10,
      pointHoverRadius: 15,
      responsive: true,
    },
  ],
};

export default function index() {
  
  
  return <>
  <div className='container pt-3'>
    <div>
      <div className='row justify-center'>
        <div className='col-12'>
          <div className='row gy-3 justify-around bg-white rounded-3'>
            <div className='col-12 col-md-5 d-flex justify-between align-items-center p-5 shadow-md rounded-3'>
            <div className='d-flex align-items-center'>
            <i class="fa-solid text-yellow-400 fa-3x mx-3 fa-users"></i>
            <h2>Clients</h2>
            </div>
            <div>
              <h2>8</h2>
            </div>
            </div>
            <div className='col-12 col-md-5 d-flex justify-between align-items-center p-5 shadow-md rounded-3'>
            <div className='d-flex align-items-center'>
            <i class="fa-solid fa-3x text-yellow-400 mx-3 fa-basket-shopping"></i>
            <h2>Products</h2>
            </div>
            <div>
              <h2>8</h2>
            </div>
            </div>
          </div>
        </div>
        <div className='col-12 col-md-11 p-5 my-4 shadow-md rounded-3'>
        <Line data={data}  />
        </div>
      </div>
    </div>
  </div>
  </>
}
