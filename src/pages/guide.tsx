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
            参赛队伍体验参数化设计工具；通过遥控器控制有参数化工具生成的AGV，完成障碍穿越、定点停靠、应急避障等动作，计时最短者获得相应奖项。
            （如果参与者对加工装配感兴趣，可以参与相关环节，此处不算入分数）
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
              <h3 className="text-[#4286F3] font-urbanist text-2xl font-bold mb-2">制作测试（体验）</h3>
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
          <div className="grid grid-cols-1 gap-8 mb-10 w-full max-w-[1200px] mx-auto">
            <div className="w-full flex justify-center">
              <img
                src="https://nexmaker-profabx.oss-cn-hangzhou.aliyuncs.com/img/area1.png"
                alt="比赛场地图1"
                className="w-full h-auto object-contain"
                style={{ width: "100%", maxWidth: "2500px" }}
              />
            </div>
            <div className="w-full flex justify-center">
              <img
                src="https://nexmaker-profabx.oss-cn-hangzhou.aliyuncs.com/img/area2.png"
                alt="比赛场地图2"
                className="w-full h-auto object-contain"
                style={{ width: "100%", maxWidth: "2000px" }}
              />
            </div>
          </div>
          
          <h3 className="text-white font-urbanist text-2xl font-semibold mb-4">
            赛道结构
          </h3>
          <ul className="text-white font-urbanist text-xl leading-relaxed list-disc pl-6 space-y-2">
            <li>基础路段：道路两侧胶带黏贴，宽度0.7m</li>
            <li className="mt-2">障碍区域</li>
         
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
           
          </div>
          
          <div className="mb-8">
            <h4 className="text-white font-urbanist text-xl font-semibold mb-2">
              3. 竞速阶段
            </h4>
            <ul className="text-white font-urbanist text-xl leading-relaxed list-disc pl-6 space-y-2">
              <li>比赛开始前有10分钟调试时间</li>
              <li>在规定时间5分钟内完成比赛（红外计时装置）</li>
              <li>完成后的时间将在大屏幕显示</li>
          
            </ul>
          </div>
          
          <h3 className="text-white font-urbanist text-2xl font-semibold mb-4">
            3.2 评分标准
          </h3>
          <p className="text-white font-urbanist text-xl leading-relaxed mb-4">
            根据时间长短决定成绩排名，以下情况增加时间：
          </p>
        
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
            <li>奖项</li>
            <li>一等一个，实体遥控车一辆</li>
            <li>二等奖8个：定制礼盒</li>
            <li> 三等奖10个：3d设计数据</li>
          </ul>
        </div>
        
      </div>
    </div>
  );
};

export default Guide;
