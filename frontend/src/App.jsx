import { Routes, Route, Outlet } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import { TaskProvider } from "./context/TaskContext";

import Navbar from "./components/navbar/Navbar";
import { Container } from "./components/ui";
import { ProtectedRoute } from "./components/ProtectedRoute";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import RegisterPage from "./pages/RegisterPage";
import TaskFormPage from "./pages/TaskFormPage";
import TaskPage from "./pages/TaskPage";
import NotFound from "./pages/NotFound";
import GridPage from "./pages/GridPage";
import ChartPage from "./pages/ChartPage";
import TablePage from "./pages/TablePage";
import TablePage2 from "./pages/TablePage2";
//import DataPage from "./pages/DataPage";
//import { Table } from "@mui/material";

function App() {
  const { isAuth, loading } = useAuth();

  if (loading) return <h1>Cargando ... </h1>;

  return (
    <>
      <Navbar />
      <Container className="py-5">
        <Routes>
          <Route
            element={<ProtectedRoute isAllowed={!isAuth} redirectTo="/tasks" />}
          >
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>

          <Route
            element={<ProtectedRoute isAllowed={isAuth} redirectTo="/login" />}
          >
            <Route
              element={
                <TaskProvider>
                  <Outlet />
                </TaskProvider>
              }
            >
              <Route path="/tasks" element={<TaskPage />} />
              <Route path="/tasks/new" element={<TaskFormPage />} />
              <Route path="/tasks/:id/edit" element={<TaskFormPage />} />
            </Route>

            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/grid" element={<GridPage />} />
            <Route path="/chart" element={<ChartPage />} />
            <Route path="/table" element={<TablePage />} />
            {/* <Route path="/table2" element={<TablePage2 />} /> */}
            {/* <Route path="/data" element={<DataPage />} /> */}
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
