import React from 'react';

const VehicleTrainingIntro: React.FC = () => {
  return (
    <div className="px-6 py-8 max-w-5xl mx-auto space-y-8 text-white">
      <section>
        <p className="text-lg leading-relaxed">
          使用参数化生成工具快速生成车辆的同时，利用fablab的数字制造快速生成底盘。
          开发者可以高效开发上层功能平台。此项目将在3月21日正式发布公开版本。
        </p>
        <img
          src="https://nexmaker-profabx.oss-cn-hangzhou.aliyuncs.com/img/WechatIMG2321.jpg"
          alt="参数化生成车辆示意图"
          className="w-full rounded-xl shadow-lg mt-4"
        />
      </section>

      <section>
        <p className="text-lg leading-relaxed">
          智能小车教育套件配套的实训平台是引导职业教育学生入门无人驾驶的首选实训设备，
          小车实训平台具备环境感知模块、决策模块、ROS Auto驾驶系统、控制模块、嵌入式车载控制开发板。
          小车使用模块化设计，学生可以组装单模块功能实训，也可以集合模块进行功能实训。
        </p>
        <img
          src="https://raw.githubusercontent.com/bobwu0214/imageuploadservice/main/img/202210112008158.png"
          alt="智能小车教育平台"
          className="w-full rounded-xl shadow-lg mt-4"
        />
      </section>

      <section>
        <h2 className="text-xl font-bold mt-8 mb-4">1. 硬件配置：</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>CMOS摄像头、CCD摄像头</li>
          <li>超声波雷达</li>
          <li>三轴加速度计、三轴陀螺仪、三轴磁力计</li>
          <li>GPS接收机</li>
          <li>4G LTE通讯模块、WIFI模块、蓝牙模块</li>
          <li>激光雷达、电磁传感器、轮速编码器</li>
          <li>小车环境感知模块</li>
        </ul>

        <h2 className="text-xl font-bold mt-8 mb-4">2. 小车功能：</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>支持接入单线激光雷达、单目摄像头，具备环境感知功能</li>
          <li>识别障碍物、车道线，支持二维地图创建</li>
          <li>ROS Auto 决策系统可识别动态障碍物并避障</li>
          <li>车辆运动加速度检测、姿态检测、导航磁场检测</li>
          <li>室外导航信号接收</li>
          <li>车联网云端交互通讯</li>
        </ul>

        <h2 className="text-xl font-bold mt-8 mb-4">3. 程序支持：</h2>
        <p className="text-lg leading-relaxed">
          配套相关基于 C/C++/Python 的示例程序
        </p>
      </section>
    </div>
  );
};

export default VehicleTrainingIntro;
