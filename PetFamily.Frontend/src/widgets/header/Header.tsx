import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import PetsOutlinedIcon from "@mui/icons-material/PetsOutlined";
import { NavLink } from "react-router";
import {
  FavoriteBorderOutlined,
  AccountCircleOutlined,
  LogoutOutlined,
} from "@mui/icons-material";

type NavLinkProps = {
  to: string;
  ariaLabel: string;
  children: React.ReactNode;
};

function CustomNavLink({ to, ariaLabel, children }: NavLinkProps) {
  return (
    <NavLink
      to={to}
      className="w-16 h-12 flex justify-center items-center"
      aria-label={ariaLabel}
    >
      {children}
    </NavLink>
  );
}

const NAV_LINKS = [
  {
    to: "/favorites",
    ariaLabel: "Favorites",
    icon: <FavoriteBorderOutlined fontSize="large" />,
  },
  {
    to: "/profile",
    ariaLabel: "Profile",
    icon: <AccountCircleOutlined fontSize="large" />,
  },
  {
    to: "/login", //TODO logout
    ariaLabel: "Login",
    icon: <LogoutOutlined fontSize="large" />,
  },
];

export function Header() {
  return (
    <AppBar position="static" sx={{ bgcolor: "#f77070" }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <NavLink
            to="/"
            className="w-16 h-12 flex items-center justify-center"
            aria-label="Main page"
          >
            <PetsOutlinedIcon fontSize="large" />
          </NavLink>
        </Box>
        <Typography
          variant="h4"
          fontWeight={500}
          component="div"
          sx={{
            flexGrow: 1,
            textAlign: "center",
            position: "absolute",
            left: 0,
            right: 0,
            pointerEvents: "none",
          }}
        >
          Pet Family
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", zIndex: 1 }}>
          {NAV_LINKS.map((link) => (
            <CustomNavLink
              key={link.to}
              to={link.to}
              ariaLabel={link.ariaLabel}
            >
              {link.icon}
            </CustomNavLink>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
