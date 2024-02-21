import { useCallback } from "react";
import { useThemeSwitcher } from "~/components/library/theme-controller/UseThemeSwitcher";
import type { HomeViewProps } from "~/components/views/HomeView";

export function useHomePage(): HomeViewProps {
  const themeSwitchProps = useThemeSwitcher();

  const handleShare = useCallback(() => {
    console.log("Share button clicked!");
  }, []);

  return {
    themeSwitchProps: themeSwitchProps,
    exampleCardProps: {
      label: "Hello World",
      onShare: handleShare,
    },
  };
}
