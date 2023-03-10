import { RouteObject } from "react-router-dom";
import Redirect from "./components/Redirect";
import NextLaunch from "./pages/NextLaunch";
import PastLaunches from "./pages/PastLaunches";
import PreviousLaunch from "./pages/PreviousLaunch";
import UpcomingLaunches from "./pages/UpcomingLaunches";

const routes: RouteObject[] = [
    {
        path: 'past',
        element: <PastLaunches />,
    }, {
        path: 'upcoming',
        element: <UpcomingLaunches />,
    }, {
        path: 'previous',
        element: <PreviousLaunch />,
    }, {
        path: 'next',
        element: <NextLaunch />,
    }, {
        path: '/',
        element: <Redirect to='next' />,
    }
];

export default routes;

