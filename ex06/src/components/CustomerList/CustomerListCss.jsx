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
export default styles