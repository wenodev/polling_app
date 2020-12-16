import React from 'react';
import {
  Route,
  Redirect
} from "react-router-dom";
import Login from '../user/login/Login';



// const PrivateRoute = ({ component: Component, authenticated, ...rest }) => (
//   <Route
//     {...rest}
//     render={props =>
//       authenticated ? (
//         <Component {...rest} {...props} />
//       ) : (
//           <Redirect
//             to={{
//               pathname: '/login',
//               state: { from: props.location }
//             }}
//           />
//         )
//     }
//   />
// );


const PrivateRoute = ({ component, authenticated, ...rest }) => {

  return (
    <Route
      {...rest}
      render={props =>
        authenticated ? (
          // <Component {...rest} {...props} />
          <div>aaa</div>
        ) : (
            // <Redirect
            //   to={{
            //     pathname: '/login',
            //     state: { from: props.location }
            //   }}
            // />
            <Login />
          )
      }
    />

  )

}





export default PrivateRoute
