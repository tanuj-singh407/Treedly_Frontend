import { Routes, Route } from "react-router-dom";
import { UserRoutes } from "./routes/UserRoutes";
import { DashboardRoutes } from "./routes/DashboardRoutes";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="app-container">

      <Routes>

        {UserRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
        {console.log(DashboardRoutes.path, "----------")}
        <Route
          path={DashboardRoutes.path}
          element={DashboardRoutes.element}
        >
          {DashboardRoutes.children.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Route>

      </Routes>

      <ToastContainer position="top-right" autoClose={3000} theme="colored" />

    </div>
  );
}

export default App;