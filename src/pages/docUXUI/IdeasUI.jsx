import React from 'react'
import { Link } from 'react-router-dom'

function IdeasUI() {
    let info = [
        {
            titulo: "Best Practices in UI Design",
            descripcion: "A User Experience Perspective on Best Practices in UI Design.",
            ruta: "https://medium.com/@JoeyQiang/the-animated-interface-a-user-experience-perspective-on-best-practices-in-ui-design-4520f024b801#id_token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjdkMzM0NDk3NTA2YWNiNzRjZGVlZGFhNjYxODRkMTU1NDdmODM2OTMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIyMTYyOTYwMzU4MzQtazFrNnFlMDYwczJ0cDJhMmphbTRsamRjbXMwMHN0dGcuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiIyMTYyOTYwMzU4MzQtazFrNnFlMDYwczJ0cDJhMmphbTRsamRjbXMwMHN0dGcuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDE0NzM5Mjg5MDUwNzQwMDEwNzciLCJlbWFpbCI6ImNlY2lsaWEucGVyZG9tb0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmJmIjoxNjk4MDgyNDcxLCJuYW1lIjoiQ2VjaWxpYSBQZXJkb21vIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0lNZEl4Rk5HSnpzd2hBTGE0Q0Ytd0JMc2lIQlpYZ1RMY0pZZWNKV2djWnlnbE89czk2LWMiLCJnaXZlbl9uYW1lIjoiQ2VjaWxpYSIsImZhbWlseV9uYW1lIjoiUGVyZG9tbyIsImxvY2FsZSI6ImVzIiwiaWF0IjoxNjk4MDgyNzcxLCJleHAiOjE2OTgwODYzNzEsImp0aSI6Ijg5NjQ1NmY4YmMwYmJmOGEyNmU3MTMxMjM1MDExOGYzZmRlYTE3MmQifQ.gr90oEpicBv94jK0oiBOJWhjwMwF6N1WkoP_KohvPiMpujIo2tAeyAfCgqiiMIQAxIAXY0RbyZ47RXxf-qWcYvjTXqvw65YaxPODIxA2TEmEvmjlG_iv7f1rD5SIOpUAeQ8KIYRoyBQebZFbctGY_eMNKjDvsRlZeMsBw9c-35kfAaEblklu9XhkdcjvDS0Wqxit8Eytu4cBOjqUHdJl6E4WHQv2zmZUEwL5N3-4W3Nmo2i_pFXgmWD3-uE_xvCDpeYdBgyZUpqr3DNF5aHCvOEfucwpS3SyjnuXmSiHpuKcGIMETPNHMID5eJ_MX8bbE1d2U5BGgTMKNCU_N7Iufg",
            color: "light"
        },

        {
            titulo: "UI Garage",
            descripcion: "Daily handpicked UI inspiration & patterns.",
            ruta: "https://uigarage.net/",
            color: "light"
        },

        {
            titulo: "UI Resources",
            descripcion: "Real design inspiration.",
            ruta: "https://www.uisources.com/",
            color: "light"
        },

        {
            titulo: "UI Patters",
            descripcion: "User Interface Design patterns.",
            ruta: "https://ui-patterns.com/",
            color: "light"
        },

        {
            titulo: "Designing an Effective UI",
            descripcion: "Designing an Effective UI.",
            ruta: "https://www.nngroup.com/articles/designing-effective-carousels/",
            color: "light"
        },

        {
            titulo: "Adobe: kits de diseño de interfaz",
            descripcion: "kits de diseño de interfaz.",
            ruta: "https://helpx.adobe.com/la/xd/help/access-ui-kits.html",
            color: "light"
        },

        {
            titulo: "UX Crush",
            descripcion: "Material UI",
            ruta: "https://www.uxcrush.com/material-react-components-figma/",
            color: "light"
        },

        {
            titulo: "Screenlane",
            descripcion: "Material UI",
            ruta: "https://screenlane.com/?ref=uimovement/",
            color: "light"
        },

        {
            titulo: "Style guides",
            descripcion: "Website Style Guide Resources",
            ruta: "http://styleguides.io/",
            color: "light"
        },

        {
            titulo: "40+ Helpful Resources",
            descripcion: "40+ Helpful Resources",
            ruta: "https://www.smashingmagazine.com/2009/06/40-helpful-resources-on-user-interface-design-patterns/",
            color: "light"
        },

        {
            titulo: "Choose Design Patterns and Build Wireframes First",
            descripcion: "Choose Design Patterns and Build Wireframes First",
            ruta: "https://technori.com/2013/02/3346-building-a-website-make-sure-you-choose-design-patterns-and-build-wireframes-first/melissa/",
            color: "light"
        },

        {
            titulo: "Building a Design System",
            descripcion: "Building a Design System like Uber and Airbnb",
            ruta: "https://blog.bitsrc.io/building-a-consistent-ui-design-system-4481fb37470f",
            color: "light"
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

export default IdeasUI