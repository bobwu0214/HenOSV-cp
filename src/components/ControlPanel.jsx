import React from 'react'
import './ControlPanel.css'

export default function ControlPanel({ parameters, setParameters }) {
  // 处理参数变化
  const handleChange = (param, value) => {
    setParameters(prev => ({
      ...prev,
      [param]: Number(value)
    }))
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
      </div>

    </div>
  )
}