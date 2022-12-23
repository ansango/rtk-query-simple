import { lazy, Suspense } from "react";
import { RouteProps } from "react-router-dom";

const Module = lazy(() => import("./Module"));

const ModuleLazy = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Module />
  </Suspense>
);

const path = "/security*";

export const configSecurity: RouteProps = {
  path,
  element: <ModuleLazy />,
};
