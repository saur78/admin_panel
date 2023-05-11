// import { Route, Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   const isLoggedIn = useSelector((state) => state.login.isLoggedIn);

//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         isLoggedIn ? (<Component {...props} />) : (
//             <Navigate to="/" replace />
//           )
//       }
//     />
//   );
// };

// export default PrivateRoute;




import { Navigate } from "react-router-dom";
function PrivateRoute({ children }) {
  const token = JSON.parse(localStorage.getItem("token"));
  if (!token) return <Navigate to="/login" />;
  return children;
}
export default PrivateRoute;
