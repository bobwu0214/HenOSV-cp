import React, { useMemo } from 'react'
import * as THREE from 'three'
// useFrame 未使用，可以移除
// import { useFrame } from '@react-three/fiber'

export default function Dangban({
  // 默认参数
  dangbankuandu = 150,
  dangbanhoudu = 50,
  depth = 9, // 将深度设为 prop
  color = "royalblue",
  edgeColor = "black", // 将边线颜色设为 prop
  ...props
}) {

  // 使用 useMemo 缓存点数组，以避免在每次渲染时重新创建
  const points = useMemo(() => [
    [40, 0],
    [50, 15],
    [dangbankuandu / 2, 15],
    [dangbankuandu / 2, dangbanhoudu],
    [-dangbankuandu / 2, dangbanhoudu],
    [-dangbankuandu / 2, 15],
    [-50, 15],
    [-40, 0],
  ], [dangbankuandu, dangbanhoudu]); // 依赖项

  // 创建几何体和边线
  const { extrudeGeometry, edgesGeometry } = useMemo(() => {
    // 创建形状
    const shape = new THREE.Shape()
    shape.moveTo(points[0][0], points[0][1])
    for (let i = 1; i < points.length; i++) {
      shape.lineTo(points[i][0], points[i][1])
    }
    shape.closePath()

    // 挤出设置
    const extrudeSettings = {
      depth: depth, // 使用 prop
      bevelEnabled: false,
      curveSegments: 12,
      steps: 1, // 确保沿深度只有一个分段
      material: 0, // 侧面的材质索引
      extrudeMaterial: 1 // 前后盖的材质索引
    }

    // 创建挤出几何体 (包含盖面)
    const extrudeGeometry = new THREE.ExtrudeGeometry(shape, extrudeSettings)
    extrudeGeometry.computeVertexNormals()
    // extrudeGeometry.center() // 居中整个几何体

    // 为完整的挤出几何体创建边线几何体
    // 参数 1 表示只绘制角度大于 1 度的边线，有助于过滤掉平滑表面上的线
    const edgesGeometry = new THREE.EdgesGeometry(extrudeGeometry, 1)

    // 不再需要单独的前后盖几何体和边线
    return { extrudeGeometry, edgesGeometry }
  }, [points, depth]) // 更新依赖项

  // 定义材质 - 一个用于侧面，一个用于盖面
  // 如果希望侧面和盖面颜色不同，可以在这里设置不同的颜色
  const sideMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: color,
    side: THREE.DoubleSide // 根据需要设置 side
  }), [color]);
  const capMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: color, // 当前使用相同颜色
    side: THREE.DoubleSide // 根据需要设置 side
  }), [color]);

  return (
    <group {...props}>
      {/* 渲染挤出的几何体 (侧面和盖面) */}
      {/* 传递材质数组，索引对应 extrudeSettings 中的设置 */}
      <mesh
        geometry={extrudeGeometry}
        material={[sideMaterial, capMaterial]} // 索引 0 -> 侧面, 索引 1 -> 盖面
        frustumCulled={false}
      />

      {/* 添加边线 */}
      <lineSegments geometry={edgesGeometry}>
        <lineBasicMaterial color={edgeColor} linewidth={1} />
      </lineSegments>
    </group>
  )
}