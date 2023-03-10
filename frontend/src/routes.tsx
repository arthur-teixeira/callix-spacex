import { RouteObject } from "react-router-dom";
import NextLaunch from "./pages/NextLaunch";
import PreviousLaunch from "./pages/PreviousLaunch";

const routes: RouteObject[] = [
    {
        path: 'previous',
        element: <PreviousLaunch />,
    },
    {
        path: 'next',
        element: <NextLaunch />,
    }
];

export default routes;

