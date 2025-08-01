import { createBrowserRouter } from "react-router";
import { RootLayout } from "../layout/RootLayout";
import { HomePage } from "../../pages/home-page/HomePage";
import { LoginPage } from "../../pages/login-page/LoginPage";
import { Registration } from "../../pages/registration-page/RegistrationPage";
import { Volunteers } from "../../pages/VolunteersPage";
import { Profile } from "../../pages/ProfilePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/volunteers",
        element: <Volunteers />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
    errorElement: <div>Упс, что то пошло не так</div>,
  },
]);
