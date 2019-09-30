import axios from 'axios'

export const FETCHING_SMURFS_START = 'FETCHING_SMURFS_START'
export const FETCHING_SMURFS_SUCCESS = 'FETCHING_SMURFS_SUCCESS'
export const FETCHING_SMURFS_FAILURE = 'FETCHING_SMURFS_FAILURE'

export const ADDING_SMURF_START = 'ADDING_SMURF_SUCCESS'
export const ADDING_SMURF_SUCCESS = 'ADDING_SMURF_SUCCESS'
export const ADDING_SMURF_FAILURE = 'ADDING_SMURF_FAILURE'

// fetching data with .get
export const fetchSmurfs = () => dispatch => {
  dispatch({ type: FETCHING_SMURFS_START })
  axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      console.log(res)
      dispatch({
        type: FETCHING_SMURFS_SUCCESS,
        payload: res
      })
    })
    .catch(err => console.log(err))
}

// add data with .post
export const addSmurf = smurf => dispatch => {
  axios
    .post('http://localhost:3333/smurfs', {
      name: smurf.name,
      age: smurf.age,
      height: smurf.height
    })
    .then(res => {
      console.log(res)
      dispatch({
        type: ADDING_SMURF_SUCCESS,
        payload: res
      })
    })
    .catch(err => console.log(err))
}
