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