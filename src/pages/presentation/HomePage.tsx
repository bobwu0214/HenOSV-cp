import React from "react";

export const HomePage: React.FC = () => {
  return (
    <div className="bg-[#141414] flex flex-col items-center pt-32 pb-80">
      {/* Title Section */}
      <div className="relative w-[758px] max-w-full">
        <h1 className="text-white text-center font-urbanist text-6xl font-semibold leading-tight z-0">
          如何定义一辆你自己的车
        </h1>
        <p className="text-[#999] text-center font-urbanist text-4xl font-medium z-0 mt-6">
          define your own vehicle
        </p>
        <div className="rounded-[159.091px] border border-[#262626] bg-[#141414] absolute z-0 flex min-h-[175px] w-[175px] p-4 gap-4 overflow-hidden h-[175px] right-[-435px] top-[-66px]">
         
        </div>
      </div>

      {/* First Row of Specs */}
      <div className="flex mt-[607px] w-[80%] mx-auto items-center justify-center gap-4 font-urbanist text-2xl text-white font-bold flex-wrap">
        <div className="w-[144px] h-[67px] rounded-xl border border-[#262626] bg-[#1A1A1A] flex items-center justify-center px-4 py-3">什么是车</div>
        <div className="w-[144px] h-[67px] rounded-xl border border-[#262626] bg-[#1A1A1A] flex items-center justify-center px-4 py-3">乘坐人数</div>
        <div className="w-[144px] h-[67px] rounded-xl border border-[#262626] bg-[#1A1A1A] flex items-center justify-center px-4 py-3">大人/小孩</div>
        <div className="w-[144px] h-[67px] rounded-xl border border-[#262626] bg-[#1A1A1A] flex items-center justify-center px-4 py-3 text-[rgba(201,201,201,1)]">载重</div>
        <div className="w-[144px] h-[67px] rounded-xl border border-[#262626] bg-[#1A1A1A] flex items-center justify-center px-4 py-3">尺寸</div>
        <div className="w-[144px] h-[67px] rounded-xl border border-[#262626] bg-[#1A1A1A] flex items-center justify-center px-4 py-3">轮胎布局</div>
        <div className="w-[144px] h-[67px] rounded-xl border border-[#262626] bg-[#1A1A1A] flex items-center justify-center px-4 py-3">轮胎尺寸</div>
      </div>

      {/* Second Row of Specs */}
      <div className="flex mt-4 w-[80%] mx-auto items-center justify-center gap-4 font-urbanist text-2xl text-white font-bold flex-wrap">
        <div className="w-[144px] h-[67px] rounded-xl border border-[#262626] bg-[#1A1A1A] flex items-center justify-center px-4 py-3">车速</div>
        <div className="w-[144px] h-[67px] rounded-xl border border-[#262626] bg-[#1A1A1A] flex items-center justify-center px-4 py-3">加速度</div>
        <div className="w-[144px] h-[67px] rounded-xl border border-[#262626] bg-[#1A1A1A] flex items-center justify-center px-4 py-3">接近角</div>
        <div className="w-[144px] h-[67px] rounded-xl border border-[#262626] bg-[#1A1A1A] flex items-center justify-center px-4 py-3">离去角</div>
        <div className="w-[144px] h-[67px] rounded-xl border border-[#262626] bg-[#1A1A1A] flex items-center justify-center px-4 py-3">底盘高度</div>
        <div className="w-[144px] h-[67px] rounded-xl border border-[#262626] bg-[#1A1A1A] flex items-center justify-center px-4 py-3">轮胎宽度</div>
        <div className="w-[144px] h-[67px] rounded-xl border border-[#262626] bg-[#1A1A1A] flex items-center justify-center px-4 py-3">扭矩</div>
      </div>

      {/* Third Row of Specs */}
      <div className="flex mt-4 w-[80%] mx-auto items-center justify-center gap-4 font-urbanist text-2xl text-white font-bold flex-wrap">
        <div className="w-[144px] h-[67px] rounded-xl border border-[#262626] bg-[#1A1A1A] flex items-center justify-center px-4 py-3">电池选型</div>
        <div className="w-[144px] h-[67px] rounded-xl border border-[#262626] bg-[#1A1A1A] flex items-center justify-center px-4 py-3">电池安全</div>
        <div className="w-[144px] h-[67px] rounded-xl border border-[#262626] bg-[#1A1A1A] flex items-center justify-center px-4 py-3">电机布局</div>
        <div className="w-[144px] h-[67px] rounded-xl border border-[#262626] bg-[#1A1A1A] flex items-center justify-center px-4 py-3">避震方式</div>
        <div className="w-[144px] h-[67px] rounded-xl border border-[#262626] bg-[#1A1A1A] flex items-center justify-center px-4 py-3">减速比</div>
        <div className="w-[144px] h-[67px] rounded-xl border border-[#262626] bg-[#1A1A1A] flex items-center justify-center px-4 py-3">转弯半径</div>
        <div className="w-[144px] h-[67px] rounded-xl border border-[#262626] bg-[#1A1A1A] flex items-center justify-center px-4 py-3">刹车形态</div>
      </div>

      {/* Fourth Row of Specs */}
      <div className="flex mt-4 w-[80%] mx-auto items-center justify-center gap-4 font-urbanist text-2xl text-white font-bold flex-wrap">
        <div className="w-[144px] h-[67px] rounded-xl border border-[#262626] bg-[#1A1A1A] flex items-center justify-center px-4 py-3">主控板</div>
        <div className="w-[144px] h-[67px] rounded-xl border border-[#262626] bg-[#1A1A1A] flex items-center justify-center px-4 py-3">摄像头</div>
        <div className="w-[144px] h-[67px] rounded-xl border border-[#262626] bg-[#1A1A1A] flex items-center justify-center px-4 py-3">雷达</div>
        <div className="w-[144px] h-[67px] rounded-xl border border-[#262626] bg-[#1A1A1A] flex items-center justify-center px-4 py-3">防撞措施</div>
        <div className="w-[144px] h-[67px] rounded-xl border border-[#262626] bg-[#1A1A1A] flex items-center justify-center px-4 py-3">舒适方案</div>
        <div className="w-[144px] h-[67px] rounded-xl border border-[#262626] bg-[#1A1A1A] flex items-center justify-center px-4 py-3">灯光</div>
        <div className="w-[144px] h-[67px] rounded-xl border border-[#262626] bg-[#1A1A1A] flex items-center justify-center px-4 py-3">语音</div>
      </div>

      {/* Bottom Section with Images and Text */}
      <div className="self-stretch flex mt-[176px] w-full px-[19px] pr-[9px] flex-col items-center">
        {/* First Image */}
        <img
          src="/HenOSV-cp/assets/vehicle-design.png"
          alt="Vehicle Design"
          className="w-full object-contain object-center"
        />

        {/* Parametric Section */}
        <div className="mt-[250px] min-h-[167px] w-[1154px] max-w-full font-urbanist text-5xl text-white font-semibold text-center leading-[72px]">
          参数化小车-从4天-20分钟
        </div>

        {/* Second Image */}
        <img
          src="/public/assets/parameter.png"
          alt=""
          className="aspect-[6.71] object-contain object-center w-full mr-[111px] max-w-[1511px] mt-[100px]"
        />

        {/* Display Effect Section */}
        <div className="flex mt-[250px] ml-[29px] h-[89px] w-[1106px] max-w-full flex-col items-stretch font-urbanist">
          <h2 className="text-white text-center text-5xl font-semibold leading-[72px]">
            展示效果
            <br />
          </h2>
        </div>

        {/* Third Image */}
        <img
          src="/HenOSV-cp/assets/effect.png"
          alt=""
          className="aspect-[1.61] object-contain object-center w-full ml-[51px] max-w-[1428px] mt-[100px]"
        />

        {/* Team Section */}
        <h2 className="text-white text-center text-5xl font-semibold leading-[72px] mt-[250px]">
          团队
        </h2>
        <div className="flex mt-[100px] w-[1225px] max-w-full">
          <img
            alt=""
            src="/HenOSV-cp/assets/team.png"
            className="aspect-[1.75] object-contain object-center w-full"
          />
        </div>

        {/* Additional Team Members */}
        <h2 className="text-white text-center text-5xl font-semibold leading-[72px] mt-[250px]">
          延伸应用
        </h2>
        <div className="flex mt-[100px] w-[1225px] max-w-full">
          <img
            src="/HenOSV-cp/assets/function.png"
            alt=""
            className="aspect-[1.75] object-contain object-center w-full"
          />
        </div>

        {/* About Us Section */}
 
        
      </div>
    </div>
  );
};
