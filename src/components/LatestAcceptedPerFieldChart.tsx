import { useEffect, useState } from "react";
import ReactEcharts from "echarts-for-react";
import type { FieldData } from "../models/FieldData";

export default function LatestAcceptedPerFieldChart() {
  const [data, setData] = useState<FieldData[]>([]);

  useEffect(() => {
    fetch("/data/latestGraduatedPerField.json")
      .then(res => res.json())
      .then(setData);
  }, []);

  const option = {
  title: {
    text: "Õppeaastal 2023/24 kõrgharidust alustanud tudengid \n valdkondade kaupa",
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
    left: "1%",
    right: "15%",
    bottom: "0%",
    containLabel: true
  },
  xAxis: {
    type: "category",
    data: data.map(d => d.field),
    axisLabel: {
      interval: 0,
      rotate: 30,
      color: "white",
      formatter: function (value: string) {
      return value.length > 10 ? value.slice(0, 10) + "…" : value;
    }
    },
    name: "Valdkond",
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
    <ReactEcharts option={option} />
  </div>
);   
}