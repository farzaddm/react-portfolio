import {
  ConnectWithoutContactRounded,
  FaceRounded,
  HomeRounded,
  TerminalRounded,
} from "@mui/icons-material";


const tabParams = (index) => {
  return {
    id: `sidebar-tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  }
}

export const tabsData = () => {
  return [
    {label: "خانه", icon: <HomeRounded/>, ...tabParams(0)},
    {label: "درباره من", icon: <FaceRounded/>, ...tabParams(1)},
    {label: "نمونه کارها", icon: <TerminalRounded/>, ...tabParams(3)},
    {label: "ارتباط با من", icon: <ConnectWithoutContactRounded/>, ...tabParams(4)},
  ]
}
