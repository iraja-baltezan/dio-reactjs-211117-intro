import React, {useState} from 'react'

const styles = {
    customers: {
        listStyle:'none',
        fontFamily:'sans-serif',
        padding:0,
    },
    customer:{
        border:'1px solid hsl(220deg 50% 90%)',
        borderRadius:'4px',
        padding:'4px 8px',
        margin:'8px 0',
        boxShadow:'0 2px 6px rgba(0 0 0/15%)',
        position:'relative',
    },
    customer__skills: {
        display: 'flex',
        listStyle: 'none',
        justifyContent:'start',
        flexWrap:'wrap',
        padding: 0,
        paddingRight:'32px'
    },
    customer__skill:{
        padding:'4px 8px',
        backgroundColor:'hsl(220deg 90% 94%)',
        marginRight:'2px',
        borderRadius:'4px',
        fontSize:'12px'
    },
    customerDeleteButton:{
        fontSize:'1rem',
        position:'absolute',
        right:'8px',
        top:'8px',
        borderRadius:'50%',
        borderWidth:'1px'
    }
}

const customersArray = [
    { id: 1, name: "Beltrano Cilindrio Tresdê",   skills:['Truco VIP', 'Bola de Gude Master', 'Miojo Gourmet Evangelist']},
    { id: 2, name: "Cicrano Frouxado Dascalssa",  skills:['Sarrada Quantica', 'Ovo assado']},
    { id: 3, name: "Fulano Alodipino Lozartano",  skills:['Tio do Pavê Level 3', 'Near-Death-Experience Pro']},
    { id: 4, name: "Marotauro do Santo Grau",     skills:['Cringeness Advanced', 'Mugshot Model']},
    { id: 5, name: "Gruntilda Monocelha da Mata", skills:['Caça-talentos', 'Robótica', 'Empreendedora Industrial']},
    { id: 6, name: "Clancia Biutiful Gigahair",   skills:['Influencer', 'Pedir fiado', 'Gossip Maker']},
    { id: 7, name: "Chorana Horlof Seminova",     skills:['Personal Coaching Coach', 'Palestrante Pro', 'Deformador de Opinião']},
]


const App = ()=>{

    const customerDelete = (id)=>{
        console.log('delete ', id)
    }
    const customerSkillRender = (skill, index)=>(
        <li key={index} style={styles.customer__skill}>{skill}</li>
    )

    const customerItemRender = (customer, index)=>(
        <li key={customer.id} style={styles.customer}>
            {customer.name}
            <ul style={styles.customer__skills}>
                {customer.skills.map(customerSkillRender)}
            </ul>
            <button onClick={(event)=>customerDelete(customer.id)} style={styles.customerDeleteButton}>x</button>
        </li>
    )

    const name = 'Miranha Sipider'

    const showEvent = (event)=>{
        event.preventDefault()
        console.log('Botão clicado.', event)
        console.log(name)
    }

    const onInputTextChange = (event)=>{
        event.preventDefault()
        const {value} = event.target
        console.log(value)
    }

    const Button = <button onClick={showEvent}>Mostrar evento</button>

    return (
        <div>
            <h2>Bem vindo à nossa aula!</h2>
            <input type="text" onChange={onInputTextChange} />
            {Button}

            <hr/>

            <h2>Clientes</h2>

            <ul style={styles.customers}>
                {customersArray.map(customerItemRender)}
            </ul>
        </div>

    )
}



export default App