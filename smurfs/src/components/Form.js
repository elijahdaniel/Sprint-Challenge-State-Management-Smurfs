import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addSmurf } from '../actions'

const Form = props => {
  const [newSmurf, setNewSmurf] = useState({
    name: '',
    age: '',
    height: ''
  })

  const handleSubmit = e => {
    e.preventDefault()
    console.log(newSmurf)
    props.addSmurf(newSmurf)
  }

  const handleChanges = e => {
    let name = e.target.name

    setNewSmurf({ ...newSmurf, [name]: e.target.value })
  }

  return (
    <div>
      <form>
        <section className='form'>
          <input
            name='name'
            type='text'
            placeholder='Name'
            onChange={handleChanges}
          />
          <input
            name='age'
            type='text'
            placeholder='Age'
            onChange={handleChanges}
          />
          <input
            name='height'
            type='text'
            placeholder='Height'
            onChange={handleChanges}
          />
        </section>
        <button type='submit' onClick={handleSubmit}>
          Add Smurf
        </button>
      </form>
    </div>
  )
}

export default connect(
  null,
  { addSmurf }
)(Form)
