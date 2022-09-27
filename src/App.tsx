import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/Layout/Layout";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./pages/AppRoutes";

function App() {
  return (
    <Router>
      <Layout>
        <AppRoutes />
      </Layout>
    </Router>
  );
}

export default App;
