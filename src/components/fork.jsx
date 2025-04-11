import React, { useMemo } from 'react'
import * as THREE from 'three'

export default function Fork({
  // 默认参数，可通过props覆盖
  X = 280,
  Wheel_W1 = 55,
  Fork_W1 = 50,
  Fork_TH1 = 7,
  color = "royalblue",
  ...props
}) {
  // 计算相关参数
  const Wheel_TW1 = X - Wheel_W1
  const Fork_L1 = (Wheel_TW1 - Wheel_W1) / 2 + 18
  const Fork_L2 = Fork_L1 - 72

  // 顶点数据
  const points = [
    [0, 0],
    [0, 6.5],
    [-9, 6.5],
    [-9, 27+6.5],
    [0, 27+6.5],
    [0, 27+6.5+6.5],
    [-15, 27+6.5+6.5],
    [-15-Fork_L2, 27+6.5+6.5-5],
    [-15-Fork_L2-28, 27+6.5+6.5-5],
    [-15-Fork_L2-28, 27+6.5+6.5-5-6],
    [-15-Fork_L2-28-23, 27+6.5+6.5-5-6],
    [-15-Fork_L2-28-23-6, 27+6.5+6.5-5-6-3],
    [-15-Fork_L2-28-23-6, 27+6.5+6.5-5-6-3-23],
    [-15-Fork_L2-28-23, 0],
    [-15-Fork_L2-28, 0],
    [-15-Fork_L2-28, -10],
    [-15-Fork_L2, -10],
    [-15, 0]
  ]

  const points2 = [
    [-20.75-Fork_L2, -1.5],
    [-20.75-Fork_L2-16.5, -1.5],
    [-20.75-Fork_L2-16.5, -7.5],
    [-20.75-Fork_L2, -7.5]
  ]

  const points3 = [
    [-20.75-Fork_L2, -1.5+34],
    [-20.75-Fork_L2-16.5, -1.5+34],
    [-20.75-Fork_L2-16.5, -7.5+34],
    [-20.75-Fork_L2, -7.5+34]
  ]

  const points4 = [
    [-39.5-Fork_L2, 24.5],
    [-39.5-Fork_L2-9.5, 24.5],
    [-39.5-Fork_L2-9.5, 24.5-3.5],
    [-39.5-Fork_L2-9.5-21, 24.5-3.5],
    [-39.5-Fork_L2-9.5-21, 24.5-3.5-13],
    [-39.5-Fork_L2-9.5, 24.5-3.5-13],
    [-39.5-Fork_L2-9.5, 24.5-3.5-13-4.5],
    [-39.5-Fork_L2, 24.5-3.5-13-4.5]
  ]

  // 创建几何体和边缘
  const { extrudeGeometry, frontShape, backShape, extrudeEdges, frontEdges, backEdges } = useMemo(() => {
    // 创建形状
    const shape = new THREE.Shape()
    shape.moveTo(points[0][0], points[0][1])
    for (let i = 1; i < points.length; i++) {
      shape.lineTo(points[i][0], points[i][1])
    }
    shape.closePath()

    // 添加矩形孔洞
    const holePath = new THREE.Path()
    holePath.moveTo(points2[0][0], points2[0][1])
    for (let i = 1; i < points2.length; i++) {
      holePath.lineTo(points2[i][0], points2[i][1])
    }
    holePath.closePath()
    shape.holes.push(holePath)

    const holePath1 = new THREE.Path()
    holePath1.moveTo(points3[0][0], points3[0][1])
    for (let i = 1; i < points3.length; i++) {
      holePath1.lineTo(points3[i][0], points3[i][1])
    }
    holePath1.closePath()
    shape.holes.push(holePath1)

    const holePath2 = new THREE.Path()
    holePath2.moveTo(points4[0][0], points4[0][1])
    for (let i = 1; i < points4.length; i++) {
      holePath2.lineTo(points4[i][0], points4[i][1])
    }
    holePath2.closePath()
    shape.holes.push(holePath2)
    
    // 挤出设置
    const extrudeSettings = {
      depth: Fork_TH1,
      bevelEnabled: false,
      curveSegments: 12
    }

    // 创建挤出几何体 - 将原点设在Z轴中心
    const extrudeGeometry = new THREE.ExtrudeGeometry(shape, extrudeSettings)
    extrudeGeometry.computeVertexNormals()
    
    // 重要：不使用center()方法，而是手动调整位置，确保所有部分一致对齐
    // 默认情况下，ExtrudeGeometry从z=0开始向正方向挤出
    // 我们需要平移使其中心位于z=0
    extrudeGeometry.translate(0, 0, -Fork_TH1/2)
    
    // 创建前后端面形状
    const frontShape = new THREE.ShapeGeometry(shape)
    const backShape = new THREE.ShapeGeometry(shape)
    
    // 将端面放置在挤出体的前后表面
    const halfDepth = Fork_TH1 / 2
    frontShape.translate(0, 0, halfDepth)  // 前端面位置
    backShape.translate(0, 0, -halfDepth)  // 后端面位置
    
    // 计算最大尺寸，用于设置边界
    const maxDim = Math.max(
      Math.abs(points[0][0]), 
      Math.abs(points[0][1]),
      ...points.map(p => Math.abs(p[0])),
      ...points.map(p => Math.abs(p[1])),
      ...points2.map(p => Math.abs(p[0])),
      ...points2.map(p => Math.abs(p[1]))
    ) * 2
    
    // 设置边界球
    const boundingSphere = new THREE.Sphere(new THREE.Vector3(0, 0, 0), maxDim)
    extrudeGeometry.boundingSphere = boundingSphere
    frontShape.boundingSphere = boundingSphere
    backShape.boundingSphere = boundingSphere
    
    // 设置边界盒
    const min = new THREE.Vector3(-maxDim, -maxDim, -halfDepth - 1)
    const max = new THREE.Vector3(maxDim, maxDim, halfDepth + 1)
    const boundingBox = new THREE.Box3(min, max)
    extrudeGeometry.boundingBox = boundingBox
    frontShape.boundingBox = boundingBox
    backShape.boundingBox = boundingBox

    // 创建边缘几何体
    const extrudeEdges = new THREE.EdgesGeometry(extrudeGeometry, 30)
    const frontEdges = new THREE.EdgesGeometry(frontShape)
    const backEdges = new THREE.EdgesGeometry(backShape)

    return { extrudeGeometry, frontShape, backShape, extrudeEdges, frontEdges, backEdges }
  }, [X, Wheel_W1, Fork_W1, Fork_TH1, Fork_L2]) // 添加 Fork_L2 到依赖项

  return (
    <group {...props}>
      {/* 渲染挤出几何体 */}
      <mesh geometry={extrudeGeometry} frustumCulled={false}>
        <meshStandardMaterial 
          color={color} 
          side={THREE.DoubleSide} 
        />
      </mesh>
      
      {/* 渲染前后端面 */}
      <mesh geometry={frontShape} frustumCulled={false}>
        <meshBasicMaterial color={color} side={THREE.DoubleSide} />
      </mesh>
      
      <mesh geometry={backShape} frustumCulled={false}>
        <meshBasicMaterial color={color} side={THREE.DoubleSide} />
      </mesh>

      {/* 添加黑色边线 */}
      <lineSegments geometry={extrudeEdges}>
        <lineBasicMaterial color="black" linewidth={1} />
      </lineSegments>
      
      <lineSegments geometry={frontEdges}>
        <lineBasicMaterial color="black" linewidth={1} />
      </lineSegments>
      
      <lineSegments geometry={backEdges}>
        <lineBasicMaterial color="black" linewidth={1} />
      </lineSegments>
    </group>
  )
}