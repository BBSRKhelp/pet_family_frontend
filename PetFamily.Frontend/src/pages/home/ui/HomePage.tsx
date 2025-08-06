import { Box } from "@mui/material";
import { TabPanel } from "../../../widgets/home-panel-tabs/ui/components/TabPanel";
import { TabsPanel } from "../../../widgets/home-panel-tabs/ui/TabsPanel";
import { useTabs } from "../../../shared/models/hooks/useTabs";
import { TABS_CONTENT } from "./components/TabsContent";

export function HomePage() {
  const { tab, handleTabChange } = useTabs();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "84vh",
        overflow: "auto",
      }}
    >
      <TabsPanel tab={tab} handleTabChange={handleTabChange} />
      <Box sx={{ overflowY: "auto", flex: 1 }}>
        {TABS_CONTENT.map((content, index) => (
          <TabPanel key={index} value={tab} index={index}>
            {content.value}
          </TabPanel>
        ))}
      </Box>
    </Box>
  );
}
