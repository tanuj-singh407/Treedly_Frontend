import DashboardLayout from "../layouts/DashboardLayout";
import InvoicesPage from "../pages/InvoicesPage";
import ProfilePage from "../pages/ProfilePage";

export const DashboardRoutes = {
  element: <DashboardLayout />,
  children: [
    {
      path: "/invoices",
      element: <InvoicesPage />
    },
    {
      path: "/profile",
      element: <ProfilePage />
    }
  ]
};