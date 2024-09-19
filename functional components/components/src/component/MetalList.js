import React from 'react'

function MetalList(props) {
  return (
    
       <div className='metalDiv'>
        <img src={props.pic} alt=''></img>
    <h2>Name:{props.name}</h2>
        <h2>Age:{props.age}</h2>
        <h2>proffesion:{props.proffesionName}</h2>
      </div>
    
  )
}

export default MetalList
