import { Box, Button, Typography } from "@mui/material";
import { FILTERING_ANIMAL_PARAMS } from "../constants/filteringAnimalParams";
import { AgeSlider } from "./components/AgeSlider";
import { NameAnimal } from "./components/NameAnimal";
import { Checkboxes } from "./components/Checkboxes";
import { CustomAutocomplete } from "./components/CustomAutocomplete";
import { t } from "../../../shared/lib/locales";

export function FilteringAnimalCards() {
  return (
    <Box className="filtering-and-sorting shadow-2xl px-6 pb-5 pt-2 rounded-2xl h-full">
      <Typography
        fontSize="1.5rem"
        sx={{ color: "#152d45", whiteSpace: "nowrap" }}
      >
        {t("main.filters.title")}
      </Typography>
      {FILTERING_ANIMAL_PARAMS.map((params) => {
        if (params.label === "Name") return <NameAnimal />;
        if (params.label === "RangeSlider") return <AgeSlider />;
        if (params.label === "Checkboxes") return <Checkboxes />;
        return (
          <CustomAutocomplete
            key={params.label}
            label={params.label}
            options={params.options}
          />
        );
      })}
      <Button
        variant="contained"
        size="medium"
        sx={{ backgroundColor: "#f77070", width: "100%" }}
      >
        {t("main.filters.apply")}
      </Button>
    </Box>
  );
}
