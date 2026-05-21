import "./App.css";
import { Routes, BrowserRouter, Route, Navigate } from "react-router-dom";
import { Suspense } from "react";
import { routers } from "./router";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  function PrivateRoute({ children }) {
    const token = localStorage.getItem("token")
      ? localStorage.getItem("token")
      : "";

    return token ? <>{children}</> : <Navigate to="/auth" />;
  }
  return (
    <>
      <Suspense>
        <BrowserRouter>
          <Routes>
            {routers.map((item) => (
              <Route
                path={item.path}
                element={
                  item.auth ? (
                    <PrivateRoute>{item.element}</PrivateRoute>
                  ) : (
                    item.element
                  )
                }
              ></Route>
            ))}
          </Routes>
          <ToastContainer />
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
