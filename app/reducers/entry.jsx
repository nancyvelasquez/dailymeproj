import axios from 'axios'
// import history from '../history'

/*
 * ACTION TYPES
 */
const POST_ENTRY = 'POST_ENTRY'
const ENTER_DATE = 'ENTER_DATE'

/*
 * INITIAL STATE
 */
const defaultEntry = {}

/*
 * ACTION CREATORS
 */
const postEntry = entry => ({ type: POST_ENTRY, entry })
const enterDate = date => ({ type: ENTER_DATE, date })

/**
 * THUNK CREATORS
 */

export const entryPost = (entry, id, date) => dispatch => {
  axios
  .post('/api/entries', { entryLog: entry, userId: id, myDate: date })
  .then(res => res.data)
  .then(foundOrCreatedEntry => {
    dispatch(postEntry(foundOrCreatedEntry))
  })
  .catch(err => console.log(err))
}

export const dateEntry = (date) => dispatch => {
  dispatch(enterDate(date))
}
  
/**
 * REDUCER
 */
export default function(state = defaultEntry, action) {
  switch (action.type) {
    case POST_ENTRY:
      return { ...state, entry: action.entry };
    case ENTER_DATE:
      return { ...state, myDate: action.date };
    default:
      return state
  }
}