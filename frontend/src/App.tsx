import Navbar from "./components/Navbar";
import { QueryClient, QueryClientProvider } from "react-query";
import routes from './routes';
import { RouterProvider } from "react-router-dom";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <div className="App">
                <Navbar />
                <RouterProvider router={routes} />
            </div>
        </QueryClientProvider>
    );
}

export default App;
