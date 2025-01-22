import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/all"
import gsap from "gsap"

gsap.registerPlugin(ScrollTrigger)

const About = () => {
    useGSAP(() => {
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: "#clip",
                start: "center center",
                end: "+=800 center",
                scrub: 0.5,
                pin: true,
                pinSpacing: true
            }
        })

        clipAnimation.to('.mask-clip-path', {
            width: '100vw',
            height: '100vh',
            borderRadius: 0
        })
    })

    return (
        <section id="about" className="min-h-screen w-screen ">
            <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
                <h2 className="font-general text-sm uppercase md:text-[10px]">
                    Welcome to zentry
                </h2>
                <div className="mt-5 text-center text-4xl uppercase leading-[0.8] md:text-[6rem]">
                    Disc<b>o</b>ver the {`world's `}<br />
                    <b>l</b>argest shared adventure
                </div>

                <div className="about-subtext">
                    <p>The Game begins-your life, now an epic MMORPG</p>
                    <p>Zentry unites every player from countless games and platforms </p>
                </div>
            </div>

            <div className="h-dvh w-screen" id="clip">
                <div className="mask-clip-path about-image">
                    <img
                        src="img/about.webp"
                        className="absolute left-0 top-0 size-full object-cover"
                        alt="Background"
                    />
                </div>
            </div>
        </section>
    )
}

export default About