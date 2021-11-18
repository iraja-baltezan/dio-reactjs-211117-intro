import React from 'react'
import ReactDOM from 'react-dom'
import "./index.css"
import Button from './Button'
import ComponentA from './ComponentA'
import LifeCycleExample from './LifeCycleExample'

function primeiroJSX(){
    return (
        <div>
            <h1>
                Olá de novo!
                <div>{soma(1,2)}</div>
            </h1>
            <ComponentA>
                <Button title="Botão" onClick={onButtonClick} />
            </ComponentA>
            <hr />
            <LifeCycleExample />
        </div>
    )
}

function onButtonClick(event){
    console.log('Button click...')
}
function soma(a,b){
    return a + b
}

const App = () => {
    return (
        <div className="App">
            {primeiroJSX()}
        </div>
    )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App/>, rootElement)