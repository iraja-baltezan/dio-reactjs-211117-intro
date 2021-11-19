import React, {useState} from 'react'

const customerAddButton = <button>Registrar novo cliente</button>
const customerLogButton = <button>Histórico dos Clientes</button>



const App = ()=>{

    const [hasCustomer, setHasCustomer] = useState(false)

    const onToggleHasCustomerButton = (event)=>{
        event.preventDefault()
        setHasCustomer( !hasCustomer )
        console.log(`hasCustomer: ${hasCustomer}`)
    }



    const renderShowCustomerHistory = ()=>(
        <section>
            <h3>Clique no botão abaixo para ver o histórico dos clientes.</h3>
            {customerLogButton}
        </section>
    )

    const renderShowCustomerAdd = ()=>(
        <section>
            <h3>Clique no botão abaixo para registrar um cliente.</h3>
            {customerAddButton}
        </section>
    )

    return (
        <div>
            <h2>Este é o App!</h2>
            <p><button onClick={onToggleHasCustomerButton}>Toggle has customer</button></p>
            <hr />

            {hasCustomer ? renderShowCustomerHistory() : renderShowCustomerAdd() }

            {hasCustomer && (
                <section>
                    <h3>Clique no botão abaixo para ver o histórico dos clientes.</h3>
                    {customerLogButton}
                </section>
            )}
        </div>
    )
}

export default App