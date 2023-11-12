import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";

// @ts-ignore
function Stars(props) {
  const starsRef = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 }),
  );

  useFrame((_state, delta) => {
    // @ts-ignore
    starsRef.current.rotation.x += delta / 10;
    // @ts-ignore
    starsRef.current.rotation.y += delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={starsRef}
        positions={sphere}
        stride={3}
        frustumCulled={true}
        {...props}
      >
        <PointMaterial
          transparent={true}
          color="#f272c8"
          size={0.004}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export function StarCanvas() {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all={true} />
      </Canvas>
    </div>
  );
}
