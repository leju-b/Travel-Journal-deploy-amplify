import React from "react";
import "./hero.css"

const Hero = (props) => {
    return(
        <div className="section">
            <div className="hero-details">
                <div className="img">
                    <img src={`./images/${props.CoverImg}`} alt="" />
                </div>
                <div className="details">
                    <p className="hero-logo"><img src="./images/Fill 219.png" alt="" /><strong>{props.stats.country_name}</strong><a href={`${props.stats.gmap_loc}`}> View on Google Maps</a></p>
                    <h2>{props.title}</h2>
                    <p className="duration">{props.duration}</p>
                    <p className="summary">{props.summary}</p>
                </div>
            </div>
            <hr /> 
        </div>

    )
}
export default Hero