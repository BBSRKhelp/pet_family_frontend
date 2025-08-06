import { createBrowserRouter } from "react-router";
import { RootLayout } from "../layout/RootLayout";
import { HomePage } from "../../pages/home/ui/HomePage";
import { LoginPage } from "../../pages/login/LoginPage";
import { Registration } from "../../pages/registration/RegistrationPage";
import { Volunteers } from "../../pages/volunteer/VolunteersPage";
import { Profile } from "../../pages/profile/ProfilePage";

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
