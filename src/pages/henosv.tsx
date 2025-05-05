import React from 'react';

const ParametricVehicleSection: React.FC = () => {
  return (
    <div className="px-6 py-8 max-w-5xl mx-auto space-y-8 text-white">
      <section>
        <p className="text-lg leading-relaxed">
          使用参数化工具生成的小车，可以根据客户需要定向开发功能，选择有人、无人驾驶等形式。
          同时可以二次开发用于自动化产线、景区、物流、摄影相关场景。
        </p>
        <img
          src="https://nexmaker-profabx.oss-cn-hangzhou.aliyuncs.com/img/a2ce1d87-f4c3-47f5-8a80-fa9e43998611.png"
          alt="参数化定制小车示意图"
          className="w-full rounded-xl shadow-lg mt-4"
        />
      </section>
    </div>
  );
};

export default ParametricVehicleSection;
