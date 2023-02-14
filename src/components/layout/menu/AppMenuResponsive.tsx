import { ComponentType, ReactElement, useMemo } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import AppMenu, { MenuOptions } from "./AppMenu";
import AppMenuMobile from "./AppMenuMobile";

interface Props extends MenuOptions {}

export default function AppMenuResponse(props: Props): ReactElement {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const AppMenuComponent: ComponentType<MenuOptions> = useMemo(() => {
    return isMobile ? AppMenuMobile : AppMenu;
  }, [isMobile]);

  return <AppMenuComponent {...props} />;
}