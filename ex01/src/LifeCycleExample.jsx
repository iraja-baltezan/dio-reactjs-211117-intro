import React, { Component } from "react"

class LifeCycleExample extends Component {
    constructor(props){
        super(props)

        this.state = {
            clock:1000,
            glassOf:'water'
        }
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                clock: this.state.clock + 1
            })
        }, 3000)
    }

    updateGlassOf = () => {
        this.setState({
            glassOf:this.state.glassOf=='wine'?'water':'wine'
        })
    }

    render(){
        const { clock, glassOf } = this.state
        return (
            <div>
                <h2>{clock}</h2>
                <button onClick={()=>this.updateGlassOf()}>{glassOf}</button>
            </div>
        )
    }
}

export default LifeCycleExample