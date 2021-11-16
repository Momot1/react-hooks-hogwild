import React from "react";

function Hog({hog}){
    console.log(hog)

    function handleClick(element){
        const ps = element.querySelectorAll('p')
        ps.forEach(p => {
            p.style.display === "none" ? p.style.display = "" : p.style.display = "none"
        })
    }

    return (
        <div className = 'ui eight wide column'>
            <h2 onClick ={e => handleClick(e.target.parentNode)}>{hog.name}</h2>
            <img src = {hog.image} alt={hog.name}/>
            <p style={{display: 'none'}}>Specialty: {hog.specialty}</p>
            <p style={{display: 'none'}}>Weight: {hog.weight}</p>
            <p style={{display: 'none'}}>Greased: {hog.greased}</p>
            <p style={{display: 'none'}}>Highest Medal Achieved: {hog["highest medal achieved"]}</p>
        </div>
    )
}

export default Hog