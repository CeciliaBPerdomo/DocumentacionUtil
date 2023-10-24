import React from 'react'

function Animaciones() {
    let animaciones = [
        {
            libreria: "Remotion",
            web: "https://www.remotion.dev/",
            descripcion: "Create real MP4 videos using React. Scale your video production using server-side rendering and parametrization.",
            git: "https://github.com/remotion-dev/remotion",
            infoAdiccional: "https://reactresources.com/topics/react-motion",
            color: "success"
        },

        {
            libreria: "React motion animate",
            web: "https://www.npmjs.com/package/react-motion-animate",
            descripcion: "Animate react components as they scroll in and out of view",
            git: "https://github.com/suhmantha1/react-motion-animate",
            color: "success"
        },

        {
            libreria: "React Spring",
            web: "https://www.react-spring.dev/",
            descripcion: "With naturally fluid animations you will elevate your UI & interactions. Bringing your apps to life has never been simpler.",
            git: "https://github.com/pmndrs/react-spring",
            color: "success"
        },

        {
            libreria: "React Move",
            web: "https://react-move-docs.netlify.app/",
            descripcion: "React-move allows you to define your animations using durations, delays and ease functions. In react-motion you use spring configurations to define your animations.",
            git: "https://github.com/sghall/react-move",
            color: "danger"
        },

        {
            libreria: "TS Particles",
            web: "https://particles.js.org/",
            descripcion: "A lightweight TypeScript library for creating particles.",
            git: "https://img.shields.io/npm/v/tsparticles-engine?style=for-the-badge",
            color: "danger"
        },

        {
            libreria: "AOS",
            web: "https://michalsnik.github.io/aos/",
            descripcion: "Animate On Scroll Library.",
            git: "http://github.com/michalsnik/aos",
            color: "danger"
        },

        {
            libreria: "GSAP",
            web: "https://gsap.com/",
            descripcion: "GSAP allows you to effortlessly animate anything JS can touch. Delivering silky-smooth performance and unmatched support so you can focus on the fun stuff.",
            git: "https://github.com/greensock/GreenSock-JS",
            color: "primary"
        },

        {
            libreria: "React full page",
            web: "https://www.npmjs.com/package/react-full-page",
            descripcion: "Full screen scrolling with React.",
            git: "github.com/zwug/react-full-page",
            color: "primary"
        },

        {
            libreria: "React awesome slider",
            web: "https://www.npmjs.com/package/react-awesome-slider",
            descripcion: "For using the full-screen navigation HOCs please checkout the GatsbyJS and NextJS examples on the ras fullpage strategies repository.",
            git: "https://github.com/rcaferati/react-awesome-slider",
            color: "primary"
        },

        {
            libreria: "React Flickity",
            web: "https://www.npmjs.com/package/react-flickity-component",
            descripcion: "A React.js Flickity component.",
            git: "https://github.com/yaodingyd/react-flickity-component",
            color: "warning"
        },

        {
            libreria: "React Splide",
            web: "https://www.npmjs.com/package/@splidejs/react-splide",
            descripcion: "React Splide is the React component for the Splide slider/carousel.",
            git: "https://github.com/Splidejs/react-splide",
            color: "warning"
        },

        {
            libreria: "React Parallax",
            web: "https://www.npmjs.com/package/react-parallax.",
            descripcion: "A React Component for parallax effect.",
            git: "https://github.com/rrutsche/react-parallax",
            color: "warning"
        },

        {
            libreria: "React Parallax Component",
            web: "https://www.npmjs.com/package/react-plx",
            descripcion: "This is React component which makes creating on scroll effects (aka parallax) easy.",
            git: "https://github.com/Stanko/react-plx",
            color: "success"
        },
    ]

    const abrirLink = (direccion) => {
        window.location.replace(direccion)
    }

    return (
        <div className='container'>

            <br />
            <h3>Animaciones</h3>
            <hr />

            <div class="container text-center">
                <div class="row">
                    {animaciones.map((item, id) => (
                        <div class="col-lg-4 col-sm-1 col-md-1" key={id}>
                            <div class={"alert alert-" + item.color} role="alert" style={{ minHeight: "295px" }}>
                                <p className='text-start'><b>{item.libreria}</b>: {item.descripcion}</p>
                                <p className='text-start'>Web/npm: <b onClick={(e) => abrirLink(item.web)}>{item.web}</b></p>
                                <p className='text-start'>gitHub: <b onClick={(e) => abrirLink(item.git)}>{item.git}</b></p>

                                {item.infoAdiccional ?
                                    <p className='text-start'>Más info: <b onClick={(e) => abrirLink(item.infoAdiccional)}>{item.infoAdiccional}</b></p>
                                    : null
                                }
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )

}

export default Animaciones