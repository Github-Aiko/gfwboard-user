import { useEffect, useState } from "react";
import { usePagination, useToggle } from "ahooks";
import constate from "constate";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export enum PlanType {
  PERIOD = "period",
  TRAFFIC = "traffic"
}

const useShop = () => {
  const [planType, setPlanType] = useState<PlanType[]>([PlanType.PERIOD, PlanType.TRAFFIC]);
  const [keyword, setKeyword] = useState("");

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, { set: setDrawerOpen, toggle: toggleDrawer }] = useToggle(!isMobile);

  const togglePlanType = (type: PlanType) => {
    if (planType.includes(type)) {
      setPlanType(planType.filter((item) => item !== type));
    } else {
      setPlanType([...planType, type]);
    }
  };

  useEffect(() => {
    console.log(planType);
  }, [planType]);

  return {
    planType,
    setPlanType,
    togglePlanType,
    keyword,
    setKeyword,
    drawerOpen,
    setDrawerOpen,
    toggleDrawer
  };
};

const [ShopProvider, useShopContext] = constate(useShop);

export { ShopProvider, useShopContext };
