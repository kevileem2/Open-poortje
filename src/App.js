import React from "react"
import AppMain from "./main/AppMain"
import { GlobalStateProvider } from "./main/useGlobalState"

const App = () => (
  <GlobalStateProvider>
    <AppMain />
  </GlobalStateProvider>
)

export default App
