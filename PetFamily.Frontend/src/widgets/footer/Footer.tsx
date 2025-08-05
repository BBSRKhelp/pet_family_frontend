import { Box, IconButton, Typography } from "@mui/material";
import { Telegram, GitHub, Phone, Copyright } from "@mui/icons-material";

type IconButtonProps = {
  href: string;
  ariaLabel: string;
  children: React.ReactNode;
};

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

function CustomIconButton({ href, ariaLabel, children }: IconButtonProps) {
  return (
    <IconButton
      component="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
    >
      {children}
    </IconButton>
  );
}

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
              {`${CURRENT_YEAR} | Роман Капитанов`}
            </time>
          </small>
        </Typography>
      </Box>
    </footer>
  );
}
