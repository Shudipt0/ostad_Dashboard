import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { WeeklyActivity } from "../api/ApiCall";

const WeeklyChart = () => {
  // const [chartData, setChartData] = useState({
  //   options: {
  //     chart: {
  //       id: "basic-bar",
  //       toolbar: {
  //         show: false,
  //       },
  //       zoom: {
  //         enabled: false,
  //       },
  //       animations: {
  //         enabled: true,
  //         easing: "easeinout",
  //         speed: 800,
  //       },
  //     },
  //     xaxis: {
  //       categories: ["Sat","Sun","Mon","Tue","Wed","Thu","Fri"],
  //     },

  //     plotOptions: {
  //       bar: {

  //         horizontal: false,
  //         columnWidth: "30%",
  //         endingShape: "rounded",
  //         dataLabels: {
  //           position: "top",
  //         },
  //         barHeight: "100%",
  //         borderRadius: 7,
  //       },
  //     },
  //     dataLabels: {
  //       enabled: false,
  //     },

  //     fill: {
  //       opacity: 1,
  //     },
  //     // tooltip: {
  //     //   y: {
  //     //     formatter: (val) => `$${val}K`,
  //     //   },
  //     // },
  //     legend: {
  //       position: "top",
  //       horizontalAlign: "right",
  //       markers: {
  //         shape: "rounded",
  //         size: 8,
  //       },
  //       labels: {
  //         colors: "#343C6A",

  //     },
  //     },
  //   },
  //   series: [
  //     {
  //       name: "Deposit",
  //       data: [300, 40, 450, 50, 49, 60, 200],
  //       color: "#1814F3"
  //     },
  //     {
  //       name: "Withdraw",
  //       data: [100, 400, 50, 50, 49, 60, 100],
  //       color: "#16DBCC"
  //     },
  //   ],
  // });

  const [days, setDays] = useState([]);
  const [deposit, setDeposit] = useState([]);
  const [withdraw, setWithdraw] = useState([]);

  useEffect(() => {
    const allDays = [];
    const allDeposit = [];
    const allWithdraw = [];

    (async () => {
      const res = await WeeklyActivity();
      // console.log(res.data[0].days)
      for (let i = 0; i < res.data.length; i++) {
        allDays.push(res.data[i].days);
        allDeposit.push(res.data[i].deposit);
        allWithdraw.push(res.data[i].withdraw);
      }
      //  console.log(allDays)
      setDays(allDays);
      setDeposit(allDeposit);
      setWithdraw(allWithdraw);
    })();
  }, []);

  return (
    <div className="w-[325px] h-[254px] md:w-[730px] md:h-[322px] bg-white rounded-3xl flex justify-center items-center">
      <Chart
        options={{
          chart: {
            type: "bar",
            height: 350,
            toolbar: {
              show: false,
            },
            zoom: {
              enabled: false,
            },
            animations: {
              enabled: true,
              easing: "easeinout",
              speed: 800,
            },
            redrawOnParentResize: true,
          },
          xaxis: {
            categories: days,
          },

          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: "60%",
              endingShape: "rounded",
              dataLabels: {
                position: "top",
              },
              barHeight: "100%",
              borderRadius: 7,
            },
          },
          dataLabels: {
            enabled: false,
          },

          fill: {
            opacity: 1,
          },

          // responsive:[{
          //   breakpoint: 480,

            
          // }],
          // tooltip: {
          //   y: {
          //     formatter: (val) => `$${val}K`,
          //   },
          // },
          legend: {
            position: "top",
            horizontalAlign: "right",
            markers: {
              shape: "rounded",
              size: 8,
            },
            labels: {
              colors: "#343C6A",
            },
          },
          stroke: {
            colors: ["transparent"],
            width: 12,
          },
        }}
        series={[
          {
            name: "Deposit",
            data: deposit,
            color: "#1814F3",
          },
          {
            name: "Withdraw",
            data: withdraw,
            color: "#16DBCC",
          },
        ]}
        type="bar"
        width="700"
        height="280"
      />
    </div>
  );
};

export default WeeklyChart;
