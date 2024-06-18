import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
// const router = createBrowserRouter([
//   {
//     path: process.env.REACT_APP_HOMEPAGE_URL,
//     element: <App />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: process.env.REACT_APP_HOMEPAGE_URL + "/signin",
//     element: <Signin />,
//   },
//   {
//     path: process.env.REACT_APP_HOMEPAGE_URL + "/signup",
//     element: <Signup />,
//   },
//   {
//     path: process.env.REACT_APP_HOMEPAGE_URL + "/userInfo",
//     element: <UserInfo />,
//   },
//   {
//     path: "*",
//     element: <ErrorPage />,
//   },
// ]);
// const router = createBrowserRouter(
//   createRoutesFromElements(
//       <React.Fragment>
//         <Route path={process.env.REACT_APP_HOMEPAGE_URL} element={<App />} />
//         <Route
//           path={process.env.REACT_APP_HOMEPAGE_URL + "/signup"}
//           element={<Signup />}
//         />
//         <Route
//           path={process.env.REACT_APP_HOMEPAGE_URL + "/signin"}
//           element={<Signin />}
//         />
//         <Route
//           path={process.env.REACT_APP_HOMEPAGE_URL + "/userInfo"}
//           element={<UserInfo />}
//         />
//         <Route path={"*"} element={<ErrorPage />} />
//       </React.Fragment>
//   )
// );
// root.render(
//   <React.StrictMode>
//     {/* <RouterProvider router={router} /> */}
//     <App />
//   </React.StrictMode>
// );
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
