import React from 'react'

// function Greet(){
//     return <h1>Hello kamal</h1>
// }
// export default Greet

const Greet = props =>{
    return(
        <div>
        <h1>
            Hello {props.name} a.k.a {props.heroName}
        </h1>
        </div>
    )
}
export default Greet
