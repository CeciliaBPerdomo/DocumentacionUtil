import React from 'react'
import IdeasUX from './IdeasUX.jsx'
import Portfolios from './Portfolios.jsx'
import Gesalt from './Gesalt.jsx'
import CustomWebsite from './CustomWebsite.jsx'
import Mockups from './Mockups.jsx'

function UXIdeas() {
    return (
        <div className='container'>
            {/* Ideas */}
            <br />
            <h3>Ideas UX</h3>
            <hr />
            <IdeasUX />

            {/* Teoria */}
            <br />
            <h3>Teoria de Gesalt</h3>
            <hr />
            <Gesalt />


            {/* Portfolios */}
            <br />
            <h3>Portfolios</h3>
            <hr />
            <Portfolios />

            {/* Custom webistes */}
            <br />
            <h3>Custom Websites</h3>
            <hr />
            <CustomWebsite />

            {/* Mockups */}
            <br />
            <h3>Mockups</h3>
            <hr />
            <Mockups />
        </div>
    )
}

export default UXIdeas