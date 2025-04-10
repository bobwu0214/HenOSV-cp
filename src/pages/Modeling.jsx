import {  useState, useMemo } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Grid,  } from '@react-three/drei'
import Base from '../components/Base.jsx'
import ChasuqiModel from '../components/chasuqimodel.jsx'
import Fork from '../components/fork.jsx'
import ControlPanel from '../components/ControlPanel.jsx'
import FangzhuanglanModel from '../components/fangzhuanglan.jsx'
import DianjiModel from '../components/dianji.jsx'
import Zhijia from '../components/zhijia.jsx'
import BizhenModel from '../components/bizhen.jsx'
import Lunzu1Model from '../components/lunzu1.jsx'
import Lunzu2Model from '../components/lunzu2.jsx'
import '../index.css'



export default function Modeling() {
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
        camera={{ position: [-200, 300, 300], fov: 55 }}
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
          fadeDistance={2000}
        />
        
        <Base 
          rotation={[Math.PI / 2, 0, 0]} 
          {...baseParameters} 
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

        <FangzhuanglanModel 
          position={[0, 0, 250+(baseParameters.Y - 600)/2]}
          rotation={[0, 0, 0]}
          scale={10} 
        />

        <FangzhuanglanModel 
          position={[0, 0, -250-(baseParameters.Y - 600)/2]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={10} 
        />

        <DianjiModel
          position={[0, 2, baseParameters.Base_L5+45+(baseParameters.Y - 600)/2]}
          rotation={[0, 0, 0]}
          scale={10}
        />

        <DianjiModel
          position={[0, 2, -baseParameters.Base_L5-45-(baseParameters.Y - 600)/2]}
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
          position={[-97-(baseParameters.X-280)/2, 26, -211]}
          rotation={[0, -Math.PI/2, -Math.PI/2]}
          scale={10}
        />

        <Lunzu1Model
          position={[97+(baseParameters.X-280)/2, 26, 211]}
          rotation={[-Math.PI/2, Math.PI/2, 0]}
          scale={10}
        />

        <Lunzu2Model
          position={[-97-(baseParameters.X-280)/2, 22, 211]}
          rotation={[Math.PI, -Math.PI/2, 0]}
          scale={10}
        />
        <Lunzu2Model
          position={[97+(baseParameters.X-280)/2, 23, -211]}
          rotation={[-Math.PI, Math.PI/2, 0]}
          scale={10}
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