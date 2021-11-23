import React from 'react'
import CustomerList from '../components/CustomerList/CustomerList'
import customersArray from '../data/data_mock'



const App = ()=>{


    return (
        <div>
            <h2>Bem vindo à nossa aula!</h2>
            <hr/>

            <h2>Clientes</h2>

            <CustomerList customersArray={customersArray}/>
        </div>

    )
}



export default App