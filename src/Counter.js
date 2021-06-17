import React from 'react'

const Counter = ({val, onIncreaseClick}) => {
    return (
        <div>
            计数器：{val}
            <div><button onClick={onIncreaseClick}>+</button></div>
        </div>
    )
}   

export default Counter;