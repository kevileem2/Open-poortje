import React, { createContext, useReducer, useContext } from "react"

const SET_CHILD = "SET_CHILD"

const GlobalStateContext = createContext()

const initialState = {
  child: {
    childId: null,
    name: null
  }
}

const globalStateReducer = (state, action) => {
  switch (action.type) {
    case SET_CHILD:
      return {
        ...state,
        child: {
          ...action.payload
        }
      }
    default:
      return state
  }
}

export const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalStateReducer, initialState)
  return (
    <GlobalStateContext.Provider value={[state, dispatch]}>
      {children}
    </GlobalStateContext.Provider>
  )
}

const useGlobalState = () => {
  const [state, dispatch] = useContext(GlobalStateContext)
  const setChild = ({ name, childId }) => {
    dispatch({
      type: SET_CHILD,
      payload: {
        name,
        childId
      }
    })
  }
  return {
    setChild,
    child: {
      ...state.child
    }
  }
}

export default useGlobalState
