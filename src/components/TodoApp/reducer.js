import { ADD_JOB, DELETE_JOB, SET_JOB } from './constant'

export const initState = {
  job: '',
  jobs: []
}

const reducer = (state, action) => {

  let newSate

  switch(action.type) {
    case SET_JOB: {
      newSate = {
        ...state,
        job: action.payload
      }
      break
    }

    case ADD_JOB: {
      newSate = {
        ...state,
        jobs: [...state.jobs, action.payload]
      }
      break
    }

    case DELETE_JOB: {

      let newArr = [...state.jobs]

      newArr.splice(action.payload,1)
      
      newSate = {
        ...state,
        jobs: [...newArr]
      }
      break
    }

    default :
      throw new Error("invalid action")
  }

  return newSate
}

export default reducer