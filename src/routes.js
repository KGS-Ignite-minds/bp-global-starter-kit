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
    Component: lazy(() => import("./artist-components/pages/Home")),
    exact: true,
    childs: [],
  },

  {
    path: "/wrapper",
    Component: lazy(() => import("./artist-components/Wrapper")),
    exact: true,
    childs: [
      {
        path: "starter-page",
        Component: lazy(() => import("./artist-components/Starter")),
        exact: true,
        is_index: true,
      },
      {
        path: "form/react-form",
        Component: lazy(() => import("./artist-components/forms/React_form")),
        exact: true,
      },
      {
        path: "form/vue-form",
        Component: lazy(() => import("./artist-components/forms/Vue_form")),
        exact: true,
      },
      {
        path: "form/angular-form",
        Component: lazy(() => import("./artist-components/forms/Angular_form")),
        exact: true,
      },
      {
        path: "form/dotnet-form",
        Component: lazy(() => import("./artist-components/forms/Dotnet_form")),
        exact: true,
      },

      {
        path: "form/java-form",
        Component: lazy(() => import("./artist-components/forms/Java_form")),
        exact: true,
      },
      {
        path: "dashboard",
        Component: lazy(() => import("./artist-components/pages/Dashboard")),
        exact: true,
      },
    ],
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
      {routers.map(({ path, Component, exact, childs }) => (
        <Route
          path={path}
          key={path}
          exact={exact}
          element={
            <Suspense fallback={null}>
              <Component />
            </Suspense>
          }
        >
          {childs.map(({ path, Component, exact, is_index }) => (
            <>
              {!is_index && (
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
              )}
              {is_index && (
                <Route
                  index
                  element={
                    <Suspense fallback={null}>
                      <Component />
                    </Suspense>
                  }
                />
              )}
            </>
          ))}
        </Route>
      ))}
    </Routes>
  );
};

export default Routers;
