import React, { useMemo } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

export default function Zhijia({
    // 默认参数，可通过props覆盖
    X = 280,
    Wheel_W1 = 55,
    color = "royalblue",
    Bracket_H1 = 60,
    Bracket_W5 = 24,
    Bracket_H6 = 16.4,
    Bracket_TH1 = 17.5,
    ...props
    
  }) {
    // 计算依赖的参数
    const Wheel_TW1 = X - Wheel_W1
    const Fork_L1 = (Wheel_TW1 - Wheel_W1) / 2 + 18
    const Bracket_W1 = 50 + ( Fork_L1 - 75  ) * 2

  
    // 顶点数据
    const points = [
        [0,-15],
        [-15,-15],
        [-19, 0],
        [-Bracket_W1/2, 0],
        [-Bracket_W1/2, -12],
        [-Bracket_W1/2 + 13, -Bracket_H1],
        [-Bracket_W5/2, -Bracket_H1],
        [-Bracket_W5/2, -Bracket_H1+Bracket_H6],
        [Bracket_W5/2, -Bracket_H1+Bracket_H6],
        [Bracket_W5/2, -Bracket_H1],
        [Bracket_W1/2 - 13, -Bracket_H1],
        [Bracket_W1/2, -12],
        [Bracket_W1/2, 0],
        [19, 0],
        [15,-15],
    ]

    // 创建几何体和端面
      const { extrudeGeometry, frontShape, backShape, extrudeEdges, frontEdges, backEdges } = useMemo(() => {
        // 创建形状
        const shape = new THREE.Shape()
        shape.moveTo(points[0][0], points[0][1])
        for (let i = 1; i < points.length; i++) {
          shape.lineTo(points[i][0], points[i][1])
        }
        shape.closePath()
    
        // 创建前后端面形状
        const frontShape = new THREE.ShapeGeometry(shape)
        const backShape = new THREE.ShapeGeometry(shape)
        
        // 挤出设置
        const extrudeSettings = {
          depth: Bracket_TH1,
          bevelEnabled: false,
          curveSegments: 12
        }
        

        // 创建挤出几何体
            const extrudeGeometry = new THREE.ExtrudeGeometry(shape, extrudeSettings)
            extrudeGeometry.computeVertexNormals()
            extrudeGeometry.center()
            
            // 放置端面
            const halfDepth = extrudeSettings.depth / 2
            frontShape.translate(0, 30, halfDepth)
            backShape.translate(0, 30, -halfDepth)
            
            // 手动设置有效的边界球
            const maxDim = Math.max(Bracket_W1, Bracket_W5) * 2
            const boundingSphere = new THREE.Sphere(new THREE.Vector3(0, 0, 0), maxDim)
            extrudeGeometry.boundingSphere = boundingSphere
            frontShape.boundingSphere = boundingSphere
            backShape.boundingSphere = boundingSphere
            
            // 确保边界盒也有效
            const min = new THREE.Vector3(-maxDim, -maxDim, -maxDim)
            const max = new THREE.Vector3(maxDim, maxDim, maxDim)
            const boundingBox = new THREE.Box3(min, max)
            extrudeGeometry.boundingBox = boundingBox
            frontShape.boundingBox = boundingBox
            backShape.boundingBox = boundingBox
        
            // 为几何体创建边缘几何体
            const extrudeEdges = new THREE.EdgesGeometry(extrudeGeometry, 30)
            const frontEdges = new THREE.EdgesGeometry(frontShape)
            const backEdges = new THREE.EdgesGeometry(backShape)
        
            return { extrudeGeometry, frontShape, backShape, extrudeEdges, frontEdges, backEdges }
          }, [X, Wheel_W1, Bracket_H1, Bracket_W5, Bracket_H6, Bracket_TH1]) // 依赖这些参数，当它们变化时重新计算
        
          return (
            <group {...props}>
              {/* 渲染挤出的几何体 */}
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