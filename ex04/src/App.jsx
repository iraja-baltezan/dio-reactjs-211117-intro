import React, {useState} from 'react'

const customersArray = [
    { id: 1, name: "Beltrano Cilindrio Tresdê",   skills:['Truco VIP', 'Bola de Gude Master', 'Miojo Gourmet Evangelist']},
    { id: 2, name: "Cicrano Frouxado das Calssa", skills:['Sarrada Quantica', 'Ovo assado']},
    { id: 3, name: "Fulano Alodipino Lozartano",  skills:['Tio do Pavê Level 3', 'Near-Death-Experience Pro']},
    { id: 4, name: "Marotauro do Santo Grau",     skills:['Cringeness Advanced', 'Mugshot Model']},
    { id: 5, name: "Gruntilda Monocelha da Mata", skills:['Caça-talentos', 'Robótica', 'Empreendedora Industrial']},
    { id: 6, name: "Clancia Biutiful Gigahair",   skills:['Influencer', 'Pedir fiado', 'Gossip Maker']},
    { id: 7, name: "Chorana Horlof Seminova",     skills:['Personal Coaching Coach', 'Palestrante Pro', 'Deformador de Opinião']},
]


const App = ()=>{

    const customerSkillRender = (skill, index)=>(
        <li key={index}>{skill}</li>
    )

    const customerItemRender = (customer, index)=>(
        <li key={customer.id}>
            {customer.name}
            <ul>
                {customer.skills.map(customerSkillRender)}
            </ul>
        </li>
    )

    return (
        <div>
            <h2>Clientes</h2>

            <ul>
                {customersArray.map(customerItemRender)}
            </ul>
        </div>
    )
}

export default App