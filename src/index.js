import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import NavBar from "./components/user/NavBar";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import EmailVerification from "./components/auth/EmailVerification";
import ForgetPassword from "./components/auth/ForgetPassword";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import ConfirmPassword from "./components/auth/ConfirmPassword";
import { ThemeProvider } from "./components/context/ThemeProvider";
const App = () => {
  return (
    <ThemeProvider>
      <div className="h-screen bg-primary ">
        <NavBar />
        <div className="w-full h-[calc(100%-76px)] flex justify-center items-center">
          <Outlet />
        </div>
      </div>
    </ThemeProvider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <SignIn />,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/forget-password",
        element: <ForgetPassword />,
      },
      {
        path: "/verification",
        element: <EmailVerification />,
      },
      {
        path: "/confirm-password",
        element: <ConfirmPassword />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
