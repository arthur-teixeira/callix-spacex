import { QueryClient, QueryClientProvider } from "react-query";
import routes from './routes';
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";

const queryClient = new QueryClient();

const router = createBrowserRouter(routes);

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <div className="App">
                <RouterProvider router={router} />
            </div>
        </QueryClientProvider>
    );
}

export default App;
