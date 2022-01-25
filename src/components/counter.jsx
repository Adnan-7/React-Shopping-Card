import React from 'react';

const Counter=({counter,onIncrement,onDelete,onDecrement})=>   {
   

 const formateCount = () => {
    const { value } = counter
    return value === 0 ? 'Zero' : value;
  };

 const getBadgeClasses = () => {
    let classes = 'badge m-2 p-2 px-3   badge-';
    classes +=  counter.value === 0 ? 'warning' : 'primary';
    return classes;
  };

    return (
      <div className='row'>
        <div className="col-5 ml-4"><span className={getBadgeClasses()}>{formateCount()}</span></div>
        <div className="col"> <button className='btn btn-secondary' onClick={()=>onIncrement(counter)}>+</button>
        <button className='btn btn-secondary m-2' onClick={()=>onDecrement(counter)} 
        disabled ={counter.value ===0 ?'disabled':''}>
          -</button>
        <button className='btn  btn-danger' onClick={()=>onDelete(counter.id)}>Delete</button></div>
        
       
      </div>
    );
  
}

export default Counter;
 
