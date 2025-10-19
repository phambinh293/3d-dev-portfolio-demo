import { Canvas } from "@react-three/fiber"
import GradientSpheres from "../components/GradientSpheres"
import TitleHeader from "../components/TitleHeader"
import { Alien } from "../components/models/Alien"
import { OrbitControls } from "@react-three/drei"
import { bentoSocialLinks } from "../constants";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    useGSAP(()=>{
        gsap.from('#card',{
            opacity:0,
            y:0,
            stagger:0.2,
            duration:0.8,
            ease:"power3.inOut",
            scrollTrigger:{
                trigger:'#about',
                start:'top top',
            }
        });
        gsap.from('.animated-text',{
            opacity:0,
            y:20,
            stagger: 0.15,
            duration:0.6,
            ease: 'power3.inOut',
            scrollTrigger:{
                trigger:'#about',
                start:'top top',
            }
        });
    },[])
    return (
        <section id="about" className="flex-center relative md:p-0 px-5">

            <GradientSpheres
                sphere1Class="about-gradient-sphere about-sphere-1"
                sphere2Class="about-gradient-sphere about-sphere-2"
            />

            <div className="container w-full  h-full md:my-40 my-20 relative z-10">
                <TitleHeader title={"About Me"} text={"Passionate Creator, Liftlong Learner"} number={"01"} />

                <div className="md:mt-20 mt-10">
                    <div className="grid grid-cols-12 md:grid-rows-12 gap-5">
                        <div className="md:col-span-7 col-span-12 row-span-5">
                            <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                                <div>
                                    <img src="/images/flower.svg" alt="flower" className="md:w-32 w-16 flower" />
                                </div>
                                <div className="mt-5">
                                    <h1 className="text-blue-50 md:text-5xl text-3xl">QUANG BINH</h1>
                                    <p className="md:text-2xl mt-2 animated-text">
                                        I am a San francisco-based product designer with a focus on web design, illustration, a visual development. I have a diverse range of experience having worked across various fields and industries.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* 3D Shiba */}
                        <div className="md:col-span-5 col-span-12 row-span-5">
                            <div className="bg-[#C8D751] hover:cursor-grab rounded-2xl w-full md:h-full h-60">
                                <div className="w-full h-full">
                                    <Canvas>
                                        <OrbitControls enableZoom={false} />
                                        <Alien
                                            scale={2}
                                            position={[0, -5.5, 0]}
                                            rotation={[0, -0.5, 0]}
                                        />
                                    </Canvas>
                                </div>
                            </div>
                        </div>
                        {/* Web design card */}
                        <div id="card" className="md:col-span-6 col-span-12 row-span-3">
                            <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                                <div className="flex flex-col h-full justify-center">
                                    <h1 className="gradient-title md:text-3xl text-2xl font-medium">
                                        Web Disign & Dev
                                    </h1>
                                    <p className="md:text-2xl max-w-96 animated-text">
                                        Cleanly Designed, Conversion-focused, and built for easy updates.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* UI/UX Card */}
                        <div id="card" className=" md:col-span-6 col-span-12 row-span-3">
                            <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                                <div className="flex flex-col h-full justify-center">
                                    <h1 className="gradient-title md:text-3xl text-2xl font-medium">
                                        UX UI Design
                                    </h1>
                                    <p className="md:text-2xl max-w-96 animated-text">
                                        Seamless web or mobile app design to wow your users.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Moti Card */}
                        <div id="card" className="md:col-span-4 col-span-12 row-span-4">
                            <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                                <div className="flex flex-col justify-between h-full">
                                    <h1 className="gradient-title md:text-5xl text-3xl font-bold animated-text">
                                        BE YOURSELF!
                                    </h1>
                                    <h1 className="gradient-title md:text-5xl text-3xl font-bold animated-text">
                                        BE DIFFERENT!
                                    </h1>
                                    <h1 className="gradient-title md:text-5xl text-3xl font-bold animated-text">
                                        BUILD DIFFERENT!
                                    </h1>
                                </div>
                            </div>
                        </div>
                        {/* Bento social  links */}
                        {bentoSocialLinks.map((item, index) => (
                            <div key={index} className="md:col-span-4 col-span-12 row-span-2">
                                <div className="bg-black-300 rounded-2xl p-7 w-full h-full group cursor-pointer">
                                    <div className="flex justify-between items-center h-full">
                                        <div className="flex items-center md:gap-5">
                                            <img src={item.icon} alt={item.icon} />
                                            <h1 className="gradient-title md:text-3xl text-xl md:m-0 ms-5 font-medium">{item.name}</h1>
                                        </div>
                                        <div className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform">

                                            <img src="/images/arrowupright.svg" alt="arrowupright" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About