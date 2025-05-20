import React, { useEffect, useState } from "react";
import ReactEcharts from "echarts-for-react";
import type { YearData } from "../models/YeaData";

export default function AcceptedPerYearChart() {
  const [data, setData] = useState<YearData[]>([]);

  useEffect(() => {
    fetch("/data/acceptedPerYear.json")
      .then(res => res.json())
      .then(setData);
  }, []);

const option = {
  title: {
    text: "Kõrgharidust alustanud tudengite arv aastate lõikes",
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
    name: "Õppeaasta",
     nameTextStyle: {
      color:"white"
    }
  },
  yAxis: {
    type: "value",
    name: "Alustajate arv",
     axisLabel: {
      color: "white"
    },
    nameTextStyle: {
      color:"white"
    }
  },
  series: [
    {
      name: "Alustajate arv",
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