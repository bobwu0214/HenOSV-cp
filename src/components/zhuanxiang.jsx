import React, { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

export default function ZhuanxiangModel({ 
  position = [0, 0, 0], 
  rotation = [0,0,0], 
  scale = 1
}) {
  const groupRef = useRef()
  
  // 加载模型
  const { scene } = useGLTF('/HenOSV-cp/models/zhuanxiang.glb')
  
  // 处理模型材质和边缘
  useEffect(() => {
    if (!groupRef.current) return
    
    // 克隆场景
    const clonedScene = scene.clone()
    
    // 遍历所有网格
    clonedScene.traverse((obj) => {
      if (obj.isMesh) {
        obj.material = new THREE.MeshStandardMaterial({ 
          color: 'red',
          
          side: THREE.DoubleSide
        })
        
        // 创建边缘几何体
        const edges = new THREE.EdgesGeometry(obj.geometry, 30) // 30度阈值
        
        // 创建线段
        const line = new THREE.LineSegments(
          edges,
          new THREE.LineBasicMaterial({ 
            color: 'black', 
            linewidth: 1,
            // 应用微小偏移以避免Z-fighting
            polygonOffset: true,
            polygonOffsetFactor: -1,
            polygonOffsetUnits: -1
          })
        )
        
        // 将线段添加到组中（与网格并列）
        line.applyMatrix4(obj.matrixWorld)
        clonedScene.add(line)
      }
    })
    
    // 添加处理后的场景到组
    groupRef.current.add(clonedScene)
  }, [scene])
  
  return (
    <group 
      ref={groupRef}
      position={position}
      rotation={rotation}
      scale={typeof scale === 'number' ? [scale, scale, scale] : scale}
    />
  )
}

// 预加载模型，提高性能
useGLTF.preload('/HenOSV-cp/models/zhuanxiang.glb')