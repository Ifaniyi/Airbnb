import React, { useState } from "react";

function Practice(){
    const [name,setName] = useState();

    const updateName = ()=> {
        setName("Adeifa")
    }
    return(
        <div>
            <h1>My name is {name}</h1>
            <button onClick={updateName}>View More</button>
        </div>
    )
}
export default Practice




