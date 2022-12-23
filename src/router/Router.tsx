import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Layout } from "../layout";
import { routes } from "./config";

export const RouterModule = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {routes.map((props, index) => (
            <Route key={index} {...props} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
