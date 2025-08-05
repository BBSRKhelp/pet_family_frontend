import { Box, Slider } from "@mui/material";
import { useAgeFilter } from "../../model/useFilteringAnimalCards";
import { t } from "../../../../shared/lib/locales";

export function AgeSlider() {
  const { ageRange, handleAgeChange } = useAgeFilter();

  return (
    <Box className="age-slider" display="flex" flexDirection="column">
      <div className="label text-gray-500 mb-9">{t("main.filters.age")}</div>
      <Slider
        sx={{
          color: "#f77070",
          "& .MuiSlider-valueLabel": {
            backgroundColor: "#f77070",
            color: "#fff",
          },
        }}
        min={1}
        max={30}
        getAriaLabel={() => "Age animal"}
        value={ageRange}
        onChange={handleAgeChange}
        valueLabelDisplay="on"
        getAriaValueText={() => `${ageRange} age`}
      />
      {/* <div className="description text-gray-500 mb-1 text-sm">
        округляется до годов
      </div> */}
    </Box>
  );
}
