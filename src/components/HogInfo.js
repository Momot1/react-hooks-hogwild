import React, {useState} from "react";
import Hog from "./Hog";


function HogInfo(hogs){
    const [filterOn, setFilterOn] = useState(false)
    const [weightFilterOn, setWeightFilterOn] = useState(false)
    const [nameFilterOn, setNameFilterOn] = useState(false)

    const hogsElements = hogs.hogs
    .filter(hog => filterOn ? hog.greased : true)
    .sort(compare)
    .map(hog => 
        <div key={hog.name} className = 'ui grid container'>    
            <Hog hog={hog}/>
        </div>)

    function compare(a, b){
        if(nameFilterOn){
            if(a.name < b.name){
                return -1
            } else if(a.name > b.name){
                return 1
            } else{ return 0 }
        } else if(weightFilterOn){
            if(a.weight < b.weight){
                return -1
            } else if(a.weight > b.weight){
                return 1
            } else{ return 0 }
        } else{
            return 0
        }
    }

    console.log(nameFilterOn)
    console.log(weightFilterOn)

    return (
        <div>
            <button onClick = {() => setFilterOn(!filterOn)}>{filterOn ? "Show All Hogs" : "Show Greased Hogs"}</button><br></br>
            <button onClick = {() => setWeightFilterOn(!weightFilterOn)}>Filter by Weight</button>
            <button onClick = {() => setNameFilterOn(!nameFilterOn)}>Filter by Name</button>
            {hogsElements}
        </div>
    )
}

export default HogInfo