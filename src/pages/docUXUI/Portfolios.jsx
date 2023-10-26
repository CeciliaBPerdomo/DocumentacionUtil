import React from 'react'
import { Link } from 'react-router-dom'

function Portfolios() {
    let info = [
        {
            titulo: "50 Essential UX Portfolios",
            descripcion: "This list was compiled in no particular order, and is only a small snapshot of some of the fantastic work out there.",
            ruta: "https://uxdesign.cc/50-essential-ux-portfolios-2019-edition-38d87fccd998",
            color: "danger"
        },

        {
            titulo: "Top 20 UX Designer Portfolio",
            descripcion: "A personal UX designer portfolio website is a way for you to be yourself and tell your story. Here you'll find top 20 hand-selected portfolios that will inspire you when building your own.",
            ruta: "https://www.casestudy.club/journal/ux-designer-portfolio",
            color: "danger"
        },

        {
            titulo: "5 Tips For the Best UX Writing Portfolio",
            descripcion: "In this guide, we’ll give you a quick overview of what a UX writer does, how a UX writing portfolio is different from a UX design portfolio, and five tips to help you create your best UX writing portfolio.",
            ruta: "https://careerfoundry.com/en/blog/ux-design/5-tips-ux-writing-portfolio/",
            color: "danger"
        },

        {
            titulo: "The 20 Best UX Portfolios",
            descripcion: "Without further ado, here are our picks of the best UX design portfolio examples.",
            ruta: "https://careerfoundry.com/en/blog/ux-design/ux-portfolio-examples-inspiration/#moritz-oesterlau-masters-the-art-of-storytelling-through-case-studies",
            color: "danger"
        },

        {
            titulo: "AMY DeVOOGD",
            descripcion: "digital product designer",
            ruta: "http://devoogd.com/",
            color: "danger"
        },

        {
            titulo: "Ben Howard",
            descripcion: "Ben Howard a designer who codes in Pittsburgh, PA.",
            ruta: "https://benhoward.design/",
            color: "danger"
        },

        {
            titulo: "Edward Lim",
            descripcion: "Edward Lim an UI/UX designer based in San Francisco.",
            ruta: "https://eduxdesigns.com/",
            color: "danger"
        },

        {
            titulo: "Gloria Lo",
            descripcion: "Product designer based in Sydney, Australia with experience in delivering end-to-end UX/UI design for software products.",
            ruta: "https://www.glorialo.design/",
            color: "danger"
        },

        {
            titulo: "Moritz Oesterlau",
            descripcion: "UX/UI Designer with over six years experience conceptualizing and crafting digital products, helping businesses and non-profits expand their capacity for impact.",
            ruta: "https://www.moritzoesterlau.de/",
            color: "danger"
        },

        {
            titulo: "Olivia Truong",
            descripcion: "Senior product designer.",
            ruta: "https://www.oliviatruong.design/",
            color: "danger"
        },

        {
            titulo: "8 Outstanding Student Portfolios",
            descripcion: "Collecting the best designer portfolio websites, resumes and design resources.",
            ruta: "https://medium.com/bestfolios/8-outstanding-student-portfolios-2020-e133e5ac54e2",
            color: "danger"
        },

        {
            titulo: "14 Free Personal Website Templates",
            descripcion: "Working with free personal website templates can be very helpful, and you don’t even need to be an expert to do it.",
            ruta: "https://uideck.com/blog/free-personal-website-templates/",
            color: "danger"
        },

        {
            titulo: "21 day portfolio",
            descripcion: "21-day design portfolio course. Build and visually design a full portfolio website within the span of 21 days.",
            ruta: "https://university.webflow.com/courses/21-day-portfolio-course",
            color: "danger"
        },
    ]

    return (
        <div className="container">
            <div className="row">
                {info.map((item, id) => (
                    <div className="col-lg-3 col-sm-1 col-md-1" key={id}>
                        <div className={"alert alert-" + item.color} role="alert" style={{height: "80px", color: "black" }}>
                            <Link to={item.ruta} style={{ textDecoration: "none", color: "black" }}>
                                <p className='text-center'>
                                    <b>{item.titulo}</b>
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



export default Portfolios