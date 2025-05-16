import React, { useState, useRef } from 'react'; // Added useRef
import './ControlPanel.css';
import { recommend } from '../api';

// Simple throttle function (from your reference or a common utility)
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

export default function ControlPanel({ parameters, setParameters }) {
  // State for recommendations
  const [recommendationsData, setRecommendationsData] = useState({}); // Stores { paramName: recommendedValue, ... }
  const [loadingRecommendationFor, setLoadingRecommendationFor] = useState(null); // Tracks which param is loading
  const [recommendationError, setRecommendationError] = useState(null);

  // Function to fetch recommendations from the API
  const doRecommend = async (changedParam, changedValue) => {
    setLoadingRecommendationFor(changedParam);
    setRecommendationError(null);
    try {
      console.log(`Fetching recommendation for ${changedParam} with value ${changedValue}`);
      // Assuming the API recommend function takes the changed parameter name and its new value
      // And returns an object where keys are parameter names and values are their recommendations
      // e.g., { Y: 600, X: 300 } or { recommended_Y: 600, recommended_X: 300 }
      // Adjust data.recommendations if your API returns data in a different structure.
      const data = await recommend(changedParam, parseFloat(changedValue)); 
      if (data && typeof data.recommendations === 'object') {
        setRecommendationsData(prevRecs => ({ ...prevRecs, ...data.recommendations }));
        console.log("Recommendations received:", data.recommendations);
      } else if (data) { // If API returns a single value or a different structure
        // Potentially handle cases where API returns a direct value for the changedParam
        // Or if data.recommendations is not the correct path
        // For now, we assume data.recommendations is an object of key-value pairs
        setRecommendationsData(prevRecs => ({ ...prevRecs, ...data })); // Fallback if data itself is the recommendations object
        console.log("Recommendations received (direct data):", data);
      } else {
        console.warn("Received no data or unexpected format from recommend API for", changedParam);
      }
    } catch (err) {
      console.error(`Error fetching recommendation for ${changedParam}:`, err);
      setRecommendationError(err.message || `Failed to get recommendation for ${changedParam}`);
    } finally {
      setLoadingRecommendationFor(null);
    }
  };

  // Throttled version of the recommend function
  const throttledRecommend = useRef(throttle(doRecommend, 500)).current; // 500ms throttle

  // Modified handleChange to also trigger recommendations
  const handleChange = (param, value) => {
    const newValue = param === 'username' ? value : Number(value);
    setParameters(prev => ({
      ...prev,
      [param]: newValue
    }));
    // Trigger recommendation for numeric parameters that are part of the recommendation system
    if (param !== 'username' && typeof newValue === 'number') {
      throttledRecommend(param, newValue);
    }
  };

  // ... (handleExportToFusion function remains the same)
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


  // Helper to render recommendation status
  const renderRecommendationStatus = (paramName) => {
    if (loadingRecommendationFor === paramName) {
      return <span className="recommendation-status loading">⏳</span>;
    }
    if (recommendationsData[paramName] !== undefined) {
      // Ensure the value is a number before calling toFixed
      const recValue = Number(recommendationsData[paramName]);
      return <span className="recommendation-status recommended">推荐值： {recValue.toFixed(1)}</span>;
    }
    return <span className="recommendation-status">--</span>;
  };

  return (
    <div className="control-panel">
      <h3>参数控制面板</h3>
      {recommendationError && <p className="error-message" style={{ color: 'red', marginBottom: '10px' }}>推荐错误: {recommendationError}</p>}
      
      <div className="control-item">
        <label>用户名</label>
        <div className="control-input">
          <input
            type="text"
            value={parameters.username || ''}
            onChange={(e) => handleChange('username', e.target.value)}
            placeholder="请输入用户名"
            style={{ width: '100%' }}
          />
        </div>
      </div>

      {/* 总长度 (Y) 参数控制 */}
      <div className="control-item">
        <label>总长度 (Y)</label>
        <div className="control-input">
          <input
            type="range"
            min={530} max={730} step={1}
            value={parameters.Y}
            onChange={(e) => handleChange('Y', e.target.value)}
          />
          <input
            type="number"
            min={530} max={730}
            value={parameters.Y}
            onChange={(e) => handleChange('Y', e.target.value)}
          />
          {renderRecommendationStatus('Y')}
        </div>
      </div>
      
      {/* 宽度 (Base_W1) 参数控制 */}
      <div className="control-item">
        <label>载物台宽度 (Base_W1)</label>
        <div className="control-input">
          <input
            type="range"
            min={240} max={400} step={1}
            value={parameters.Base_W1}
            onChange={(e) => handleChange('Base_W1', e.target.value)}
          />
          <input
            type="number"
            min={240} max={400}
            value={parameters.Base_W1}
            onChange={(e) => handleChange('Base_W1', e.target.value)}
          />
          {renderRecommendationStatus('Base_W1')}
        </div>
      </div>
      
      <div className="control-item">
        <label>前后桥宽度 (X)</label>
        <div className="control-input">
          <input
            type="range"
            min={250} max={400} step={1}
            value={parameters.X}
            onChange={(e) => handleChange('X', e.target.value)}
          />
          <input
            type="number"
            min={250} max={400}
            value={parameters.X}
            onChange={(e) => handleChange('X', e.target.value)}
          />
          {renderRecommendationStatus('X')}
        </div>
      </div>

      <div className="control-item">
        <label>电机轴长度 (Base_L5)</label>
        <div className="control-input">
          <input
            type="range"
            min={63} max={70} step={1}
            value={parameters.Base_L5}
            onChange={(e) => handleChange('Base_L5', e.target.value)}
          />
          <input
            type="number"
            min={63} max={70}
            value={parameters.Base_L5}
            onChange={(e) => handleChange('Base_L5', e.target.value)}
          />
          {renderRecommendationStatus('Base_L5')}
        </div>
      </div>
      
      <div className="control-item">
        <label>轮胎直径 (outerRadius)</label>
        <div className="control-input">
          <input
            type="range"
            min={40} max={60} step={1}
            value={parameters.outerRadius}
            onChange={(e) => handleChange('outerRadius', e.target.value)}
          />
          <input
            type="number"
            min={40} max={60}
            value={parameters.outerRadius}
            onChange={(e) => handleChange('outerRadius', e.target.value)}
          />
          {renderRecommendationStatus('outerRadius')}
        </div>
      </div>

      <div className="control-item">
        <label>轮毂直径 (innerRadius)</label>
        <div className="control-input">
          <input
            type="range"
            min={30} max={40} step={1}
            value={parameters.innerRadius}
            onChange={(e) => handleChange('innerRadius', e.target.value)}
          />
          <input
            type="number"
            min={30} max={40}
            value={parameters.innerRadius}
            onChange={(e) => handleChange('innerRadius', e.target.value)}
          />
          {renderRecommendationStatus('innerRadius')}
        </div>
      </div>

      <div className="control-item">
        <label>轮胎厚度 (depth)</label>
        <div className="control-input">
          <input
            type="range"
            min={40} max={70} step={1}
            value={parameters.depth}
            onChange={(e) => handleChange('depth', e.target.value)}
          />
          <input
            type="number"
            min={40} max={70}
            value={parameters.depth}
            onChange={(e) => handleChange('depth', e.target.value)}
          />
          {renderRecommendationStatus('depth')}
        </div>
      </div>

      <div className="control-item">
        <label>挡板宽度 (dangbankuandu)</label>
        <div className="control-input">
          <input
            type="range"
            min={140} max={280} step={1}
            value={parameters.dangbankuandu}
            onChange={(e) => handleChange('dangbankuandu', e.target.value)}
          />
          <input
            type="number"
            min={140} max={280}
            value={parameters.dangbankuandu}
            onChange={(e) => handleChange('dangbankuandu', e.target.value)}
          />
          {renderRecommendationStatus('dangbankuandu')}
        </div>
      </div>

      <div className="control-item">
        <label>挡板厚度 (dangbanhoudu)</label>
        <div className="control-input">
          <input
            type="range"
            min={40} max={60} step={1}
            value={parameters.dangbanhoudu}
            onChange={(e) => handleChange('dangbanhoudu', e.target.value)}
          />
          <input
            type="number"
            min={40} max={60}
            value={parameters.dangbanhoudu}
            onChange={(e) => handleChange('dangbanhoudu', e.target.value)}
          />
          {renderRecommendationStatus('dangbanhoudu')}
        </div>
      </div>

      <div className="control-item">
        <label>载重量 (weight)</label>
        <div className="control-input">
          <input
            type="range"
            min={0} max={10} step={1}
            value={parameters.weight}
            onChange={(e) => handleChange('weight', e.target.value)}
          />
          <input
            type="number"
            min={0} max={10}
            value={parameters.weight}
            onChange={(e) => handleChange('weight', e.target.value)}
          />
          {renderRecommendationStatus('weight')}
        </div>
      </div>

      {/* Removed the old global recommendation section */}

      <div className="export-button-container">
        <button className="export-button" onClick={handleExportToFusion}>
          输出到Fusion
        </button>
      </div>
    </div>
  );
}