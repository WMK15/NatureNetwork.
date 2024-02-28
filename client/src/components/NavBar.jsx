import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

import Logo from "../assets/logo/logo.png";

const drawerWidth = 240;
const loggedOutSettings = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Leaderboard",
    path: "/leaderboard",
  },
  {
    name: "Feed",
    path: "/feed",
  },
  {
    name: "Sign In",
    path: "/signin",
  },
  {
    name: "Register",
    path: "/register",
  },
];

const loggedInSettings = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Leaderboard",
    path: "/leaderboard",
  },
  {
    name: "Feed",
    path: "/feed",
  },
  {
    name: "Profile",
    path: "/profile",
  },
  {
    name: "Sign Out",
    path: "/signout",
  },
];

function NavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(true);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        NatureNetwork
      </Typography>
      <Divider />
      <List>
        {loggedOutSettings.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              LinkComponent={Link}
              to={item.path}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        position="fixed"
        sx={{ backgroundColor: "#152500" }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>

            <img
              style={{ display: { xs: "none", md: "flex" }, mr: 1 }}
              src={Logo}
              alt="logo"
              width="60px"
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "Poppins, sans-serif",
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              NatureNetwork.
            </Typography>
          </Box>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {!loggedIn
              ? loggedOutSettings.map((item) => (
                  <Button
                    key={item.name}
                    sx={{ color: "#fff", fontFamily: "inherit" }}
                    LinkComponent={Link}
                    to={item.path}
                  >
                    {item.name}
                  </Button>
                ))
              : loggedInSettings.map((item) => (
                  <Button
                    key={item.name}
                    sx={{ color: "#fff", fontFamily: "inherit" }}
                    LinkComponent={Link}
                    to={item.path}
                  >
                    {item.name}
                  </Button>
                ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

NavBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default NavBar;
