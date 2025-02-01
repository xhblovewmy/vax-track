"use client";

import { useEffect, useRef, useState } from "react";
import * as echarts from "echarts";
import { LoadingSpinner } from "./LoadingSpinner";
import config from "@/app/assets/config.json";

export default function WorldMap() {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartInstance = useRef<echarts.ECharts | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 模拟医疗数据
  const mockData = [
    {
      name: "China",
      value: 800,
      details: {
        population: "14亿",
        doctors: "200万",
        hospitals: "5000家",
      },
    },
    {
      name: "United States",
      value: 900,
      details: {
        population: "3.3亿",
        doctors: "100万",
        hospitals: "6000家",
      },
    },
    {
      name: "Japan",
      value: 700,
      details: {
        population: "1.26亿",
        doctors: "30万",
        hospitals: "3000家",
      },
    },
  ];

  useEffect(() => {
    let mounted = true;

    const initChart = async () => {
      if (!chartRef.current) return;

      try {
        setIsLoading(true);

        // 动态导入地图数据
        const { default: geoJson } = await import(
          /* webpackChunkName: "world-geo-data" */
          "@/app/assets/worldEN.json"
        );

        if (!mounted) return;

        // 注册地图数据
        echarts.registerMap("world", geoJson);

        // 初始化 ECharts 实例
        chartInstance.current = echarts.init(chartRef.current);

        const option = {
          backgroundColor: "#ffffff",
          title: {
            text: config.title,
            left: "center",
            top: 20,
            textStyle: {
              color: "#333333",
              fontSize: 24,
              fontWeight: "bold",
            },
          },
          tooltip: {
            trigger: "item",
            showDelay: 0,
            transitionDuration: 0.2,
            formatter: function (params: any) {
              const { name, value, data } = params;
              if (!data?.details) return name;

              return `  
                <div style="font-weight: bold; margin-bottom: 5px;">${name}</div>  
                <div>医疗指数: ${value || "暂无数据"}</div>  
                <div>人口: ${data.details.population || "暂无数据"}</div>  
                <div>医生数量: ${data.details.doctors || "暂无数据"}</div>  
                <div>医院数量: ${data.details.hospitals || "暂无数据"}</div>  
              `;
            },
          },
          visualMap: {
            left: "right",
            min: 0,
            max: 1000,
            inRange: {
              color: ["#e5f7ff", "#096dd9"],
            },
            text: ["高", "低"],
            calculable: true,
            dimension: 0,
            orient: "vertical",
            right: 26,
            bottom: 40,
            show: true,
          },
          toolbox: {
            show: true,
            left: "left",
            top: "top",
            feature: {
              dataView: { readOnly: false },
              restore: {},
              saveAsImage: {},
            },
          },
          series: [
            {
              name: config.serieName,
              type: "map",
              map: "world",
              roam: true,
              scaleLimit: {
                min: 1,
                max: 10,
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: 18,
                  color: "#333",
                },
                itemStyle: {
                  areaColor: "#40a9ff",
                },
              },
              select: {
                label: {
                  show: true,
                  color: "#fff",
                },
                itemStyle: {
                  areaColor: "#1890ff",
                },
              },
              itemStyle: {
                areaColor: "#f0f2f5",
                borderColor: "#d9d9d9",
                borderWidth: 1,
              },
              data: mockData,
            },
          ],
        };

        // 设置配置项
        chartInstance.current.setOption(option);

        // 添加事件监听
        chartInstance.current.on("click", function (params: any) {
          if (params.componentType === "series") {
            const data = params.data;
            if (data?.details) {
              alert(`  
                国家: ${params.name}  
                医疗指数: ${data.value}  
                人口: ${data.details.population}  
                医生数量: ${data.details.doctors}  
                医院数量: ${data.details.hospitals}  
              `);
            } else {
              alert(`国家: ${params.name}\n暂无详细数据`);
            }
          }
        });

        setIsLoading(false);
      } catch (err) {
        console.error("Chart initialization error:", err);
        setError(err instanceof Error ? err.message : "unknow error");
        setIsLoading(false);
      }
    };

    initChart();

    const handleResize = () => {
      chartInstance.current?.resize();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      mounted = false;
      window.removeEventListener("resize", handleResize);
      chartInstance.current?.dispose();
    };
  }, []);

  if (error) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div className="text-red-500">错误: {error}</div>
      </div>
    );
  }

  return (
    <div className="w-full h-screen  relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-90 z-10">
          <LoadingSpinner loadingText={config.loadingText} />
        </div>
      )}
      <div ref={chartRef} className="w-full h-full min-h-[500px]" />
    </div>
  );
}
