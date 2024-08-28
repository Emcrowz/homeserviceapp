import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UserProvider } from "./Components/Context/UserContext";
import router from "./Router/Router";
import { RouterProvider } from "react-router-dom";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </QueryClientProvider>
  );
}

export default App;
