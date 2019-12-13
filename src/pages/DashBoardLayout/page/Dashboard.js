import React from 'react'
import { BrowserRouter as Router, Redirect, Switch, Route, Link, NavLink, withRouter } from "react-router-dom";
import * as combine from "../../../utils/config";
import screen from "./childrenRouter";

const DashBoard = props => {
  console.log("props", props)
  return (
    <div>
      <div className="flex shadow-md">
        <div className="w-300 bg-gray-300 p-3">
          EBGC
        </div>
        <div className="p-3">
          NAV_BAR
        </div>
      </div>
      <div>
      <>
      <div className="flex">
        <Link className="bg-gray-500 p-3" to="/"> Home </Link>
        <Link className="bg-red-300 ml-5 p-3" to="/setting"> Setting</Link>
        <button onClick={props.logout}>
          Logout
        </button>
      </div>
       
        <Switch>
          {combine.combineRouter(screen).map((route, index) => (
            <Route key={route.path} path={route.path} exact={route.exact} component={route.main} />
          ))}
        </Switch>
      </>
      </div>
    </div>
  )
}

export default DashBoard