import React from 'react'
import CustomerListItemButtonCss from './CustomerListItemButtonCss'

const CustomerListItemButton = (props)=>{
    let text
    switch(props.icon){
        case 'delete':
            text = '×'
            break
        default:
            text = props.children
    }
    return (
        <button onClick={props.onClick} style={CustomerListItemButtonCss.customerDeleteButton}>{text}</button>
    )
}
export default CustomerListItemButton