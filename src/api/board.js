import axios from 'axios'

const httpRequest = new axios.create({
  baseURL: 'https://sugoku.herokuapp.com/'
})
export const fetchBoardList = async (payload) => {
  try {
    console.info(payload, '<<< payload')
    const result = await httpRequest.get('/board', {params: {difficulty: payload}})
    return result;

  } catch (error) {
    throw error
  }
}
export const fetchBoardGrade = async (payload) => {
  try {
    const result = await httpRequest.post('/grade', payload, {header: {'Content-Type': 'application/x-www-form-urlencoded'}})
    return result;

  } catch (error) {
    throw error
  }
}

export const fetchBoardValidate = async (payload) => {
  try { 
    const result = await httpRequest.post('/validate', payload, {header: {'Content-Type': 'application/x-www-form-urlencoded'}})
    return result;
  } catch (error) {
    throw error
  }
}

export const fetchBoardSolve = async (payload) => {
  try { 
    const result = await httpRequest.post('/solve', payload, {header: {'Content-Type': 'application/x-www-form-urlencoded'}})
    return result;
  } catch (error) {
    throw error
  }
}