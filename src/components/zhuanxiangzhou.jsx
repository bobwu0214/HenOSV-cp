import React, { useMemo } from 'react'
import * as THREE from 'three'

function Cylinder({ length, position,rotation }) {
    const geometry = useMemo(() => new THREE.CylinderGeometry(1.5, 1.5, length, 32), [length]);
    // 调整位置，使圆柱体从原点的一端开始延伸
    const adjustedPosition = [position[0]+ length / 2, position[1] , position[2]];

    return (
        <mesh geometry={geometry} position={adjustedPosition} rotation={rotation}>
            <meshStandardMaterial color="royalblue" />
        </mesh>
    );
}

export default Cylinder;