import { RouteObject } from "react-router-dom";
import NavBar from "./components/Navbar";
import NextLaunch from "./pages/NextLaunch";

const routes: RouteObject[] = [
    {
        path: 'next',
        element: <NextLaunch />,
    }
];

export default routes;

