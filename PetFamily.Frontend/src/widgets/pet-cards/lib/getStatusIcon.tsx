import { Cancel, CheckCircle } from "@mui/icons-material";

export const getStatusIcon = (condition: boolean) =>
  condition ? (
    <CheckCircle fontSize="small" color="success" sx={{ alignSelf: "end" }} />
  ) : (
    <Cancel fontSize="small" color="error" sx={{ alignSelf: "end" }} />
  );
