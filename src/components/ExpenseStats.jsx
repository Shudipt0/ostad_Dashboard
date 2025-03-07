import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { ExpenseList } from "../api/ApiCall";

const ExpenseStats = () => {
  const [data, setData] = useState([]);
  // console.log(data);

  useEffect(() => {
    (async () => {
      const res = await ExpenseList();
      const { entertainment, bill, investment, others } = res.data;

      setData({
        series: [entertainment, bill, investment, others],
      });

      // console.log(bill)
    })();
  }, []);

  return (
    <div className="w-[325px] h-[240px] md:w-[350px] md:h-[322px] bg-white rounded-3xl flex justify-center items-center">
      <Chart
        type="pie"
        width={320}
        series={data.series}
        options={{
          chart: {
            type: "pie",
          },
          labels: ["Entertainment", "Bill", "Investment", "Others"],
          legend: {
            show: false,
          },
          stroke: {
            colors: ["white"],
            width: 4,
          },
          fill: {
            colors: ["#343C6A", "#FC7900", "#FA00FF", "#1814F3"],
          },
          dataLabels: {
            enabled: true,
            style: {
              fontSize: "10px",
              fontWeight: "bold",
              colors: ["#ffffff"],

              // White text for better visibility
            },
            // formatter: function (val, opts) {
            //   let newVal = Math.round(val)
            //   return `${newVal}%\n${opts.w.globals.labels[opts.seriesIndex]}`;
            // },
          },
          plotOptions: {
            pie: {
              // offsetX: 0,  horizontal shift
              // offsetY: 20, Moves slices slightly
              startAngle: 20,
              customScale: 1.05, // Makes the chart slightly bigger
              dataLabels: {
                offset: -25,
              },
            },
          },
        }}
      />
    </div>
  );
};

export default ExpenseStats;
