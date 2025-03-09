import { useModelStore } from "../store/useModelStore";

const InputControls = () => {
  const { setModelParams } = useModelStore();

  const handleInputChange = (field: string, value: string) => {
    const numValue = parseFloat(value);
    if (field === "length" && (numValue < 50 || numValue > 150)) return alert("请输入合理的长度，数据在50-150mm之间");
    if (field === "width" && (numValue < 30 || numValue > 80)) return alert("请输入合理的长度，数据在30-80mm之间");
    if (field === "thickness" && (numValue < 10 || numValue > 20)) return alert("请输入合理的厚度，数据在10-20mm之间");
    setModelParams({ [field]: numValue });
  };

  return (
    <div className="p-4 text-white">
      <label>长度: <input type="number" onBlur={(e) => handleInputChange("length", e.target.value)} /></label>
      <label>宽度: <input type="number" onBlur={(e) => handleInputChange("width", e.target.value)} /></label>
      <label>厚度: <input type="number" onBlur={(e) => handleInputChange("thickness", e.target.value)} /></label>
    </div>
  );
};

export default InputControls;
