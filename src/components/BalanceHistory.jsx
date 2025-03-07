import React from 'react';
import Chart from "react-apexcharts";


const BalanceHistory = () => {
  return (
    <div className='w-[325px] h-[223px] md:w-[635px] md:h-[276px]  bg-white  rounded-3xl flex items-center justify-center'>
      <Chart 
         type='area'
        width={620}
        height={260}
         series={[
          {
            data:[100,350,220,450,400,750,200,600]
          }
         ]}

         options={{
          colors:['#1814F3'],
          states: {curve: 'smooth'},
          xaxis:{
            categories: ["Jan", "Feb", "Mar","May","Jun","Jul" ,"Aug"]
          },
         chart: {
          toolbar: {
            show: false
          },
          
         },
         dataLabels: {
          enabled: false,
        },
         }}
      />

    </div>
  )
}

export default BalanceHistory