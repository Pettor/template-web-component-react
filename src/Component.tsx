import type { ReactElement } from "react";
import Box from "@mui/material/Box";

export interface ComponentProps {
  label: string;
}

export function Component({ label }: ComponentProps): ReactElement {
  return <Box>{label}</Box>;
}
