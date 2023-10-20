import React from 'react'
import { Link } from 'react-router-dom'

function Games() {
    let games = [
        {
            libreria: "CSS-Grid Attack",
            web: "https://codingfantasy.com/games/css-grid-attack",
            descripcion: "In an ancient Elvish prophecy, it was said that one day a man would be born with an incredible power that predicts the future, Marketi Predictori.",
            color: "success",
            git: ""
        },

        {
            libreria: "FlexBox Zombies",
            web: "https://mastery.games/flexboxzombies/",
            descripcion: "The zombies broke through the southern fence once and ate all, but one of my goats.",
            git: "",
            color: "success"
        },

        {
            libreria: "CSS Grid Garden",
            web: "https://cssgridgarden.com/",
            descripcion: "Bienvenido a Grid Garden, donde escribirás tu código CSS para cultivar tu jardín de zanahorias.",
            git: "",
            color: "danger"
        },

        {
            libreria: "Flexbox Froggy",
            web: "https://flexboxfroggy.com/#es",
            descripcion: "Un juego donde ayudarás a Froggy y a sus amigos escribiendo código CSS.",
            git: "",
            color: "danger"
        },

        {
            libreria: "FlexBox Defense",
            web: "http://www.flexboxdefense.com/",
            descripcion: "Your job is to stop the incoming enemies from getting past your defenses. Unlike other tower defense games, you must position your towers using CSS!",
            git: "",
            color: "primary"
        },

        {
            libreria: "Fluk-Out",
            web: "https://flukeout.github.io/",
            descripcion: "CSS Dinner",
            git: "",
            color: "primary"
        },

        {
            libreria: "CSS Battle",
            web: "https://cssbattle.dev/",
            descripcion: "The funnest multiplayer game with 300K+ web designers & developers. Replicate the target images using CSS - the shorter your code, the higher your score! Happy coding!",
            git: "",
            color: "warning"
        },

        {
            libreria: "Code Combat",
            web: "https://codecombat.com/",
            descripcion: "Learn to Code Through the Power of Play.",
            git: "",
            color: "warning"
        },

        {
            libreria: "Knighy of the flextable",
            web: "https://knightsoftheflexboxtable.com/",
            descripcion: "Good day, my lord. Welcome to the Knights of the Flexbox table. A game where you can help Sir Frederic Flexbox and his friends to uncover the treasures hidden in the Tailwind CSS dungeons.",
            git: "",
            color: "success"
        },

        {
            libreria: "Code monkey, for kids",
            web: "https://www.codemonkey.com/?utm_campaign=cm_gs_a_br_la_en&utm_source=google&utm_medium=cpc&utm_content=439014489000&utm_adgroup=codemonkey_em&utm_placement&gad=1&gclid=CjwKCAjwjaWoBhAmEiwAXz8DBWimxF4YFfVZd2pVJYQ7fHrEF61v_85BUY0W47COuJbPM4X7uLhzMhoCdsAQAvD_BwE",
            descripcion: "Introducing programming games for the next generation.",
            git: "",
            color: "success"
        },
    ]
    return (
        <div className="container text-center">
            <br />
            <div className="row">
                {games.map((item, id) => (
                    <div className="col-6" key={id}>
                        <div className={"alert alert-" + item.color} role="alert" style={{ height: "100px", color: "black" }}>
                            <Link to={item.web} style={{ textDecoration: "none", color: "black" }}>
                                <p><b>{item.libreria}</b>: {item.descripcion}</p>
                            </Link>
                            {item.git !== "" ?
                                <Link to={item.git} style={{ textDecoration: "none", color: "black" }}>
                                    <p>gitHub: <b>{item.git}</b></p>
                                </Link>
                                : null}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default Games