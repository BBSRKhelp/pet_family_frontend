import * as React from "react";
import { Home, Favorite, VolunteerActivism } from "@mui/icons-material";
import { useTheme, AppBar, Tabs, Tab, Box } from "@mui/material";

type TabPanelProps = {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
};

const TAB_ITEMS = [
  { label: "Главная", icon: <Home />, content: "Главная" },
  { label: "Волонтеры", icon: <Favorite />, content: "Item Two" },
  {
    label: "Помочь животным",
    icon: <VolunteerActivism />,
    content: "Item Three",
  },
];

function TabPanel({ children, value, index, dir }: TabPanelProps) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      dir={dir}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function generateTabProps(index: number) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}

export function HomePage() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>
      <AppBar
        position="static"
        sx={{ bgcolor: "white", color: "black", borderRadius: "10px 10px 0 0" }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          sx={{ "& .MuiTabs-indicator": { bgcolor: "#f77070" } }}
          variant="fullWidth"
        >
          {TAB_ITEMS.map((tab, index) => (
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
              {...generateTabProps(index)}
            />
          ))}
        </Tabs>
      </AppBar>

      {TAB_ITEMS.map((tab, index) => (
        <TabPanel
          key={tab.label}
          value={value}
          index={index}
          dir={theme.direction}
        >
          {tab.content}
        </TabPanel>
      ))}
    </Box>
  );
}
