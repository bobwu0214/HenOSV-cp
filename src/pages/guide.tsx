import React from "react";

const Guide = () => {
  return (
    <div className="bg-[#141414] flex flex-col items-center pt-32 pb-80">
      {/* Title Section */}
      <div className="relative w-[758px] max-w-full">
        <h1 className="text-white text-center font-urbanist text-6xl font-semibold leading-tight z-0">
          2050-无限竞速v1
        </h1>
        <p className="text-[#999] text-center font-urbanist text-4xl font-medium z-0 mt-6">
          比赛规则
        </p>
      </div>

      {/* Content Section */}
      <div className="w-[80%] mx-auto mt-20">
        {/* 1. 比赛任务简介 */}
        <div className="mb-16">
          <h2 className="text-white font-urbanist text-4xl font-semibold mb-8 border-l-4 border-[#4286F3] pl-4">
            1. 比赛任务简介
          </h2>
          <p className="text-white font-urbanist text-xl leading-relaxed">
            参赛队伍需自主设计并制作AGV遥控小车，在包含坡道、沙石区、砾石区以及障碍物的复合赛道上完成指定任务。
            通过遥控器控制有参数化工具生成的AGV，需在5分钟内完成障碍穿越、定点停靠、应急避障等动作。
          </p>
                  {/* 参赛指南 */}
        <div className="mt-20 p-8 bg-[#1A1A1A] rounded-xl border border-[#262626]">
          <h2 className="text-white font-urbanist text-3xl font-semibold mb-6 text-center">
            参赛指南
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="w-[300px] h-[150px] rounded-xl border border-[#4286F3] bg-[#1A1A1A] flex flex-col items-center justify-center px-4 py-3 hover:bg-[#1E1E1E] transition-all">
              <h3 className="text-[#4286F3] font-urbanist text-2xl font-bold mb-2">设计准备</h3>
              <p className="text-white font-urbanist text-center">使用参数化工具设计你的AGV</p>
            </div>
            <div className="w-[300px] h-[150px] rounded-xl border border-[#4286F3] bg-[#1A1A1A] flex flex-col items-center justify-center px-4 py-3 hover:bg-[#1E1E1E] transition-all">
              <h3 className="text-[#4286F3] font-urbanist text-2xl font-bold mb-2">制作测试</h3>
              <p className="text-white font-urbanist text-center">加工组装并测试你的AGV</p>
            </div>
            <div className="w-[300px] h-[150px] rounded-xl border border-[#4286F3] bg-[#1A1A1A] flex flex-col items-center justify-center px-4 py-3 hover:bg-[#1E1E1E] transition-all">
              <h3 className="text-[#4286F3] font-urbanist text-2xl font-bold mb-2">参加比赛</h3>
              <p className="text-white font-urbanist text-center">在赛道上展示你的AGV性能</p>
            </div>
          </div>
        </div>
        </div>

        {/* 2. 比赛场地说明 */}
        <div className="mb-16">
          <h2 className="text-white font-urbanist text-4xl font-semibold mb-8 border-l-4 border-[#4286F3] pl-4">
            2. 比赛场地说明
          </h2>
          <div className="flex flex-wrap justify-center gap-8 mb-10">
            <img
              src="https://nexmaker-profabx.oss-cn-hangzhou.aliyuncs.com/img/area1.png"
              alt=""
              className="aspect-[1.61] object-contain object-center w-full ml-[51px] max-w-[1428px] mt-[100px]"
            />
            <img
              src="https://nexmaker-profabx.oss-cn-hangzhou.aliyuncs.com/img/area2.png"
              alt=""
              className="aspect-[1.61] object-contain object-center w-full ml-[51px] max-w-[1428px] mt-[100px]"
            />
            
          </div>
          
          <h3 className="text-white font-urbanist text-2xl font-semibold mb-4">
            赛道结构
          </h3>
          <ul className="text-white font-urbanist text-xl leading-relaxed list-disc pl-6 space-y-2">
            <li>基础路段：道路两侧胶带黏贴，宽度0.7m</li>
            <li className="mt-2">障碍区域：</li>
            <ul className="pl-6 space-y-2 mt-2">
              <li>坡道：木质结构，坡度10°-15°，长度2m</li>
              <li>沙石区：厚度50mm的5-20mm粒径石英砂，长度1m</li>
              <li>砾石区：厚度80mm的30-50mm粒径砾石，在拐角处长度1.7m</li>
              <li>红色障碍物：赛道中段随机摆放，长宽高10cm</li>
            </ul>
          </ul>
        </div>

        {/* 3. 比赛流程与规则 */}
        <div className="mb-16">
          <h2 className="text-white font-urbanist text-4xl font-semibold mb-8 border-l-4 border-[#4286F3] pl-4">
            3. 比赛流程与规则
          </h2>
          
          <h3 className="text-white font-urbanist text-2xl font-semibold mb-4">
            3.1 比赛流程
          </h3>
          
          <div className="mb-8">
            <h4 className="text-white font-urbanist text-xl font-semibold mb-2">
              1. 设计阶段
            </h4>
            <ul className="text-white font-urbanist text-xl leading-relaxed list-disc pl-6 space-y-2">
              <li>使用参数化设计工具进行车辆设计</li>
              <li>根据比赛场地需求调整参数</li>
              <li>检查合理性</li>
            </ul>
          </div>
          
          <div className="mb-8">
            <h4 className="text-white font-urbanist text-xl font-semibold mb-2">
              2. 制作阶段
            </h4>
            <ul className="text-white font-urbanist text-xl leading-relaxed list-disc pl-6 space-y-2">
              <li>在工作区通过3D打印机以及激光切割机等设备进行加工</li>
              <li>使用现有的零件搭配加工后的零件组装</li>
              <li>加上电控</li>
            </ul>
          </div>
          
          <div className="mb-8">
            <h4 className="text-white font-urbanist text-xl font-semibold mb-2">
              3. 竞速阶段
            </h4>
            <ul className="text-white font-urbanist text-xl leading-relaxed list-disc pl-6 space-y-2">
              <li>比赛开始前有10分钟调试时间</li>
              <li>在规定时间5分钟内完成比赛（红外计时装置）</li>
              <li>完成后的时间将在大屏幕显示</li>
              <li>每人比赛两次机会</li>
            </ul>
          </div>
          
          <h3 className="text-white font-urbanist text-2xl font-semibold mb-4">
            3.2 评分标准
          </h3>
          <p className="text-white font-urbanist text-xl leading-relaxed mb-4">
            根据时间长短决定成绩排名，以下情况增加时间：
          </p>
          <ul className="text-white font-urbanist text-xl leading-relaxed list-disc pl-6 space-y-2">
            <li>坡道卡住或未通过：+5s</li>
            <li>沙石区域冲出赛道：+5s</li>
            <li>砾石区域冲出赛道：+5s</li>
            <li>冲撞障碍物：+2s</li>
            <li>其他区域冲出赛道：+1s</li>
          </ul>
        </div>
        
        {/* 4. 比赛赛制 */}
        <div className="mb-16">
          <h2 className="text-white font-urbanist text-4xl font-semibold mb-8 border-l-4 border-[#4286F3] pl-4">
            4. 比赛赛制
          </h2>
          
          <h3 className="text-white font-urbanist text-2xl font-semibold mb-4">
            赛制机制
          </h3>
          <ul className="text-white font-urbanist text-xl leading-relaxed list-disc pl-6 space-y-2">
            <li>直接决赛</li>
            <li>奖项：一等一个，二等二个，三等三个</li>
            <li>最佳设计奖：初赛用时最短队伍</li>
            <li>最佳创新奖：技术文档评分最高队伍</li>
          </ul>
        </div>
        

      </div>
    </div>
  );
};

export default Guide;
