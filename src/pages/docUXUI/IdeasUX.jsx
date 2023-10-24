import React from 'react'
import { Link } from 'react-router-dom'

function IdeasUX() {
    let info = [
        {
            titulo: "UX Library",
            descripcion: "Your one-stop website for UX Articles, Books, Resources, & More",
            ruta: "https://www.uxlibrary.org/",
            color: "light"
        },

        {
            titulo: "Material Design",
            descripcion: "Material 3 is the latest version of Google’s open-source design system.",
            ruta: "https://m3.material.io/",
            color: "light"
        },

        {
            titulo: "AirBnb Design",
            descripcion: "Building a Visual Language. Behind the scenes of our new design system.",
            ruta: "https://airbnb.design/building-a-visual-language/",
            color: "light"
        },

        {
            titulo: "Apple Design Resources",
            descripcion: "Design apps quickly and accurately by using templates, guides, and other resources.",
            ruta: "https://developer.apple.com/design/resources/",
            color: "light"
        },

        {
            titulo: "Lightning Design System",
            descripcion: "Create the World’s Best Enterprise App Experiences.",
            ruta: "https://www.lightningdesignsystem.com/",
            color: "success"
        },

        {
            titulo: "Free UX e-books",
            descripcion: "Thoughtful content on mobile & web prototyping, wireframing, mockups, usability testing, project management, design process & more.",
            ruta: "https://www.uxpin.com/studio/ebooks/",
            color: "success"
        },

        {
            titulo: "CoroFlot",
            descripcion: "The Job Board For Hiring Design Talent.",
            ruta: "https://www.coroflot.com/",
            color: "success"
        },

        {
            titulo: "Carrer Strategy Lab",
            descripcion: "Advance your career, grow your confidence, and reach your professional goals.",
            ruta: "https://www.careerstrategylab.com/",
            color: "success"
        },

        {
            titulo: "Mobbin",
            descripcion: "Save hours of UI & UX research with our library of 100,000+ fully searchable mobile & web screenshots",
            ruta: "https://mobbin.com/browse/ios/apps",
            color: "danger"
        },

        {
            titulo: "The app fuel",
            descripcion: "The one-stop station for app builders. UX, Growth, Design. All in one place. Understand why the best apps succeed.Save time on benchmark. Focus on product.",
            ruta: "https://www.theappfuel.com/",
            color: "danger"
        },

        {
            titulo: "The app shots design",
            descripcion: "Real apps. Real solutions. Real inspiration.",
            ruta: "https://appshots.design/",
            color: "danger"
        },

        {
            titulo: "UX Archive",
            descripcion: "Introducing Sessions: the latest product from Waldo!",
            ruta: "https://uxarchive.com/",
            color: "danger"
        },

        {
            titulo: "Air table",
            descripcion: "The fastest way to build apps.",
            ruta: "https://www.airtable.com/",
            color: "primary"
        },

        {
            titulo: "Muzli inspiration",
            descripcion: "El secreto de los diseñadores. La mejor inspiración de diseño - seleccionada especialmente para ti.",
            ruta: "https://muz.li/es",
            color: "primary"
        },

        {
            titulo: "Design inspiration",
            descripcion: "Save & explore ideas that inspire your creativity.",
            ruta: "https://www.designspiration.com/",
            color: "primary"
        },
    ]

  return (
    <div className="container">
            <div className="row">
                {info.map((item, id) => (
                    <div className="col-lg-3 col-sm-1 col-md-1" key={id}>
                        <div className={"alert alert-" + item.color} role="alert" style={{ color: "black" }}>
                            <Link to={item.ruta} style={{ textDecoration: "none", color: "black" }}>
                                <p className='text-center'>
                                    <b>{item.titulo} </b>
                                    {/* {item.descripcion} */}
                                </p>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

        </div>

  )
}

export default IdeasUX