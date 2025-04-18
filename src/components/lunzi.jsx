import React, { useMemo } from 'react';
import * as THREE from 'three';

/**
 * 创建一个带中心轴的轮胎 React 组件
 * @param {number} outerRadius 外半径，默认 50
 * @param {number} innerRadius 内半径，默认 35
 * @param {number} depth 拉伸长度（厚度），默认 55
 * @param {number} hubDepth 中心圆柱厚度，默认 3
 * @param {object} props 其他传递给 group 的属性 (例如 position, rotation, scale)
 */
function Tire({ outerRadius = 50, innerRadius = 35, depth = 55, hubDepth = 3, ...props }) {
  // 轮胎环的几何体
  const tireGeometry = useMemo(() => {
    const shape = new THREE.Shape();
    shape.absarc(0, 0, outerRadius, 0, Math.PI * 2, false);
    const holePath = new THREE.Path();
    holePath.absarc(0, 0, innerRadius, 0, Math.PI * 2, true);
    shape.holes.push(holePath);

    const extrudeSettings = {
      steps: 2,
      depth: depth,
      bevelEnabled: false,
    };
    // ExtrudeGeometry 默认沿 Z 轴拉伸，中心在 Z=depth/2
    const geom = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    geom.center(); // 将几何体中心移到原点，方便组合和旋转
    return geom;
  }, [outerRadius, innerRadius, depth]);

  // 中心圆柱的几何体
  const hubGeometry = useMemo(() => {
    // CylinderGeometry 默认沿 Y 轴创建
    const geom = new THREE.CylinderGeometry(innerRadius, innerRadius, hubDepth, 32);
    // 旋转使其沿 Z 轴
    geom.rotateX(Math.PI / 2);
    // geom.center(); // CylinderGeometry 默认中心就在原点
    return geom;
  }, [innerRadius, hubDepth]);

  // 轮胎材质
  const tireMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: 0x444444, // 深灰色
      roughness: 0.8,
      metalness: 0.2,
    });
  }, []);

  // 中心圆柱材质 (可以区分一下颜色)
  const hubMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: 0xffa500, // 浅灰色
      roughness: 0.5,
      metalness: 0.5,
    });
  }, []);

  return (
    // 使用 group 将轮胎环和中心圆柱组合
    // 将外部传入的 props 应用到 group 上
    <group {...props}>
      {/* 轮胎环 */}
      <mesh
        geometry={tireGeometry}
        material={tireMaterial}
        name="tireRing"
        // 因为几何体已经居中，所以不需要额外的位置调整
      />
      {/* 中心圆柱 */}
      <mesh
        geometry={hubGeometry}
        material={hubMaterial}
        name="tireHub"
        // 因为几何体已经居中，所以不需要额外的位置调整
        // 如果需要让圆柱稍微突出或凹陷，可以在这里调整 position.z
        // position={[0, 0, (depth - hubDepth) / 2]} // 例如，让圆柱前端与轮胎环前端对齐
      />
    </group>
  );
}

export default Tire;