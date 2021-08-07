// import React, { useContext, useEffect, useState } from "react";
// import { Route, Redirect, Switch } from "react-router-dom";

// function Routes() {
//     return (
//         <div className="App">
//             <Switch>
//                 <Route
//                      path="/"
//                      page_name="login"
//                      privateRoute={true}
//                      exact
//                      component={}
//                 />
//                 <ValidatedRoute
//                      path="/Ranking"
//                      page_name="ranking"
//                      privateRoute={true}
//                      exact
//                      component={}
//                 />
//                 <ValidatedRoute
//                     path="/About"
//                     page_name="about"
//                     privateRoute={true}
//                     exact
//                     component={}
//                 />
            
//             </Switch>
//         </div>
//     );
// }

// function ValidatedRoute({ Component, privateRoute, ...restProps }) {
//     const isValid = true;
//     const [routeHTML, setRouteHTML] = useState("");
//     useEffect(() => {
//         async function CheckRoute() {
//             setRouteHTML(<Login />);
//             switch (isValid) {
//                 case null:
//                 case undefined:
//                     setRouteHTML(<Login />);
//                     break;

//                 case false:
//                     setRouteHTML(<Redirect push to="/login" />);
//                     break;

//                 case true:
//                     if (privateRoute) {
//                         setRouteHTML(
//                             <ValidatedWithPermissionsRoute
//                                 component={Component}
//                                 {...restProps}
//                             ></ValidatedWithPermissionsRoute>
//                         );
//                     } else {
//                         setRouteHTML(
//                             <Route
//                                 {...restProps}
//                                 render={(props) => (
//                                     <div className="pageManager">
//                                         <Sidebar {...props}/>
//                                          <Component {...props} />
//                                     </div>
//                                 )}
//                             ></Route>
//                         );
//                     }
//                     break;
//                 default:
//                     setRouteHTML(<Login />);
//                     break;
//             }
//         }

//         CheckRoute();
//     }, [isValid]);
//     return routeHTML;
// }

// function ValidatedWithPermissionsRoute({ component: Component, page_name, page_group, ...restProps }) {
//     const permissions = true;
//     const [routeHTML, setRouteHTML] = useState("");

//     useEffect(() => {
//         async function CheckPermissions() {
//             switch (permissions) {
//                 case null:
//                 case undefined:
//                     setRouteHTML(<Login />);
//                     break;

//                 default:
//                     setRouteHTML(
//                         <Route
//                             {...restProps}
//                             render={(props) => (
//                                 <>
//                                  <div className="pageManager">
//                                         <Sidebar permissionsLevel={permissions} {...restProps}/>
//                                         <Component page_name={page_name} page_group={page_group} {...restProps} />
//                                 </div>
//                                 </>
//                             )}
//                         ></Route>
//                     );
//                     break;
//             }
//         }

//         CheckPermissions();
//     }, [permissions]);

//     return routeHTML;
// }

// export default Routes;