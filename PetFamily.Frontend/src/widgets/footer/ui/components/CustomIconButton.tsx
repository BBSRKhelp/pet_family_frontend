import { IconButton } from "@mui/material";

type IconButtonProps = {
  href: string;
  ariaLabel: string;
  children: React.ReactNode;
};

export function CustomIconButton({
  href,
  ariaLabel,
  children,
}: IconButtonProps) {
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
