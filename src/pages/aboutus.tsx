import React from 'react';

const AboutUs = () => {
  return (
    <div className="px-6 py-10 font-[Arial] text-left space-y-12">
      <h2 className="text-3xl font-bold text-center">关于我们</h2>
      <p>
        我们是一个由多领域Maker组成的核心团队，包含主机厂开发、行业标准、嵌入式软件、感知方案、嵌入式硬件、衍生式结构设计、DFM开发，供应链沟通、数控加工等相关人员。
        通过持续的行业积累、自学和创新思维不断突破认知边界。HenOSV专注于车辆的教具开发，用于平时车辆设计、课程学习和科研需求。
        同时探索未来的出行方式：无人驾驶，智慧交通，移动空间……为行业应用开发储备行业认知。
      </p>
      <img src="https://nexmaker-profabx.oss-cn-hangzhou.aliyuncs.com/img/henosv2.001.png" alt="HenOSV Team" className="mx-auto" />

      <ul className="list-disc pl-6 space-y-2">
        <li><a href="https://henosv.com/modeling">车辆参数化生成工具</a>：使用threejs/vue结合Autodesk APS/Autodesk fusion 360 API等前后端技术，实现简洁高效的设计工作，从而推动设计项目快速迭代。</li>
        <li><a href="https://henosv.com/kit">智能小车教育套件</a>：小车分为底盘和功能平台</li>
        <li><a href="https://henosv.com/simulatorlab">仿真套件</a>：通过新能源汽车动力的总成仿真实验室进行车辆的在环检查和相关实验。</li>
        <li><a href="https://henosv.com/henosv">滑板底盘</a>：结合参数化工具和FabLab中心快速实现开发和加工，高效定制车辆。</li>
        <li><a href="https://henosv.com/simulator">交通工具模拟器</a>：用于科研端无人驾驶、人机交互等实验。</li>
        <li><a href="https://profabx.com/agvedu/cmf/">CMF实验室</a>：提供专业人机交互方式与评估建议。</li>
      </ul>

      <h2 className="text-3xl font-bold text-center">发展历程</h2>

      <div className="space-y-6">
        <div>
          <h6 className="font-bold">第一阶段：从创客社区到知识共享</h6>
          <h6 className="font-bold"><a href="https://www.nexmaker.com/" >第一阶段：从创客社区到知识共享</a></h6>
         
          <p>
            在 ProFabX 之前，我们在进行硬件创新时遇到了许多挑战...建立了一个 共享知识、探索新技术 的圈子。
          </p>
        </div>

        <div>
    
          <h6 className="font-bold"><a href="https://www.nexmaker.com/" >第二阶段：Fab 教育与实验室落地</a></h6>
          <ul className="list-disc pl-6">
            <li>通过 NexMaker Academy 提供一体化课程体系</li>
            <li>在高校开展 Hackathon，培养实践能力</li>
            <li>在企业落地 小型实验室，提升数字制造技能</li>
            <li>结合数字工具链优化教学与实践</li>
          </ul>
        </div>

        <div>
          
          <h6 className="font-bold"><a href="https://www.profabx.com/" >第三阶段：数字制造</a></h6>
          <ul className="list-disc pl-6">
            <li>设计与生产优化建议</li>
            <li>样品生产与测试</li>
            <li>开源项目开发与调试</li>
            <li>轻量化设计</li>
          </ul>
        </div>

        <div>
          
          <h6 className="font-bold"><a href="https://www.henosv.com/" >第四阶段：汽车场景实验</a></h6>
          <p>
            从童年梦想到智能小车，从结构联调到六自由度智能座舱，ProFabX 始终致力于探索智能交通未来。
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-center">关于 <a href="mailto:bobwu@profabx.com">Bob</a></h2>
      <p>
        一个不安分的 maker，做过电动车研发，3D打印，创客空间，教师，运营Fab Academy。现在与伙伴共同运营 <a href="https://henosv.com">HenOSV</a> 与 <a href="https://profabx.com">ProFabX</a>。
      </p>

      <h2 className="text-3xl font-bold text-center">加入我们</h2>
      <p>
        如果你是一名工程师、设计师、算法专家，或是热爱硬件创新的创客，欢迎加入我们！
        我们正在寻找勇于挑战现状的创新者。请通过 <a href="mailto:bobwu@profabx.com">邮箱</a> 联系。
      </p>
    </div>
  );
};

export default AboutUs;
