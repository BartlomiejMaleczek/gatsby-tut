// import "./src/styles/global.css";
import "./src/styles/global.css"


export function onRouteUpdate({ location, prevLocation }) {
    console.log("new pathname", location.pathname)
    console.log("old pathname", prevLocation ? prevLocation.pathname : null)
  }

// or:

// or:
// require('./src/styles/global.css')