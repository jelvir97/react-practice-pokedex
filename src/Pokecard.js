import React from "react"

/**
 * Pokecard Component
 * 
 * Props: {id, name, type, base_experience}
 */
const Pokecard = ({id, name, type, baseExperience})=>{
    const img_url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    return (<div className="Pokecard">
        <h3 className="Pokecard-Name" >{name}</h3>
        <img className="Pokecard-Img" src={img_url} alt=""/>
        <div className="Pokecard-Info">
            <p><small>Type: {type}</small></p>
            <p><small>EXP: {baseExperience}</small></p>
        </div>
    </div>)
};

export default Pokecard;