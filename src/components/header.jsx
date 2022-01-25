import React from 'react'

const Header = ({totalCount}) => {

   const  badgeColor=() => {
      let color= "badge badge-pill badge-";
       color += totalCount === 0 ? 'secondary' : 'success'
       return color;
    }
    return (
        <div>
            <h4>Header <span className={badgeColor()}>{totalCount}</span></h4> 

        </div>
    )
}

export default Header
