import * as fs from "fs";
import * as path from "path";
import * as csv from "csv-parser";

// 配置路径
const CSV_PATH = path.join(__dirname, "../public/data/raw/data.csv");
const JSON_OUTPUT_PATH = path.join(__dirname, "../public/data/world-data.json");

// 处理 CSV 数据的函数
async function processCSV() {
  const results = [];

  try {
    // 读取并解析 CSV
    await new Promise((resolve, reject) => {
      fs.createReadStream(CSV_PATH)
        .pipe(csv())
        .on("data", (data) => {
          // 在这里转换数据格式
          const processedData = {
            name: data["Country or region"], // 假设 CSV 中有 country 列
            value: parseFloat(data["Uptake outcome"] || 0),
            details: {
              population: data.population,
              doctors: data.doctors,
              hospitals: data.hospitals,
            },
          };
          results.push(processedData);
        })
        .on("end", resolve)
        .on("error", reject);
    });

    // 写入 JSON 文件
    fs.writeFileSync(
      JSON_OUTPUT_PATH,
      JSON.stringify(results, null, 2),
      "utf-8"
    );

    console.log("数据处理完成！");
    console.log(`输出文件: ${JSON_OUTPUT_PATH}`);
  } catch (error) {
    console.error("处理数据时出错:", error);
    process.exit(1);
  }
}

// 运行处理脚本
processCSV();
