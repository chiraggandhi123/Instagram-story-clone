import { AppContext } from "@app/contexts"
import { getInitialState } from "@app/services/getInitialState"
import { useEffect, useReducer } from "react"
import { reducerFn } from "@app/reducers"

function App() {
  const [state, dispatch] = useReducer(reducerFn, getInitialState())
  const globalState = {
    ...state,
    dispatch
  }

  return (
    <AppContext.Provider value={globalState}>
      <div className="App h-auto min-h-screen w-full bg-black">
        <section className="w-full max-w-[900px] mx-auto h-full">
          
        </section>

        
      </div>
    </AppContext.Provider>
  )
}

export default App
