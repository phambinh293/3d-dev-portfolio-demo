import { Sparkles } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { HeroBoy } from './HeroBoy'

const HerotExperience = () => {
    return (
        <Canvas>
            <ambientLight />
            <directionalLight position={[-2, 0, 3]} intensity={3} color={'#ff288d5'} />
            <directionalLight position={[-2, 0, 3]} intensity={3} color={'#1c34ff'} />
            <Sparkles
                count={500}
                size={2}
                speed={0.5}
                color={'pink'}
                scale={[10, 10, 2]}
            />
            <group>
                <HeroBoy scale={9} position={[2,-15,-1]}/>
            </group>
        </Canvas>
    )
}

export default HerotExperience