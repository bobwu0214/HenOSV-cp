import { useModelStore } from "../store/useModelStore";
import ThreeScene from "../components/ThreeScene";
import Navbar from "../components/Navbar"; // ✅ 确保 Navbar 存在
import { useState } from "react";
import { saveAs } from "file-saver";
import Papa from "papaparse";

const Modeling = () => {
  const { length, width, thickness, wheelDiameter, wheelThickness, wheelDistance, setModelParams } = useModelStore();
  const [csvData, setCsvData] = useState<string[][]>([["时间", "长", "宽", "厚", "轮距", "轮径", "轮厚"]]);

  const exportData = (format: "csv" | "json") => {
    const data = {
      time: new Date().toLocaleString(),
      length,
      width,
      thickness,
      wheelDistance,
      wheelDiameter,
      wheelThickness,
    };

    if (format === "csv") {
      const newCsvData = [...csvData, Object.values(data).map(String)];
      setCsvData(newCsvData);
      const csv = Papa.unparse(newCsvData);
      const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
      saveAs(blob, "model_data.csv");
    } else {
      const json = JSON.stringify(data, null, 2);
      const blob = new Blob([json], { type: "application/json" });
      saveAs(blob, "model_data.json");
    }
  };

  const sendToFusion360 = () => {
    // 构建 Fusion 360 API 兼容的参数
    const params = {
      Y: length,
      X: width,
    };

    {}

    // 生成 Fusion 360 兼容的 URL
    const privateInfo = encodeURIComponent(JSON.stringify(params));
    //const fusionURL = `fusion360://host/?command=open&file=http%3A%2F%2Fhelp.autodesk.com%2Fcloudhelp%2FENU%2FFusion-360-API%2FExtraFiles%2FSampleGear.f3d&privateInfo=${privateInfo}`;
    // &privateInfo=aa
    const fusionURL = `fusion360://host/?command=open&file=C%3A%5CUsers%5CAtaraxia%5CDocuments%5CVscodeDOC%5CHenOSV%5CHenOSV-cp%5CFusionAddIn%5Cfusion2web%5Cfusion2web%5Cvehicle_Mtest.f3d&privateInfo=${privateInfo}`;
    // 触发 Fusion 360 运行
    window.location.href = fusionURL;
  };

  return (
    <div className="relative w-screen h-screen bg-black">
      <Navbar /> {/* ✅ 确保 Navbar 在最上层 */}

      {/* 页面内容 */}
      <div className="absolute inset-0 flex flex-col">
        {/* 左上角参数调节 */}
        <div className="absolute top-16 left-4 p-4 bg-gray-900 rounded-lg shadow-lg space-y-3 z-50">
          <div>
            <label>长度 (550-750mm):</label>
            <input
              type="range"
              min="550"
              max="750"
              value={length}
              onChange={(e) => setModelParams({ length: Number(e.target.value) })}
              className="w-full"
            />
            <p className="text-blue-400 text-sm">当前: {length} mm</p>
          </div>

          <div>
            <label>宽度 (250-350mm):</label>
            <input
              type="range"
              min="250"
              max="350"
              value={width}
              onChange={(e) => setModelParams({ width: Number(e.target.value) })}
              className="w-full"
            />
            <p className="text-blue-400 text-sm">当前: {width} mm</p>
          </div>

          <div>
            <label>底盘厚度 (10-20mm):</label>
            <input
              type="range"
              min="10"
              max="20"
              value={thickness}
              onChange={(e) => setModelParams({ thickness: Number(e.target.value) })}
              className="w-full"
            />
            <p className="text-blue-400 text-sm">当前: {thickness} mm</p>
          </div>

          <div>
            <label>轮子直径 (30-60mm):</label>
            <input
              type="range"
              min="30"
              max="60"
              value={wheelDiameter}
              onChange={(e) => setModelParams({ wheelDiameter: Number(e.target.value) })}
              className="w-full"
            />
            <p className="text-blue-400 text-sm">当前: {wheelDiameter} mm</p>
          </div>

          <div>
            <label>轮子厚度 (10-20mm):</label>
            <input
              type="range"
              min="10"
              max="20"
              value={wheelThickness}
              onChange={(e) => setModelParams({ wheelThickness: Number(e.target.value) })}
              className="w-full"
            />
            <p className="text-blue-400 text-sm">当前: {wheelThickness} mm</p>
          </div>

          <div>
            <label>轮距 (手动输入):</label>
            <input
              type="number"
              value={wheelDistance}
              onChange={(e) => setModelParams({ wheelDistance: Number(e.target.value) })}
              className="p-2 bg-gray-800 text-white w-full rounded"
            />
            <p className="text-blue-400 text-sm">当前: {wheelDistance} mm</p>
          </div>

          {/* 导出按钮 - 同一行 */}
          <div className="flex justify-between">
            <button onClick={() => exportData("csv")} className="w-[40%] p-2 bg-blue-500 text-white rounded">
              导出 CSV
            </button>
            <div className="w-[20%]"></div> {/* 空间调整 */}
            <button onClick={() => exportData("json")} className="w-[40%] p-2 bg-green-500 text-white rounded">
              导出 JSON
            </button>
          </div>

          {/* 同步 Fusion 360 按钮 */}
          <button onClick={sendToFusion360} className="w-full p-2 bg-red-500 text-white rounded mt-2">
            同步 Fusion 360
          </button>
        </div>

        {/* Three.js 3D 预览 */}
        <ThreeScene />
      </div>
    </div>
  );
};

export default Modeling;
