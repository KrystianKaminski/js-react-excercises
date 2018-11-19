import React from 'react'

const DisplayName = (props) => {
    console.log(props)
    return (
    <div>
        {props.name}
    </div>
    )
}


export default DisplayName