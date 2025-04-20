import './ControlPanel.css'

export default function ControlPanel({ parameters, setParameters }) {
  // 处理参数变化
  const handleChange = (param, value) => {
    setParameters(prev => ({
      ...prev,
      [param]: Number(value)
    }))
  }

  // 处理输出到Fusion的功能
  const handleExportToFusion = () => {
    // 新增输出参数功能
    const headers = ['参数名', '参数值'];
    // 构建CSV内容行
    const rows = Object.entries(parameters).map(([key, value]) => 
      // 简单处理，假设参数名和值不包含逗号或换行符
      `${key},${value}` 
    );

    // 将表头和内容行合并，用换行符分隔
    const csvContent = [
      headers.join(','), // 表头行
      ...rows             // 内容行
    ].join('\n');

    // 创建 Blob 对象
    // 添加 BOM (Byte Order Mark) 以确保 Excel 正确识别 UTF-8 编码，避免中文乱码
    const blob = new Blob(['\uFEFF' + csvContent], { type: 'text/csv;charset=utf-8;' });

    // 创建下载链接
    const link = document.createElement('a');
    if (link.download !== undefined) { // 检测浏览器是否支持 download 属性
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', 'parameters.csv'); // 设置下载文件名
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click(); // 模拟点击下载
      document.body.removeChild(link); // 移除元素
      URL.revokeObjectURL(url); // 释放 URL 对象
    } else {
      // 对于不支持 download 属性的旧浏览器（非常少见）
      console.error("浏览器不支持自动下载功能。");
      // 可以考虑提供一个链接让用户右键另存为，或者直接在控制台输出CSV内容
      console.log("CSV 内容:\n", csvContent);
    }
    // 确保捕获所有控制面板中的参数
    const requiredParams = ['Y', 'Base_W1', 'X', 'Base_L5'];
    
    // 构建JSON对象
    const paramsObj = {};
    requiredParams.forEach(param => {
      paramsObj[param] = parameters[param];
    });
    
    // 转换为JSON字符串
    const paramsJson = JSON.stringify(paramsObj);
    
    // 网页中显示参数值
    console.log('当前参数值(JSON格式):', paramsJson);
    
    // 打开Fusion360并传递参数
    window.open(`fusion360://host/?command=open&file=https%3A%2F%2Fgithub.com%2Fbobwu0214%2FHenOSV-cp%2Fraw%2Frefs%2Fheads%2Fmain%2FFusionAddIn%2Ffusion2web%2Ffusion2web%2Fvehicle_Mtest.f3d&privateInfo=${paramsJson}`);
  }

  return (
    <div className="control-panel">
      <h3>参数控制面板</h3>
      
      {/* 总长度 (Y) 参数控制 */}
      <div className="control-item">
        <label>总长度</label>
        <div className="control-input">
          <input
            type="range"
            min={530}
            max={730}
            step={1}
            value={parameters.Y}
            onChange={(e) => handleChange('Y', e.target.value)}
          />
          <input
            type="number"
            min={530}
            max={730}
            value={parameters.Y}
            onChange={(e) => handleChange('Y', e.target.value)}
          />
        </div>
      </div>
      
      {/* 宽度 (Base_W1) 参数控制 */}
      <div className="control-item">
        <label>载物台宽度</label>
        <div className="control-input">
          <input
            type="range"
            min={240}
            max={400}
            step={1}
            value={parameters.Base_W1}
            onChange={(e) => handleChange('Base_W1', e.target.value)}
          />
          <input
            type="number"
            min={240}
            max={400}
            value={parameters.Base_W1}
            onChange={(e) => handleChange('Base_W1', e.target.value)}
          />
        </div>
      </div>
      
      <div className="control-item">
        <label>前后桥宽度</label>
        <div className="control-input">
          <input
            type="range"
            min={250}
            max={400}
            step={1}
            value={parameters.X}
            onChange={(e) => handleChange('X', e.target.value)}
          />
          <input
            type="number"
            min={250}
            max={400}
            value={parameters.X}
            onChange={(e) => handleChange('X', e.target.value)}
          />
        </div>
      </div>

      <div className="control-item">
        <label>电机轴长度</label>
        <div className="control-input">
          <input
            type="range"
            min={63}
            max={70}
            step={1}
            value={parameters.Base_L5}
            onChange={(e) => handleChange('Base_L5', e.target.value)}
          />
          <input
            type="number"
            min={63}
            max={70}
            value={parameters.Base_L5}
            onChange={(e) => handleChange('Base_L5', e.target.value)}
          />
        </div>
      </div>
      
      <div className="control-item">
        <label>轮胎直径</label>
        <div className="control-input">
          <input
            type="range"
            min={40}
            max={60}
            step={1}
            value={parameters.outerRadius}
            onChange={(e) => handleChange('outerRadius', e.target.value)}
          />
          <input
            type="number"
            min={40}
            max={60}
            value={parameters.outerRadius}
            onChange={(e) => handleChange('outerRadius', e.target.value)}
          />
        </div>
      </div>

      <div className="control-item">
        <label>轮毂直径</label>
        <div className="control-input">
          <input
            type="range"
            min={30}
            max={40}
            step={1}
            value={parameters.innerRadius}
            onChange={(e) => handleChange('innerRadius', e.target.value)}
          />
          <input
            type="number"
            min={30}
            max={40}
            value={parameters.innerRadius}
            onChange={(e) => handleChange('innerRadius', e.target.value)}
          />
        </div>
      </div>

      <div className="control-item">
        <label>轮胎厚度</label>
        <div className="control-input">
          <input
            type="range"
            min={40}
            max={70}
            step={1}
            value={parameters.depth}
            onChange={(e) => handleChange('depth', e.target.value)}
          />
          <input
            type="number"
            min={40}
            max={70}
            value={parameters.depth}
            onChange={(e) => handleChange('depth', e.target.value)}
          />
        </div>
      </div>

      <div className="control-item">
        <label>挡板宽度</label>
        <div className="control-input">
          <input
            type="range"
            min={140}
            max={280}
            step={1}
            value={parameters.dangbankuandu}
            onChange={(e) => handleChange('dangbankuandu', e.target.value)}
          />
          <input
            type="number"
            min={140}
            max={280}
            value={parameters.dangbankuandu}
            onChange={(e) => handleChange('dangbankuandu', e.target.value)}
          />
        </div>
      </div>

      <div className="control-item">
        <label>挡板厚度</label>
        <div className="control-input">
          <input
            type="range"
            min={40}
            max={60}
            step={1}
            value={parameters.dangbanhoudu}
            onChange={(e) => handleChange('dangbanhoudu', e.target.value)}
          />
          <input
            type="number"
            min={40}
            max={60}
            value={parameters.dangbanhoudu}
            onChange={(e) => handleChange('dangbanhoudu', e.target.value)}
          />
        </div>
      </div>

      <div className="control-item">
        <label>载重量</label>
        <div className="control-input">
          <input
            type="range"
            min={0}
            max={10}
            step={1}
            value={parameters.weight}
            onChange={(e) => handleChange('weight', e.target.value)}
          />
          <input
            type="number"
            min={0}
            max={10}
            value={parameters.weight}
            onChange={(e) => handleChange('weight', e.target.value)}
          />
        </div>
      </div>

        <div className="export-button-container">
          <button className="export-button" onClick={handleExportToFusion}>
            输出到Fusion
          </button>
        </div>
      </div>

  )
}