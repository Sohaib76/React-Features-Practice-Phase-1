import React from 'react'

const Recipie = ({title,image,calories,source})=>{
    return(
    <div>
        <h2>Recipie Name: {title}</h2>
        <p>Calories: {calories}</p>
        <img src={image} />
        <p>Source: {source}</p>
    </div>
    )
    
}

export default Recipie