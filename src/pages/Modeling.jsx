import React, { Suspense, useState, useMemo } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Grid, useHelper } from '@react-three/drei'
import { AxesHelper } from 'three'
import Base from '../components/Base'
import ChasuqiModel from '../components/chasuqimodel'
import Fork from '../components/fork'
import ControlPanel from '../components/ControlPanel'
import FangzhuanglanModel from '../components/fangzhuanglan'
import DianjiModel from '../components/dianji'
import Zhijia from '../components/zhijia'
import BizhenModel from '../components/bizhen'
import Lunzu1Model from '../components/lunzu1'
import Lunzu2Model from '../components/lunzu2'
import Cylinder from '../components/dianjizhou'
import ZhuanxiangModel from '../components/zhuanxiang'
import ZhuanxiangzhouModel from '../components/zhuanxiangzhou'
import Dianyuan from '../components/dianyuan'
import Tire from '../components/lunzi'
import Dangban from '../components/fangzhuangjia'
import '../index.css'


export default function App() {
  // 基础参数状态
  const [baseParameters, setBaseParameters] = useState({
    Y: 600,
    Bumper_W1: 50,
    Base_W2: 50,
    Base_W1: 240,
    Base_L4: 140,
    Base_L3: 75.5,
    Base_TH1: 3,
    X: 280,
    Base_L5: 70,
    outerRadius: 50,
    innerRadius: 35,
    dangbankuandu: 150,
    dangbanhoudu: 50,
    weight:5,
  })
  
  const modelPositions = useMemo(() => {

    return {
      front: [0, -43, -189-(baseParameters.Y - 600)/2],
      back: [0, -43, 189+(baseParameters.Y - 600)/2],
    }
  }, [baseParameters.Y, baseParameters.Bumper_W1])

  return (
    <>
      <Canvas
        camera={{ position: [-300, 550, 450], fov: 45, near: 0.1, far: 10000 }}
        style={{ width: '100vw', height: '100vh' }}
      >
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        

        {/* 网格辅助 */}
        <Grid 
          args={[2000, 2000]} 
          position={[0, 0, -1]} 
          cellSize={50}
          cellThickness={0.5}
          cellColor="#6f6f6f"
          sectionSize={200}
          sectionThickness={1}
          sectionColor="#9d4b4b"
          fadeDistance={5000}
        />
        
        <Base 
          rotation={[Math.PI / 2, 0, 0]} 
          {...baseParameters} 
        />
        
        <Dianyuan
          position={[0, 25, 0]}
          rotation={[0, 0, 0]}
          scale={1}
        />

        <ChasuqiModel 
          position={modelPositions.front}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={10} 
        />
        
        <ChasuqiModel 
          position={modelPositions.back}
          rotation={[Math.PI / 2, Math.PI, 0]}
          scale={10} 
        />


        <Dangban
          position={[0, 5, 240+(baseParameters.Y - 600)/2]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1}
          dangbankuandu={baseParameters.dangbankuandu}
          dangbanhoudu={baseParameters.dangbanhoudu}
        />
        <Dangban
          position={[0, 5, -240-(baseParameters.Y - 600)/2]}
          rotation={[Math.PI / 2, 0, Math.PI]}
          scale={1}
          dangbankuandu={baseParameters.dangbankuandu}
          dangbanhoudu={baseParameters.dangbanhoudu}
        />

        <DianjiModel
          position={[0, 2, -baseParameters.Base_L5+185+(baseParameters.Y - 600)/2]}
          rotation={[0, 0, 0]}
          scale={10}
        />

        <DianjiModel
          position={[0, 2, baseParameters.Base_L5-185-(baseParameters.Y - 600)/2]}
          rotation={[0, Math.PI, 0]}
          scale={10}
        />

        <BizhenModel
          position={[(baseParameters.X-280)/2+5, 0, -(baseParameters.Y - 600)/2]}
          rotation={[0, Math.PI, 0]}
          scale={10}
        />

        <BizhenModel
          position={[-5-(baseParameters.X-280)/2, 0, -426-(baseParameters.Y - 600)/2]}
          rotation={[0, 0, 0]}
          scale={10}
        />

        <BizhenModel
          position={[-(baseParameters.X-280)/2, 0, (baseParameters.Y - 600)/2]}
          rotation={[Math.PI, Math.PI, Math.PI]}
          scale={10}
        />

        <BizhenModel
          position={[(baseParameters.X-280)/2+5, 0, 426+(baseParameters.Y - 600)/2]}
          rotation={[0, Math.PI, 0]}
          scale={10}
        />
        <Lunzu1Model
          position={[-167-(baseParameters.X-280)/2, 115, 117-(baseParameters.Y - 600)/2]}
          rotation={[0, Math.PI, 0]}
          scale={10}
        />

        <Tire
          position={[-137-(baseParameters.X-280)/2, 26, -211-(baseParameters.Y - 600)/2]}
          rotation={[0, Math.PI/2, Math.PI/2]}
          scale={1}
          outerRadius={baseParameters.outerRadius}
          innerRadius={baseParameters.innerRadius}
        />

        <Lunzu1Model
          position={[167+(baseParameters.X-280)/2, 115, -117+(baseParameters.Y - 600)/2]}
          rotation={[0, 0, 0]}
          scale={10}
        />

        <Tire
          position={[137+(baseParameters.X-280)/2, 26, -211-(baseParameters.Y - 600)/2]}
          rotation={[0, Math.PI/2, Math.PI/2]}
          scale={1}
          outerRadius={baseParameters.outerRadius}
          innerRadius={baseParameters.innerRadius}
        />

        <Tire
          position={[-137-(baseParameters.X-280)/2, 26, 211+(baseParameters.Y - 600)/2]}
          rotation={[0, Math.PI/2, Math.PI/2]}
          scale={1}
          outerRadius={baseParameters.outerRadius}
          innerRadius={baseParameters.innerRadius}
        />

        <Lunzu2Model
          position={[+167+(baseParameters.X-280)/2, 115, 117-(baseParameters.Y - 600)/2]}
          rotation={[0, 0, 0]}
          scale={10}
        />
        <Lunzu2Model
          position={[-167-(baseParameters.X-280)/2, 115, -117+(baseParameters.Y - 600)/2]}
          rotation={[0, Math.PI, 0]}
          scale={10}
        />

        <Tire
          position={[137+(baseParameters.X-280)/2, 26, 211+(baseParameters.Y - 600)/2]}
          rotation={[0, Math.PI/2, Math.PI/2]}
          scale={1}
          outerRadius={baseParameters.outerRadius}
          innerRadius={baseParameters.innerRadius}
        />


        <Fork 
          position={[-20, 7, -226-(baseParameters.Y - 600)/2]} 
          rotation={[Math.PI / 2, 0, 0]}
          X={baseParameters.X}

        />
        <Fork 
          position={[20, 7, -226-(baseParameters.Y - 600)/2]} 
          rotation={[Math.PI / 2, Math.PI, 0]}
          X={baseParameters.X}

        />

        <Fork 
          position={[20, 7, 226+(baseParameters.Y - 600)/2]} 
          rotation={[Math.PI / 2, 0, Math.PI]}
          X={baseParameters.X}

        />
        <Fork 
          position={[-20, 7, 226+(baseParameters.Y - 600)/2]} 
          rotation={[Math.PI / 2, -Math.PI, -Math.PI]}
          X={baseParameters.X}

        />

        <Zhijia
          position={[0, 63, -212-(baseParameters.Y - 600)/2]}
          rotation={[0, 0, 0]}
          X={baseParameters.X}
          scale={1}

        />

        <Zhijia
          position={[0, 63, 212+(baseParameters.Y - 600)/2]}
          rotation={[Math.PI, 0, Math.PI]}
          X={baseParameters.X}
          scale={1}

        />

        <Cylinder
          length={baseParameters.X-20}
          position={[0, 26, 212+(baseParameters.Y - 600)/2]}
          rotation={[0, 0, Math.PI / 2]}

        />
        
        <Cylinder
          length={baseParameters.X-20}
          position={[0, 26, -212-(baseParameters.Y - 600)/2]}
          rotation={[0, 0, Math.PI / 2]}

        />

        <ZhuanxiangModel
          position={[0, -75, 105+(baseParameters.Y - 600)/2]}
          rotation={[0, 0, 0]}
          scale={10}
        />

        <ZhuanxiangModel
          position={[0, -75, -105-(baseParameters.Y - 600)/2]}
          rotation={[0, Math.PI, 0]}
          scale={10}
        />

        
        <ZhuanxiangzhouModel
          length={80+(baseParameters.X - 150)/2-65}
          position={[25, 15, 180+(baseParameters.Y - 600)/2]}
          rotation={[0, 0, Math.PI/2]}

        />

        <ZhuanxiangzhouModel
          length={80+(baseParameters.X - 150)/2-65}
          position={[25, 15, -180-(baseParameters.Y - 600)/2]}
          rotation={[0, 0, Math.PI/2]}

        />


        <ZhuanxiangzhouModel
          length={-80-(baseParameters.X - 150)/2+65}
          position={[-25, 18, -180-(baseParameters.Y - 600)/2]}
          rotation={[0, 0, Math.PI/2]}
          />
        <ZhuanxiangzhouModel
          length={-80-(baseParameters.X - 150)/2+65}
          position={[-25, 15, 180+(baseParameters.Y - 600)/2]}
          rotation={[0, 0, Math.PI/2]}
          />


        <OrbitControls />
      </Canvas>
      
      {/* 控制面板 */}
      <ControlPanel 
        parameters={baseParameters} 
        setParameters={setBaseParameters} 
      />
    </>
  )
}