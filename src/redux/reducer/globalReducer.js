import ActionType from "./globalActionType"
const globalState = {
    totalOrder: 0
  }
  const rootReducer = (state = globalState, action) => {
    if(action.type === ActionType.ADD_ORDER) {
      return {
        ...state,
        totalOrder: state.totalOrder + 1
      }
    }
    if(action.type === ActionType.MINUS_ORDER) {
      return {
        ...state,
        totalOrder: state.totalOrder - 1
      }
    }
    return state
  }

export default rootReducer;