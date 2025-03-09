import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useModelStore } from "../store/useModelStore";

const ThreeScene = () => {
  const { length, width, thickness, wheelDiameter, wheelThickness, wheelDistance } = useModelStore();

  // 计算轮轴位置，确保轮轴沿 Z 轴（蓝轴）方向，并且 x = ± 1/4 长度
  const axleXPos = length / 400; // 1/4 车长

  return (
    <Canvas className="w-full h-full !bg-transparent">
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} intensity={0.8} />

      {/* 车身 */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[length / 100, thickness / 100, width / 100]} />
        <meshStandardMaterial color="#1E88E5" /> {/* Google蓝色 */}
      </mesh>

      {/* 轮轴（平行于 Z 轴，x = ± 1/4 车长） */}
      {[1, -1].map((side) => (
        <mesh key={`axle-${side}`} position={[side * axleXPos, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.01, 0.01, 1.2*width / 100, 32]} />
          <meshStandardMaterial color="#FBBC05" /> {/* Google黄色 */}
        </mesh>
      ))}

      {/* 轮子（附着在轮轴上） */}
      {[1, -1].map((sideX) =>
        [-1, 1].map((sideZ) => (
          <mesh
            key={`wheel-${sideX}-${sideZ}`}
            position={[sideX * axleXPos, 0, sideZ *(wheelDistance / 200+thickness/200) ]}
            rotation={[Math.PI / 2, 0, 0]}
          >
            <cylinderGeometry args={[wheelDiameter / 200, wheelDiameter / 200, wheelThickness / 200, 32]} />
            <meshStandardMaterial color="#34A853" /> {/* Google绿色 */}
          </mesh>
        ))
      )}

      {/* 坐标轴指示器 */}
      <axesHelper args={[2]} />
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeScene;
