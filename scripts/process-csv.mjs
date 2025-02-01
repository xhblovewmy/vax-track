import * as fs from "fs";
import * as path from "path";
import { default as csv } from "csv-parser";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

// 获取当前模块的目录路径
const __dirname = dirname(fileURLToPath(import.meta.url));
// 配置路径
const CSV_PATH = path.join(__dirname, "../public/data/raw/data.csv");
const JSON_OUTPUT_PATH = path.join(__dirname, "../public/data/world-data.json");

// 处理 CSV 数据的函数
async function processCSV() {
  const results = [];
  // 检查文件是否存在，存在则删除
  if (fs.existsSync(JSON_OUTPUT_PATH)) {
    fs.unlinkSync(JSON_OUTPUT_PATH);
  }
  try {
    // 读取并解析 CSV
    await new Promise((resolve, reject) => {
      fs.createReadStream(CSV_PATH)
        .pipe(csv())
        .on("data", (data) => {
          // console.log("正在处理数据:", JSON.stringify(data));
          console.log(
            "country:",
            typeof data,
            "country" in JSON.parse(JSON.stringify(data)),
            data["country"]
          ); // 确保列名完全匹配
          // 在这里转换数据格式
          const processedData = {
            name: data["country"], // 确保列名完全匹配
            // 百分比数据转换为浮点数
            value: parseFloat(data["Uptake outcome"].replace("%", "")),
            details: {
              intervention: data["Intervention"], // 修正拼写错误
              desc: data["Description of total population"],
              uptakeOutcome: data["Uptake outcome"],
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
