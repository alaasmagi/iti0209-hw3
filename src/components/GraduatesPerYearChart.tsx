import React, { useEffect, useState } from "react";
import ReactEcharts from "echarts-for-react";
import type { YearData } from "../models/YeaData";

export default function GraduatesPerYearChart() {
  const [data, setData] = useState<YearData[]>([]);

  useEffect(() => {
    fetch("/data/graduatesPerYear.json")
      .then(res => res.json())
      .then(setData);
  }, []);

 const option = {
  title: {
    text: "Kõrghariduse lõpetanud tudengite arv aastate lõikes",
    left: "center",
    textStyle: {
      color: "white"
    }
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow"
    }
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true
  },
  xAxis: {
    type: "category",
    data: data.map(d => d.year),
    axisLabel: {
      interval: 0,
      rotate: 30,
      color: "white"
    },
    name: "Valdkond",
     nameTextStyle: {
      color:"white"
    }
  },
  yAxis: {
    type: "value",
    name: "Lõpetajate arv",
     axisLabel: {
      color: "white"
    },
    nameTextStyle: {
      color:"white"
    }
  },
  series: [
    {
      name: "Lõpetajate arv",
      type: "bar",
      data: data.map(d => d.rate),
      itemStyle: {
        color: '#5470C6'
      },
      emphasis: {
        itemStyle: {
          color: '#2f4554'
        }
      }
    }
  ]
};

return (
  <div className="w-full">
    <ReactEcharts option={option}/>
  </div>
);  
}