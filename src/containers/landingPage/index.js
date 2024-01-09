import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import "./index.scss";

const pages = ["About Us", "Who We Are", "Contact Us"];

export default function LandingPage() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (e) => {
    console.log(e.target.value);
    setAnchorElNav(null);
  };

  return (
    <AppBar elevation={0} className="header-bar">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            className="landing-comp"
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            KPMG
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            className="landing-comp-minimize"
            href=""
            sx={{
              display: { xs: "flex", md: "none" },
            }}
          >
            KPMG
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                href={`#${page}`}
                sx={{ mr: 3, color: "white", display: "block" }}
                className="landing-comp-value"
              >
                {page}
              </Button>
            ))}
            <Button
              variant="contained"
              className="landing-comp-value landing-comp-sso"
            >
              SSO Login
            </Button>
            <Button
              variant="contained"
              className="landing-comp-value landing-comp-password"
            >
              Password Less
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
