import React from 'react'
import { Link } from 'react-router-dom'


function CursosNative() {
    let info = [
        {
            descripcion: "CodeAcademy",
            web: "https://www.codecademy.com/learn/learn-react-native",
            color: "success"
        },

        {
            descripcion: "React Native School",
            web: "https://www.reactnativeschool.com/react-native-basics",
            color: "success"
        },

        {
            descripcion: "Hardvard",
            web: "https://www.edx.org/learn/react-native/harvard-university-cs50-s-mobile-app-development-with-react-native",
            color: "success"
        },

        {
            descripcion: "Coursera",
            web: "https://www.coursera.org/learn/react-native-course",
            color: "success"
        },

    ]
  return (
    <div>
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

export default CursosNative