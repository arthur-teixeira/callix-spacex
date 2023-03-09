import { createBrowserRouter } from "react-router-dom";
import NextLaunch from "./pages/NextLaunch";

const routes = [
    {
        path: 'next',
        element: <NextLaunch />,
    }
];

export default createBrowserRouter(routes);

