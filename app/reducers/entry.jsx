import axios from 'axios'
// import history from '../history'

/*
 * ACTION TYPES
 */
const POST_ENTRY = 'POST_ENTRY'

/*
 * INITIAL STATE
 */
const defaultEntry = {}

/*
 * ACTION CREATORS
 */
const postEntry = entry => ({ type: POST_ENTRY, entry })

/**
 * THUNK CREATORS
 */

export const entryPost = (entry, id) => dispatch => {
  axios
  .post('/api/entries', { entryLog: entry, userId: id })
  .then(res => dispatch(postEntry(res.data || defaultEntry)))
  .catch(err => console.log(err))
}
  
  /**
/**
 * REDUCER
 */
export default function(state = defaultEntry, action) {
  switch (action.type) {
    case POST_ENTRY:
      return action.entry
    default:
      return state
  }
}