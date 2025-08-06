import { Box, TextField } from "@mui/material";
import { t } from "../../../../shared/lib/locales";

export function NameAnimal() {
  return (
    <Box display="flex" flexDirection="column" mb={1}>
      <div className="label text-gray-500 mb-1">{t("main.filters.name")}</div>
      <TextField
        size="small"
        id="outlined-basic"
        variant="outlined"
        sx={{
          width: "100%",
          "& .MuiOutlinedInput-root": {
            color: "grey",
            height: "2rem",
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#f77070",
            },
          },
        }}
      />
    </Box>
  );
}
