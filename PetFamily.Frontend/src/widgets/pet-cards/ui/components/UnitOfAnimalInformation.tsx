import { Box, Typography } from "@mui/material";
import styles from "./UnitOfAnimalInformation.module.css";

type UnitOfAnimalInformationProps = {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
};

export function UnitOfAnimalInformation({
  icon,
  label,
  value,
}: UnitOfAnimalInformationProps) {
  return (
    <Box sx={{ display: "flex", gap: 0.5, alignItems: "center" }}>
      {icon}
      <Typography className={styles.underlined} fontFamily="inherit">
        {label}
      </Typography>
      {value}
    </Box>
  );
}
