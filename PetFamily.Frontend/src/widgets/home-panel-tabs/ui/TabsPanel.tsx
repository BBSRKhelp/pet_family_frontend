import { AppBar, Box, Tab, Tabs } from "@mui/material";
import { Favorite, Home, VolunteerActivism } from "@mui/icons-material";
import { t } from "../../../shared/lib/locales";

const TABS = [
  {
    label: t("main.navPanel.home"),
    icon: <Home />,
  },
  {
    label: t("main.navPanel.volunteers"),
    icon: <Favorite />,
  },
  {
    label: t("main.navPanel.helpAnimals"),
    icon: <VolunteerActivism />,
  },
];

type TabsPanelProps = {
  tab: number;
  handleTabChange: (_: React.SyntheticEvent, newTub: number) => void;
};

export function TabsPanel(props: TabsPanelProps) {
  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 1,
      }}
    >
      <AppBar
        position="static"
        sx={{ bgcolor: "white", borderRadius: "10px 10px 0 0" }}
      >
        <Tabs
          value={props.tab}
          onChange={props.handleTabChange}
          sx={{ "& .MuiTabs-indicator": { bgcolor: "#f77070" } }}
          variant="fullWidth"
        >
          {TABS.map((tab) => (
            <Tab
              key={tab.label}
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: 1,
                alignItems: "center",
                "& svg": { color: "gray" },
                "&.Mui-selected": {
                  color: "#f77070",
                  "& svg": { color: "#f77070" },
                },
              }}
              label={
                <>
                  {tab.icon}
                  <span style={{ fontSize: "1.125rem" }}>{tab.label}</span>
                </>
              }
            />
          ))}
        </Tabs>
      </AppBar>
    </Box>
  );
}
