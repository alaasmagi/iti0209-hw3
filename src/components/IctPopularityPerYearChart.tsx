import { useEffect, useState } from "react";
import ReactEcharts from "echarts-for-react";
import type { YearData } from "../models/YeaData";

export default function IctPopularityPerYearChart() {
  const [data, setData] = useState<YearData[]>([]);

  useEffect(() => {
    fetch("/data/ictPopularityPerYear.json")
      .then((res) => res.json())
      .then(setData);
  }, []);

  const option = {
    title: {
      text: "Informatsiooni- ja kommunikatsioonitehnoloogia erialade populaarsus aastate lõikes 🔗",
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
      left: "1%",
      right: "15%",
      bottom: "10%",
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
        type: "line",
        data: data.map((d) => d.rate),
        smooth: true,
        itemStyle: {
          color: "white",
        },
        symbolSize: 12,
        lineStyle: {
          color: "#0496FF",
          width: 4,
        },
        emphasis: {
          itemStyle: {
            color: "#2f4554",
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
          text: "ℹ️ Ülalolev graafik kajastab kõrghariduse IKT erialade populaarsust ning kujutab IKT erialadele õppima asuvate tudengite arvu muutust ajas.",
          fill: "lightgray",
          font: "14px sans-serif",
        },
      },
    ],
  };

  return (
    <div className="w-full h-100 bg-main-dark rounded-3xl p-5">
      <ReactEcharts option={option} style={{ height: "100%" }} />
    </div>
  );
}
