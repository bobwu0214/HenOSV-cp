import { useModelStore } from "../store/useModelStore";
import { saveAs } from "file-saver";
import Papa from "papaparse";

const ExportButton = () => {
  const modelData = useModelStore();

  const handleExportCSV = () => {
    const csvData = Papa.unparse([modelData]);
    const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "model_data.csv");
  };

  const handleExportJSON = () => {
    const jsonBlob = new Blob([JSON.stringify(modelData, null, 2)], { type: "application/json" });
    saveAs(jsonBlob, "model_data.json");
  };

  return (
    <div>
      <button onClick={handleExportCSV}>导出 CSV</button>
      <button onClick={handleExportJSON}>导出 JSON</button>
    </div>
  );
};

export default ExportButton;
