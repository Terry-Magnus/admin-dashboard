import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home";
import AppLayout from "./layout/app-layout";
import NotFound from "./pages/404-page";
import { ThemeProvider } from "@mui/material";
import theme from "./utils/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/*" element={<NotFound />} />
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<Home />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
