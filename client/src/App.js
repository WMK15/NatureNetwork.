import { Outlet } from "react-router-dom";
import { Box, Container, CssBaseline } from "@mui/material";

import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="body">
      <CssBaseline />
      <NavBar />
      <Box component={"main"} className="main" sx={{ mt: 9 }}>
        <Outlet />
      </Box>
    </div>
  );
}

export default App;
