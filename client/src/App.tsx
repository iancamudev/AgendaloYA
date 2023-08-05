import { Routes, Route } from "react-router-dom";
import Landing from "./screens/Landing";
import Login from "./screens/Login";
import Navbar from "./common/components/Navbar";
import Register from "./screens/Register";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ProfesionalPage from "./screens/ProfesionalPage";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "Montserrat",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user/:userName" element={<ProfesionalPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
