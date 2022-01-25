import React from 'react'
import Counter from './counter';

const Counters = ({counters, onIncrement, onDelete,onDecrement}) => {
    return (
        <div>
            {counters.map((counter)=> 
            <Counter 
            key={counter.id}
            onIncrement={onIncrement} 
            counter={counter}
            onDelete={onDelete}
            onDecrement={onDecrement}
            />)}
            
        </div>
    )
}

export default Counters;
