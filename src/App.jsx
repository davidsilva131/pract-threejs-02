import './App.css'
import { Canvas } from '@react-three/fiber'
import Model from './components/Model'
import { OrbitControls } from '@react-three/drei'
const App = () => {
  return (
    <div className='container'>
      <Canvas camera={{ position: [10, 10, 10], fov: 25 }}>
        <ambientLight intensity={0.1} />
        <directionalLight color='white' position={[0, 0, 5]} />
        <Model />
        <OrbitControls />
        {/* <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh> */}
      </Canvas>
    </div>
  )
}

export default App
