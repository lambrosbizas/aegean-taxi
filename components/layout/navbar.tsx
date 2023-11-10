import * as React from "react";
import Image from "next/image";
import NextLink from "next/link";

// mui //
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

//
import logo from "public/assets/Aegean-01.png";
import { Phone } from "@mui/icons-material";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  documentWindow?: () => Window;
}

const drawerWidth = 240;
const navItems = [
  { display: "Taxi App", href: "/taxi" },
  { display: "Airport Transfers", href: "/airport-transfers" },
  { display: "Tours", href: "/tours" },
  { display: "About Us", href: "/about-us" },
  { display: "Partners", href: "/partners" },
  { display: "Book Online", href: "/book-online" },
];

export default function DrawerAppBar(props: Props) {
  const { documentWindow } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", marginBottom: "1em" }}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        <Link
          underline="none"
          href="/"
          component={NextLink}
          variant="body1"
          sx={{
            mt: 3,
            lineHeight: 3,
            // borderBottom: `3px solid #000`,
            width: "75px",
          }}
        >
          <Image src={logo} alt="Aegean logo" height={40} />
        </Link>
      </Typography>
      <Divider />

      {navItems.map((item) => (
        <Box key={item.display}>
          <Link
            underline="none"
            href={item.href}
            rel="canonical"
            component={NextLink}
            variant="body1"
            sx={{
              mt: 3,
              lineHeight: 3,
              // borderBottom: `3px solid #000`,
              width: "75px",
            }}
          >
            {item.display}
          </Link>
        </Box>
      ))}
    </Box>
  );

  const container =
    documentWindow !== undefined
      ? () => documentWindow().document.body
      : undefined;

  return (
    <>
      <CssBaseline />
      <AppBar component="nav" sx={{ bgcolor: "#fff" }}>
        <Container disableGutters maxWidth="lg">
          <Toolbar>
            <IconButton
              color="primary"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 1, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Box
              component="div"
              sx={{ flexGrow: 1 }}
              display="flex"
              justifyContent="start"
              alignItems="center"
            >
              <Link
                underline="none"
                href="/"
                component={NextLink}
                variant="body1"
                sx={{
                  mt: 3,
                  lineHeight: 3,
                  // borderBottom: `3px solid #000`,
                  width: "75px",
                }}
              >
                <Image
                  src={logo}
                  alt="Aegean logo"
                  height={30}
                  priority={true}
                />
              </Link>
            </Box>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Button
                  component={NextLink}
                  href={item.href}
                  key={item.display}
                  sx={{ color: "#000", textTransform: "unset" }}
                >
                  {item.display}
                </Button>
              ))}
            </Box>
            <Box sx={{ display: { xs: "none", md: "block" }, pl: 6 }}>
              <Button
                variant="contained"
                color="primary"
                sx={{ textTransform: "unset" }}
                component={Link}
                onClick={(e) => {
                  window.location.href = `mailto:\u0063\u006f\u006e\u0074\u0061\u0063\u0074\u0040\u0061\u0065\u0067\u0065\u0061\u006e\u0074\u0061\u0078\u0069\u002e\u0063\u006f\u006d\u003f\u0073\u0075\u0062\u006a\u0065\u0063\u0074\u003d\u0041\u0065\u0067\u0065\u0061\u006e\u0020\u0043\u006f\u006e\u0074\u0061\u0063\u0074`;
                  e.preventDefault();
                }}
              >
                Contact Us
              </Button>
            </Box>
            <Box sx={{ display: { xs: "block", md: "none" }, pl: 6 }}>
              <Button
                component={Link}
                color="primary"
                sx={{ textTransform: "unset" }}
                startIcon={<Phone />}
                href="tel:00302152154000"
              >
                +30 215 215 4000
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
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
      </Box>
    </>
  );
}
