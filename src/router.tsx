import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import GeneralLayout from "./layout/GeneralLayout";
import ScrollToTop from "./components/common/ScrollToTop";
import ErrorPage from "./pages/404";

interface RouterBase {
  path: string;
  element: React.ReactNode;
}

const routerData: RouterBase[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/detail/:id",
    element: <Detail />,
  },
];

export const routers = createBrowserRouter(
  routerData.map((router) => {
    return {
      path: router.path,
      element: (
        <GeneralLayout>
          <ScrollToTop />
          {router.element}
        </GeneralLayout>
      ),
      errorElement: <ErrorPage />,
    };
  })
);
