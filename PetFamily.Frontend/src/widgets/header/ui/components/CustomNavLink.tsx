import { NavLink } from "react-router";

type NavLinkProps = {
  to: string;
  ariaLabel: string;
  children: React.ReactNode;
};

export function CustomNavLink({ to, ariaLabel, children }: NavLinkProps) {
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
