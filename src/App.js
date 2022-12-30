import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import { AuthProvider } from './context/AuthContext';
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Header />
        <Outlet />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
