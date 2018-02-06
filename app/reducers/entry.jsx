import axios from 'axios'
// import history from '../history'

/*
 * ACTION TYPES
 */
const POST_ENTRY = 'POST_ENTRY'
const ENTER_DATE = 'ENTER_DATE'
const GET_ENTRY = 'GET_ENTRY'

/*
 * INITIAL STATE
 */
const defaultEntry = {}

/*
 * ACTION CREATORS
 */
const postEntry = entry => ({ type: POST_ENTRY, entry })
const enterDate = date => ({ type: ENTER_DATE, date })
const getEntry = entry => ({ type: GET_ENTRY, entry })

/*
 * THUNK CREATORS
 */

export const entryPost = (entry, userId, date) => dispatch => {
  axios
    .post('/api/entries', { entryLog: entry, userId: userId, myDate: date })
    .then(res => res.data)
    .then(foundOrCreatedEntry => {
      dispatch(postEntry(foundOrCreatedEntry))
    })
    .catch(err => console.log(err))
}

export const dateEntry = (date) => dispatch => {
  dispatch(enterDate(date))
}

export const getSavedEntry = (date, userId) => dispatch => {
  axios.get(`/api/entries/${userId}/date/${date}`)
  .then(res => res.data)
  .then(foundEntry => {
    dispatch(getEntry(foundEntry))
  }) 
  .catch(err => console.log(err))
}

/**
 * REDUCER
 */
export default function (state = defaultEntry, action) {
  switch (action.type) {
    case POST_ENTRY:
      return { ...state, entry: action.entry }
    case ENTER_DATE:
      return { ...state, myDate: action.date }
    case GET_ENTRY: 
      return action.entry
    default:
      return state
  }
}