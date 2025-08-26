import React, { Fragment, useLayoutEffect } from "react"
import GlobalStyle from "@theme/GlobalStyle"
import { useLocation } from "react-router-dom"
import Routers from "./router"
import { useSelector } from "react-redux"
import { selectCurrentToken } from "@modules/Auth/authSlice"
import RoutePathPages from "@router/config/RoutePath"

function App() {

  const location = useLocation()

  const token = useSelector(selectCurrentToken);

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <Fragment>
      <GlobalStyle />
        {/* <Routers token={token}/> */}
      <RoutePathPages  />

    </Fragment>
  )
}

export default App
