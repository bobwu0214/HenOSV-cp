import React from 'react';

const SimulatorResearchSection: React.FC = () => {
  return (
    <div className="px-6 py-8 max-w-6xl mx-auto space-y-8 text-white">
      <section>
        <p className="text-lg leading-relaxed">
          使用交通工具模拟器做无人驾驶、人机交互相关的科研探索。
        </p>
        <div className="flex flex-col gap-6 mt-4">
          <img
            src="https://nexmaker-profabx.oss-cn-hangzhou.aliyuncs.com/img/WX20250506-002902%402x.png"
            alt="模拟器研究图1"
            className="w-full rounded-lg shadow-md"
          />
          <img
            src="https://nexmaker-profabx.oss-cn-hangzhou.aliyuncs.com/img/WX20250506-002956%402x.png"
            alt="模拟器研究图2"
            className="w-full rounded-lg shadow-md"
          />
          <img
            src="https://nexmaker-profabx.oss-cn-hangzhou.aliyuncs.com/img/WX20250506-003011%402x.png"
            alt="模拟器研究图3"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </section>
    </div>
  );
};

export default SimulatorResearchSection;
