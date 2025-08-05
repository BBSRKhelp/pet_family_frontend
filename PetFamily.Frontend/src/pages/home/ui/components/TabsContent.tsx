import { Box, Pagination } from "@mui/material";
import { FilteringAnimalCards } from "../../../../features/animal-filtering/ui/FilteringAnimalCards";
import { PetCard } from "../../../../widgets/pet-cards/ui/PetCard";
import { PETS } from "../../../../shared/constants/petConstants";

export const TABS_CONTENT = [
  {
    value: (
      <Box sx={{ display: "flex", flexDirection: "column", gap: 5 }}>
        <Box sx={{ display: "flex", gap: 1 }}>
          <FilteringAnimalCards />

          <Box
            sx={{
              display: "flex",
              height: "full",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 3,
            }}
          >
            {PETS.map((pet, i) => (
              <PetCard /*используется заглушка*/
                key={i}
                name={pet.name}
                age={pet.age}
                isVaccinated={pet.isVaccinated}
                isCastrated={pet.IsCastrated}
                status={pet.status}
              />
            ))}
          </Box>
        </Box>
        <Pagination
          count={10}
          sx={{
            display: "flex",
            justifyContent: "center",
            "& .MuiPaginationItem-root": {
              color: "#f77070",
            },
            "& .MuiPaginationItem-root.Mui-selected": {
              backgroundColor: "#f77070",
              color: "white",
              "&:hover": {
                backgroundColor: "#e05555",
              },
            },
            "& .MuiPaginationItem-root:hover": {
              backgroundColor: "rgba(247, 112, 112, 0.1)",
            },
          }}
        />
      </Box>
    ),
  },
  {
    value: "Item Two",
  },
  {
    value: "Item Three",
  },
];
