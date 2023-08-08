import { Routes, Route } from "react-router-dom";
import Landing from "./screens/Landing";
import Login from "./screens/Login";
import Navbar from "./common/components/Navbar";
import Register from "./screens/Register";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ProfesionalPage from "./screens/ProfesionalPage";
import Appointment from "./screens/Appointment";
import { colors } from "@utils/Variables";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "Montserrat",
    },
    palette: {
      primary: {
        main: colors.salmon,
        // light: will be calculated from palette.primary.main,
        dark: colors.salmonDark,
        // contrastText: will be calculated to contrast with palette.primary.main
      },
      secondary: {
        main: "#E0C2FF",
        light: "#F5EBFF",
        // dark: will be calculated from palette.secondary.main,
        contrastText: "#47008F",
      },
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
        <Route path="/user/:userName/:serviceId" element={<Appointment />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
