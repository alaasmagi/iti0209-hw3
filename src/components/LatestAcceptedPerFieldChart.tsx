import { useEffect, useState } from "react";
import ReactEcharts from "echarts-for-react";
import type { FieldData } from "../models/FieldData";

export default function LatestAcceptedPerFieldChart() {
  const [data, setData] = useState<FieldData[]>([]);

  useEffect(() => {
    fetch("/data/latestAcceptedPerField.json")
      .then((res) => res.json())
      .then(setData);
  }, []);

  const option = {
    title: {
      text: "Õppeaastal 2023/24 kõrgharidust alustanud tudengid valdkondade kaupa 🔗",
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
      top: "15%",
      left: "3%",
      right: "10%",
      bottom: "10%",
      containLabel: true,
    },
    xAxis: {
      type: "value",
      name: "Alustajate arv",
      axisLabel: {
        color: "white",
      },
      nameTextStyle: {
        color: "white",
      },
    },
    yAxis: {
      type: "category",
      data: data.map((d) => d.field),
      axisLabel: {
        interval: 0,
        color: "white",
      },
      name: "Valdkond",
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
          text: "ℹ️ Ülalolev graafik näitab 2023/24 õppeaastal kõrgharidust omandama asunud tudengite arvu valdkondade lõikes.",
          fill: "lightgray",
          font: "14px sans-serif",
        },
      },
    ],
  };

  return (
    <div className="w-full h-125 bg-main-dark rounded-3xl p-5">
      <ReactEcharts option={option} style={{ height: "100%" }} />
    </div>
  );
}
