import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import {
  VaccinesOutlined,
  ContentCutOutlined,
  RealEstateAgentOutlined,
  StarOutline,
} from "@mui/icons-material";
import petImage from "../image/9ead29f7ebb448d64cd47e567738b77a_photo.jpg";
import { t } from "../../../shared/lib/locales";
import { UnitOfAnimalInformation } from "./components/UnitOfAnimalInformation";
import { getStatusIcon } from "../lib/getStatusIcon";

type PetCardProps = {
  photo?: string;
  name: string;
  age: string;
  isVaccinated: boolean;
  isCastrated: boolean;
  status: string;
};

export function PetCard({
  photo = petImage,
  name,
  age,
  isVaccinated,
  isCastrated,
  status,
}: PetCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <Box className="shadow-2xl rounded-2xl">
      <Box
        component="img"
        sx={{
          height: "250px",
          width: "100%",
          display: "block",
          objectFit: "cover",
          borderRadius: "8px 8px 0 0",
        }}
        alt={name}
        src={imgError ? "/placeholder.jpg" : photo}
        onError={() => setImgError(true)}
      />

      <Box sx={{ p: 2 }}>
        <Box
          sx={{ display: "inline-flex", gap: 1, mb: 1, alignItems: "center" }}
        >
          <Typography variant="h6" fontWeight={600} fontFamily="inherit">
            {name},
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ color: "grey" }}
            fontFamily="inherit"
          >
            {age}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5, mb: 3 }}>
          <UnitOfAnimalInformation
            icon={<VaccinesOutlined fontSize="small" />}
            label={t("main.animalCard.isVaccination")}
            value={getStatusIcon(isVaccinated)}
          />
          <UnitOfAnimalInformation
            icon={<ContentCutOutlined fontSize="small" />}
            label={t("main.animalCard.isSterilization")}
            value={getStatusIcon(isCastrated)}
          />
          <UnitOfAnimalInformation
            icon={<RealEstateAgentOutlined fontSize="small" />}
            label={t("main.animalCard.status")}
            value={status}
          />
        </Box>

        <Box sx={{ display: "flex", gap: 1 }}>
          <Button
            variant="contained"
            size="medium"
            sx={{ backgroundColor: "#f77070", width: "100%" }}
          >
            {t("main.animalCard.moreDetailed")}
          </Button>
          <Button
            variant="contained"
            size="small"
            sx={{ backgroundColor: "#f77070", minWidth: "10%" }}
          >
            <StarOutline />
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
