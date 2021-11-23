import React from "react"
import styles from './CustomerListCss'
import CustomerListItemButton from "./CustomerListItemButton/CustomerListItemButton"

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
        <CustomerListItemButton onClick={(event)=>customerDelete(customer.id)} icon="delete"> - </CustomerListItemButton>
    </li>
)

const CustomerList = (props)=>{
    return (
        <ul style={styles.customers}>
            {props.customersArray.map(customerItemRender)}
        </ul>
    )
}

export default CustomerList