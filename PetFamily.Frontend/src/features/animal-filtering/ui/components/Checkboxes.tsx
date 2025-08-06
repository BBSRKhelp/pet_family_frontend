import { Box, Checkbox } from "@mui/material";
import { t } from "../../../../shared/lib/locales";

export function Checkboxes() {
  return (
    <>
      <Box display="flex" alignItems="center" mb={1}>
        <div className="label text-gray-500 mb-1 grow">
          {t("main.filters.sterilization")}
        </div>
        <Checkbox
          sx={{
            color: "#f77070",
            p: 0,
            "&.Mui-checked": {
              color: "#f77070",
            },
          }}
        />
      </Box>
      <Box display="flex" alignItems="center" mb={1}>
        <div className="label text-gray-500 mb-1 grow">
          {t("main.filters.vaccinations")}
        </div>
        <Checkbox
          sx={{
            color: "#f77070",
            p: 0,
            "&.Mui-checked": {
              color: "#f77070",
            },
          }}
        />
      </Box>
    </>
  );
}
