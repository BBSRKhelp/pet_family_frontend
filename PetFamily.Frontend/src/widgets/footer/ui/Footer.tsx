import { Box, Typography } from "@mui/material";
import { Telegram, GitHub, Phone, Copyright } from "@mui/icons-material";
import { CustomIconButton } from "./components/CustomIconButton";
import { t } from "../../../shared/lib/locales";

const SOCIAL_LINKS = [
  {
    href: "https://t.me/Romashkafff",
    ariaLabel: "Telegram",
    icon: <Telegram fontSize="medium" sx={{ color: "white" }} />,
  },
  {
    href: "https://github.com/BBSRKhelp",
    ariaLabel: "GitHub",
    icon: <GitHub fontSize="medium" sx={{ color: "white" }} />,
  },
  {
    href: "tel:+1234567890",
    ariaLabel: "Phone",
    icon: <Phone fontSize="medium" sx={{ color: "white" }} />,
  },
];

export function Footer() {
  const CURRENT_YEAR = new Date().getFullYear();

  return (
    <footer>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#0f172a",
          display: "flex",
          alignItems: "center",
          px: 4,
          py: 1,
        }}
      >
        <nav
          role="navigation"
          aria-label="Contacts"
          className="grow flex align-middle gap-2"
        >
          {SOCIAL_LINKS.map((button) => (
            <CustomIconButton
              key={button.ariaLabel}
              href={button.href}
              ariaLabel={button.ariaLabel}
            >
              {button.icon}
            </CustomIconButton>
          ))}
        </nav>
        <Typography
          color="white"
          variant="subtitle1"
          component={"div"}
          sx={{ textAlign: "center" }}
        >
          <Copyright fontSize="inherit" sx={{ mr: 0.5 }} />
          <small>
            <time dateTime={String(CURRENT_YEAR)}>
              {`${CURRENT_YEAR} | ${t("footer.author")}`}
            </time>
          </small>
        </Typography>
      </Box>
    </footer>
  );
}
