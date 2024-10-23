import React from "react"

function Pokemon({ id, name, type, height, weight, image }) {
    return (
        <div className="pokemon">
            <span>Id: {id}</span>
            <img src={image} alt='img..'></img>
            <h1>{name}</h1>
            <p>Height: {height}</p>
            <p>Weight: {weight}</p>
            <p className="type">Type: {type}</p>
        </div>
    )
}

export default Pokemon;