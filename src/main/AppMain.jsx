import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import * as ROUTES from "./constants/routes"
import Navigation from "./shared/navigation"
import Monster from "./screens/monster"
import Home from "./screens/home"
import Leefgroep from "./screens/leefgroep"

const AppMain = () => {
  return (
    <Router>
      <Navigation />
      <Route exact path="/" component={Home} />
      <Route path={ROUTES.HOME} component={Home} />
      <Route path={ROUTES.ZORGEN} component={Monster} />
      <Route path={ROUTES.LEEFGROEP} component={Leefgroep} />
    </Router>
  )
}

export default AppMain
