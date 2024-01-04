import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const routers = [
  // {
  //   path: "*",
  //   Component: lazy(() => import("./components/Nomatch")),
  //   exact: true,
  // },
  {
    path: "/",
    Component: lazy(() => import("./components/pages/Home")),
    exact: true,
  },

  {
    path: "/starter-page",
    Component: lazy(() => import("./components/Starter")),
    exact: true,
  },

  // {
  //   path: "/product",
  //   Component: lazy(() => import("./components/Product")),
  //   exact: true,
  // }
  
];
const Routers = () => {
  return (
    <Routes>
      {routers.map(({ path, Component, exact }) => (
        <Route
          path={path}
          key={path}
          exact={exact}
          element={
            <Suspense fallback={null}>
              <Component />
            </Suspense>
          }
        />
      ))}
    </Routes>
  );
};

export default Routers;
