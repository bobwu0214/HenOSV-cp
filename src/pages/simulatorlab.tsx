import React from 'react';

const EvDynamicsLab: React.FC = () => {
  return (
    <div className="px-6 py-10 max-w-7xl mx-auto space-y-10 text-white">
      <h1 className="text-3xl font-bold">新能源汽车整车动力学半实物仿真实验室</h1>

      <p className="text-lg leading-relaxed">
        为了实现新能源汽车动力总成系统的功能测试，搭建“三电（VCU HIL ，MCU HIL ，BMS HIL）”硬件在环测试系统，以实现功能、性能验证、故障复现，缩短开发周期，降低成本。
        支持驾驶员在线控制输入，测试真实驾驶条件下的系统性能。
      </p>

      <ul className="list-disc list-inside space-y-1">
        <li>整车控制策略开发验证</li>
        <li>整车性能测试</li>
        <li>动力电池管理系统功能测试</li>
        <li>电池、电机性能测试</li>
        <li>电机控制基本性能测试</li>
        <li>电机控制功能算法验证</li>
        <li>电机模拟路况测试</li>
        <li>驱动系统性能测试</li>
      </ul>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold">1. 基于模型的整车动力学半实物仿真实验室解决方案</h2>
          <img src="https://nexmaker-profabx.oss-cn-hangzhou.aliyuncs.com/img/simulator1.png" alt="方案图" className="w-full rounded-lg shadow-md" />
        </section>

        <section>
          <h2 className="text-2xl font-semibold">2. 新能源汽车动力总成仿真测试实验室参考布局</h2>
          <img src="https://nexmaker-profabx.oss-cn-hangzhou.aliyuncs.com/img/simulator2.png" alt="布局图" className="w-full rounded-lg shadow-md" />
        </section>

        <section>
          <h2 className="text-2xl font-semibold">3. 实验室构成</h2>
          <img src="https://nexmaker-profabx.oss-cn-hangzhou.aliyuncs.com/img/simulator3.png" alt="实验室构成" className="w-full rounded-lg shadow-md" />
        </section>

        <section>
          <h2 className="text-2xl font-semibold">4. 实验室方案</h2>
          <img src="https://nexmaker-profabx.oss-cn-hangzhou.aliyuncs.com/img/simulator4.png" alt="实验室方案" className="w-full rounded-lg shadow-md" />
        </section>

        <section>
          <h2 className="text-2xl font-semibold">5. 硬件在环控制系统组成</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>BMS HIL测试系统</li>
            <li>VCU HIL测试系统</li>
            <li>MCU HIL测试系统</li>
            <li>驾驶模拟器</li>
          </ul>
          <img src="https://nexmaker-profabx.oss-cn-hangzhou.aliyuncs.com/img/simulator5.png" alt="HIL控制系统" className="w-full rounded-lg shadow-md mt-4" />
        </section>

        <section>
          <h2 className="text-2xl font-semibold">6. 智能网联汽车底盘线控实训台架</h2>
          <p className="text-lg leading-relaxed">
            包括线控油门、线控转向、线控刹车三大系统，用于智能汽车线控技术的实验及应用开发，支持教学、实训及考核任务。
          </p>
          <img src="https://raw.githubusercontent.com/bobwu0214/imageuploadservice/main/img/202210112001982.png" alt="线控实训台架" className="w-full rounded-lg shadow-md" />
        </section>

        <section>
          <h2 className="text-2xl font-semibold">7. 智能网联汽车传感器实训台架</h2>
          <p className="text-lg leading-relaxed">
            包括激光雷达、毫米波雷达、摄像头、GPS、车规级芯片控制器等，支持传感器测试、调试及教学实训任务。
          </p>
          <img src="https://raw.githubusercontent.com/bobwu0214/imageuploadservice/main/img/202210112004407.png" alt="传感器台架1" className="w-full rounded-lg shadow-md" />
          <img src="https://raw.githubusercontent.com/bobwu0214/imageuploadservice/main/img/202210112006664.png" alt="传感器台架2" className="w-full rounded-lg shadow-md" />
        </section>

        <section>
          <h2 className="text-2xl font-semibold">8. 智能网联汽车装调通用工具箱</h2>
          <p className="text-lg leading-relaxed">
            包括网线测试仪、总线分析仪、信号发生器等，用于电控部件装配调试和数据检测。
          </p>
          <img src="https://raw.githubusercontent.com/bobwu0214/imageuploadservice/main/img/202210112010018.png" alt="工具箱" className="w-full rounded-lg shadow-md" />
        </section>

        <section>
          <h2 className="text-2xl font-semibold">9. 智能汽车仿真工具包</h2>
          <p className="text-lg leading-relaxed">
            软件产品，用于辅助自动驾驶项目仿真与教学，可与高校教学平台配套使用。
          </p>
          <img src="https://raw.githubusercontent.com/bobwu0214/imageuploadservice/main/img/202210112012312.png" alt="仿真工具包" className="w-full rounded-lg shadow-md" />
        </section>

        <section>
          <h2 className="text-2xl font-semibold">10. 功能与应用</h2>
          <img src="https://nexmaker-profabx.oss-cn-hangzhou.aliyuncs.com/img/simulator7.png" alt="功能与应用" className="w-full rounded-lg shadow-md" />
        </section>

        <section>
          <h2 className="text-2xl font-semibold">11. 应用领域</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>车辆动力学仿真实验</li>
            <li>悬架底盘仿真实验</li>
            <li>整车控制硬件在环仿真系统</li>
            <li>辅助驾驶系统与无人驾驶系统开发</li>
            <li>交通安全领域研究</li>
            <li>人机工程学研究</li>
            <li>特种车辆驾驶训练</li>
            <li>多车作战模拟系统开发</li>
            <li>作为演示平台</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default EvDynamicsLab;
