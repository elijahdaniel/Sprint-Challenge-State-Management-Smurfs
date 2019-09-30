import React from 'react'

const Smurf = props => {
  return (
    <div className='smurf'>
      <p>{props.smurf.name}</p>
      <p>
        <b>Age:</b> {props.smurf.age}
      </p>
      <p>
        <b>Height:</b> {props.smurf.height}
      </p>
    </div>
  )
}

export default Smurf
