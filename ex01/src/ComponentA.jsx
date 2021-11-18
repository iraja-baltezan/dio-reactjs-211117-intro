import React, { Children } from "react"

function ComponentA(props){
    return (
        <div>
            <h2>Component A</h2>
            {props.children}
        </div>
    )
}

export default ComponentA