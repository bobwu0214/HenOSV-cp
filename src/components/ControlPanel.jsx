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
        <label>总长度 (Y)</label>
        <div className="control-input">
          <input
            type="range"
            min={500}
            max={1000}
            step={1}
            value={parameters.Y}
            onChange={(e) => handleChange('Y', e.target.value)}
          />
          <input
            type="number"
            min={500}
            max={1000}
            value={parameters.Y}
            onChange={(e) => handleChange('Y', e.target.value)}
          />
        </div>
      </div>
      
      {/* 宽度 (Base_W1) 参数控制 */}
      <div className="control-item">
        <label>载物台宽度 (Base_W1)</label>
        <div className="control-input">
          <input
            type="range"
            min={200}
            max={500}
            step={1}
            value={parameters.Base_W1}
            onChange={(e) => handleChange('Base_W1', e.target.value)}
          />
          <input
            type="number"
            min={200}
            max={500}
            value={parameters.Base_W1}
            onChange={(e) => handleChange('Base_W1', e.target.value)}
          />
        </div>
      </div>
      
      <div className="control-item">
        <label>前后桥宽度(X)</label>
        <div className="control-input">
          <input
            type="range"
            min={200}
            max={500}
            step={1}
            value={parameters.X}
            onChange={(e) => handleChange('X', e.target.value)}
          />
          <input
            type="number"
            min={200}
            max={500}
            value={parameters.X}
            onChange={(e) => handleChange('X', e.target.value)}
          />
        </div>
      </div>

      <div className="control-item">
        <label>电机轴长度(Base_L5)</label>
        <div className="control-input">
          <input
            type="range"
            min={60}
            max={80}
            step={1}
            value={parameters.Base_L5}
            onChange={(e) => handleChange('Base_L5', e.target.value)}
          />
          <input
            type="number"
            min={60}
            max={80}
            value={parameters.Base_L5}
            onChange={(e) => handleChange('Base_L5', e.target.value)}
          />
        </div>

        <div className="export-button-container">
          <button className="export-button" onClick={handleExportToFusion}>
            输出到Fusion
          </button>
        </div>
      </div>

    </div>
  )
}