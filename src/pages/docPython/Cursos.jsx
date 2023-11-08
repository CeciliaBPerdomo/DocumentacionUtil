import React from 'react'
import { Link } from 'react-router-dom'

function Cursos() {
    let info = [
        {
            descripcion: "Conceptos básicos",
            web: "https://www.coursera.org/learn/python-basics?irgwc=1&utm_medium=partners&utm_source=impact&utm_campaign=1995108&utm_content=b2c&irclickid=xTfRLA1CxxyPWZiVFl1e02wFUkFRwQSPqz:oUk0&irgwc=1&utm_medium=partners&utm_source=impact&utm_campaign=27795&utm_content=b2c",
            color: "success"
        },

        {
            descripcion: "Python for everybody",
            web: "https://www.coursya.com/product/python-for-everybody-specialization/?utm_source=LinkedIn+&utm_campaign=MM",
            color: "success"
        },

        {
            descripcion: "IBM Courses",
            web: "https://developer.ibm.com/languages/python/courses/",
            color: "success"
        },

        {
            descripcion: "Crash course",
            web: "https://www.coursera.org/learn/python-crash-course?irgwc=1&utm_medium=partners&utm_source=impact&utm_campaign=1995108&utm_content=b2c&irclickid=xTfRLA1CxxyPWZiVFl1e02wFUkFRwV1fqz:oUk0&irgwc=1&utm_medium=partners&utm_source=impact&utm_campaign=27795&utm_content=b2c",
            color: "success"
        },

        {
            descripcion: "Microsoft Ignite",
            web: "https://learn.microsoft.com/es-es/search/?terms=python",
            color: "success"
        },

        
        {
            descripcion: "Reflex",
            web: "https://reflex.dev/",
            color: "success"
        },

    ]
    return (
        <div className='container'>
            <div className="row">
                {info.map((item, id) => (
                    <div className="col-lg-3 col-sm-1 col-md-1" key={id}>
                        <div className={"alert alert-" + item.color} role="alert">
                            <Link to={item.web} style={{ textDecoration: "none", color: "black" }}>
                                <p className='text-center'>
                                    <b>{item.descripcion}</b>
                                </p>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cursos