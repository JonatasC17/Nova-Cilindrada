import GlobalStyle from "./styles/global";
import { AuthProvider } from "./contexts/auth/authProvider";
import ApplicationRoutes from "./routes/ApplicationRoutes";

const App = () => {
  return (
    <AuthProvider>
      <ApplicationRoutes />
      <GlobalStyle />
    </AuthProvider>
  );
};

export default App;
