import { useEffect, useState } from "react";
import ReactEcharts from "echarts-for-react";
import type { YearData } from "../models/YeaData";

export default function AcceptedPerYearChart() {
  const [data, setData] = useState<YearData[]>([]);

  useEffect(() => {
    fetch("/data/acceptedPerYear.json")
      .then((res) => res.json())
      .then(setData);
  }, []);

  const option = {
    title: {
      text: "Kõrgharidust alustanud tudengite arv aastate lõikes 🔗",
      link: "https://haridussilm.ee/ee/tasemeharidus/tasemeharidus/vastuvoetud",
      target: "blank",
      left: "center",
      textStyle: {
        color: "white",
      },
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      top: "20%",
      left: "0%",
      right: "15%",
      bottom: "15%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: data.map((d) => d.year),
      axisLabel: {
        interval: 0,
        color: "white",
      },
      name: "Õppeaasta",
      nameTextStyle: {
        color: "white",
      },
    },
    yAxis: {
      type: "value",
      name: "Alustajate arv",
      axisLabel: {
        color: "white",
      },
      nameTextStyle: {
        color: "white",
      },
    },
    series: [
      {
        name: "Alustajate arv",
        type: "bar",
        data: data.map((d) => d.rate),
        itemStyle: {
          color: "#0496FF",
        },
        emphasis: {
          itemStyle: {
            color: "#52B7FF",
          },
        },
      },
    ],
    graphic: [
      {
        type: "text",
        left: 0,
        bottom: 0,
        style: {
          text: "ℹ️ Ülalolev graafik kajastab kõrgharidust omandama asunud tudengite arvu \naastate lõikes",
          fill: "lightgray",
          font: "14px sans-serif",
        },
      },
    ],
  };

  return (
    <div className="w-full h-110 bg-main-dark rounded-3xl p-5">
      <ReactEcharts option={option} style={{ height: "100%" }} />
    </div>
  );
}
